// 

document.addEventListener('DOMContentLoaded', () => {
    // Function to determine if user is on the data page
    function dataPage() {
        return document.querySelector('#dataContainer') !== null;
    }

    // Function to determine if user is on the resume page
    function resumePage() {
        return document.querySelector('.resume-container') !== null;
    }

    // For the data page
    if (dataPage()) {
        const submitBtn = document.getElementById('submitBtn');

        if (submitBtn) {
            submitBtn.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default submission behavior

                // Function to store data
                function storeData() {
                    // Collect the contact info and store it
                    const contact = {
                        firstname: document.getElementById("fname").value,
                        lastname: document.getElementById("lname").value,
                        title: document.getElementById("title").value,
                        phone: document.getElementById("phone").value,
                        country: document.getElementById("country").value,
                        city: document.getElementById("city").value,
                        email: document.getElementById("email").value,
                        dob: document.getElementById("DOB").value,
                        socials: document.getElementById("socials").value
                    };

                    // Collect the experience data and store it
                    const experience = {
                        jobTitle: document.getElementById("JobTitle").value,
                        nog: document.getElementById("NOG").value,
                        country: document.getElementById("Country").value,
                        state: document.getElementById("state").value,
                        city: document.getElementById("city").value,
                        startMonth: document.getElementById("smonth").value,
                        startYear: document.getElementById("syear").value,
                        endMonth: document.getElementById("emonth").value,
                        endYear: document.getElementById("eyear").value
                    };

                    // Collect data on education
                    const education = {
                        schName: document.getElementById("Schname").value,
                        location: document.getElementById("Location").value,
                        degree: document.getElementById("Degree").value,
                        fos: document.getElementById("FOS").value,
                        gmonth: document.getElementById("GMonth").value,
                        gyear: document.getElementById("GYear").value
                    };

                    // Collect data on skills
                    const skill = {
                        skill1: document.getElementById("skill1").value,
                        skill2: document.getElementById("skill2").value,
                        skill3: document.getElementById("skill3").value
                    };

                    // Saving all data into one object
                    const formData = {
                        contact: contact,
                        experience: experience,
                        education: education,
                        skill: skill
                    };

                    // Store data in localStorage
                    localStorage.setItem("resumeData", JSON.stringify(formData));

                    console.log('Form data stored successfully:', formData);
                }

                // Call storeData on submit
                storeData();
            });
        }
    }

    // For the resume page
    if (resumePage()) {
        // Populating the form fields
        function populateField() {
            // Retrieve the data from localStorage
            const storedData = localStorage.getItem("resumeData");

            if (storedData) {
                const formData = JSON.parse(storedData);

                // Fill the form fields with the stored data
                document.getElementById("fname").value = formData.contact.firstname || "";
                document.getElementById("lname").value = formData.contact.lastname || "";
                document.getElementById("title").value = formData.contact.title || "";
                document.getElementById("phone").value = formData.contact.phone || "";
                document.getElementById("country").value = formData.contact.country || "";
                document.getElementById("city").value = formData.contact.city || "";
                document.getElementById("email").value = formData.contact.email || "";
                document.getElementById("DOB").value = formData.contact.dob || "";
                document.getElementById("socials").value = formData.contact.socials || "";

                // Experience
                document.getElementById("JobTitle").value = formData.experience.jobTitle || "";
                document.getElementById("NOG").value = formData.experience.nog || "";
                document.getElementById("Country").value = formData.experience.country || "";
                document.getElementById("state").value = formData.experience.state || "";
                document.getElementById("city").value = formData.experience.city || "";
                document.getElementById("smonth").value = formData.experience.startMonth || "";
                document.getElementById("syear").value = formData.experience.startYear || "";
                document.getElementById("emonth").value = formData.experience.endMonth || "";
                document.getElementById("eyear").value = formData.experience.endYear || "";

                // Education
                document.getElementById("Schname").value = formData.education.schName || "";
                document.getElementById("Location").value = formData.education.location || "";
                document.getElementById("Degree").value = formData.education.degree || "";
                document.getElementById("FOS").value = formData.education.fos || "";
                document.getElementById("GMonth").value = formData.education.gmonth || "";
                document.getElementById("GYear").value = formData.education.gyear || "";

                // Skills
                document.getElementById("skill1").value = formData.skill.skill1 || "";
                document.getElementById("skill2").value = formData.skill.skill2 || "";
                document.getElementById("skill3").value = formData.skill.skill3 || "";
            }
        }

        populateField();
    }

    // Resume download functionality
    function downloadResume() {
        const resumeContainer = document.querySelector('.resume-container');

        const options = {
            margin: 0,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().from(resumeContainer).set(options).save();
    }

    // Example call to download resume (add event listener or trigger download as needed)
    // downloadResume();
});