//

// document.addEventListener("DOMContentLoaded", () => {
//   // Function to determine if user is on the data page
//   function dataPage() {
//     return document.querySelector("#dataContainer") !== null;
//   }

//   // Function to determine if user is on the resume page
//   function resumePage() {
//     return document.querySelector(".resume-container") !== null;
//   }

//   // For the data page
//   if (dataPage()) {
//     const submitBtn = document.getElementById("submitBtn");

//     if (submitBtn) {
//       submitBtn.addEventListener("click", (event) => {
//         event.preventDefault(); // Prevent default submission behavior
//         storeData();
//       });
//     }
//   }

//   // Move storeData function outside of the event listener
//   function storeData() {
//     const element = document.querySelector("elementId");
//     const value = element ? element.value : null;
//     // Collect the contact info and store it
//     const contact = {
//       firstname: document.getElementById("fname").value,
//       lastname: document.getElementById("lname").value,
//       title: document.getElementById("title").value,
//       phone: document.getElementById("phone").value,
//       country: document.getElementById("country").value,
//       city: document.getElementById("city").value,
//       email: document.getElementById("email").value,
//       dob: document.getElementById("DOB").value,
//       socials: document.getElementById("socials").value,
//     };

//     // Collect the experience data and store it
//     const experience = {
//       jobTitle: document.getElementById("JobTitle").value,
//       nog: document.getElementById("NOG").value,
//       country: document.getElementById("Country").value,
//       state: document.getElementById("state").value,
//       city: document.getElementById("city").value,
//       startMonth: document.getElementById("smonth").value,
//       startYear: document.getElementById("syear").value,
//       endMonth: document.getElementById("emonth").value,
//       endYear: document.getElementById("eyear").value,
//     };

//     // Collect data on education
//     const education = {
//       schName: document.getElementById("Schname").value,
//       location: document.getElementById("Location").value,
//       degree: document.getElementById("Degree").value,
//       fos: document.getElementById("FOS").value,
//       gmonth: document.getElementById("GMonth").value,
//       gyear: document.getElementById("GYear").value,
//     };

//     // Collect data on skills
//     const skill = {
//       skill1: document.getElementById("skill1").value,
//       skill2: document.getElementById("skill2").value,
//       skill3: document.getElementById("skill3").value,
//     };

//     // Saving all data into one object
//     const formData = {
//       contact: contact,
//       experience: experience,
//       education: education,
//       skill: skill,
//     };

//     // Store data in localStorage
//     localStorage.setItem("resumeData", JSON.stringify(formData));

//     console.log("Form data stored successfully:", formData);
//     alert("Resume data submitted and stored successfully!");
//   }

//   // For the resume page
//   if (resumePage()) {
//     // Populating the form fields
//     function populateField() {
//       // Retrieve the data from localStorage
//       const storedData = localStorage.getItem("resumeData");

//       if (storedData) {
//         const formData = JSON.parse(storedData);

//         // Fill the form fields with the stored data
//         document.getElementById("fname").value =
//           formData.contact.firstname || "";
//         document.getElementById("lname").value =
//           formData.contact.lastname || "";
//         document.getElementById("title").value = formData.contact.title || "";
//         document.getElementById("phone").value = formData.contact.phone || "";
//         document.getElementById("country").value =
//           formData.contact.country || "";
//         document.getElementById("city").value = formData.contact.city || "";
//         document.getElementById("email").value = formData.contact.email || "";
//         document.getElementById("DOB").value = formData.contact.dob || "";
//         document.getElementById("socials").value =
//           formData.contact.socials || "";

//         // Experience
//         document.getElementById("JobTitle").value =
//           formData.experience.jobTitle || "";
//         document.getElementById("NOG").value = formData.experience.nog || "";
//         document.getElementById("Country").value =
//           formData.experience.country || "";
//         document.getElementById("state").value =
//           formData.experience.state || "";
//         document.getElementById("city").value = formData.experience.city || "";
//         document.getElementById("smonth").value =
//           formData.experience.startMonth || "";
//         document.getElementById("syear").value =
//           formData.experience.startYear || "";
//         document.getElementById("emonth").value =
//           formData.experience.endMonth || "";
//         document.getElementById("eyear").value =
//           formData.experience.endYear || "";

//         // Education
//         document.getElementById("Schname").value =
//           formData.education.schName || "";
//         document.getElementById("Location").value =
//           formData.education.location || "";
//         document.getElementById("Degree").value =
//           formData.education.degree || "";
//         document.getElementById("FOS").value = formData.education.fos || "";
//         document.getElementById("GMonth").value =
//           formData.education.gmonth || "";
//         document.getElementById("GYear").value = formData.education.gyear || "";

//         // Skills
//         document.getElementById("skill1").value = formData.skill.skill1 || "";
//         document.getElementById("skill2").value = formData.skill.skill2 || "";
//         document.getElementById("skill3").value = formData.skill.skill3 || "";
//       }
//     }

//     populateField();
//   }

//   // Resume download functionality
//   function downloadResume() {
//     const resumeContainer = document.querySelector(".resume-container");

//     const options = {
//       margin: 0,
//       filename: "resume.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
//     };

//     html2pdf().from(resumeContainer).set(options).save();
//   }

//   // Example call to download resume (add event listener or trigger download as needed)
//   // downloadResume();
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("resumeForm");

//     // Form submission logic to store data in localStorage
//     if (form) {
//       form.addEventListener("submit", (event) => {
//         event.preventDefault();

//         const formData = new FormData(form);
//         const data = Object.fromEntries(formData.entries());

//         // Validate required fields
//         const requiredFields = ['fname', 'lname', 'title', 'phone', 'email'];
//         const missingFields = requiredFields.filter(field => !data[field]);

//         if (missingFields.length > 0) {
//           alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
//           return;
//         }

//         // Store the form data in localStorage
//         localStorage.setItem("resumeData", JSON.stringify(data));

//         console.log("Form data stored successfully:", data);
//         alert("Resume data submitted and stored successfully!");

//         // Optionally redirect to the resume page or trigger the resume display
//         populateResume(); // Automatically populate the resume after form submission
//       });
//     }

//     // Function to populate the resume content
//     function populateResume() {
//       const resumeData = JSON.parse(localStorage.getItem("resumeData"));

//       if (!resumeData) {
//         return; // If no data found, exit early
//       }

//       // Populate the sidebar profile information
//       document.querySelector(".profile-info p:nth-child(2)").textContent = `Date of Birth: ${resumeData.dob || 'N/A'}`;
//       document.querySelector(".profile-info p:nth-child(3)").textContent = `Country: ${resumeData.country || 'N/A'}`;
//       document.querySelector(".profile-info p:nth-child(4)").textContent = `City: ${resumeData.city || 'N/A'}`;
//       document.querySelector(".profile-info p:nth-child(5)").innerHTML = `Twitter: <a href="https://twitter.com/${resumeData.socials || 'yourhandle'}" target="_blank">@${resumeData.socials || 'yourhandle'}</a>`;
//       document.querySelector(".profile-info p:nth-child(6)").textContent = `Current Occupation: ${resumeData.title || 'N/A'}`;

//       // Populate contact information
//       document.querySelector(".contact-info p:nth-child(2)").textContent = `Email: ${resumeData.email || 'N/A'}`;
//       document.querySelector(".contact-info p:nth-child(3)").textContent = `Phone: ${resumeData.phone || 'N/A'}`;

//       // Populate main content: Education
//       document.querySelector(".education .edu-item:nth-child(1) p:nth-child(1)").textContent = `School Name: ${resumeData.schName || 'N/A'}`;
//       document.querySelector(".education .edu-item:nth-child(1) p:nth-child(2)").textContent = `Field of Study: ${resumeData.fos || 'N/A'}`;
//       document.querySelector(".education .edu-item:nth-child(2) p:nth-child(1)").textContent = `Degree: ${resumeData.degree || 'N/A'}`;
//       document.querySelector(".education .edu-item:nth-child(2) p:nth-child(2)").textContent = `School Location: ${resumeData.location || 'N/A'}`;
//       document.querySelector(".education p:nth-child(3)").textContent = `Graduation Month/Year: ${resumeData.gmonth || 'N/A'}, ${resumeData.gyear || 'N/A'}`;

//       // Populate main content: Experience
//       document.querySelector(".experience .exp-item:nth-child(1) p:nth-child(1)").textContent = `Job Title: ${resumeData.jobTitle || 'N/A'}`;
//       document.querySelector(".experience .exp-item:nth-child(1) p:nth-child(2)").textContent = `Organization Name: ${resumeData.nog || 'N/A'}`;
//       document.querySelector(".experience .exp-item:nth-child(2) p:nth-child(1)").textContent = `State: ${resumeData.state || 'N/A'}`;
//       document.querySelector(".experience .exp-item:nth-child(2) p:nth-child(2)").textContent = `Country: ${resumeData.expCountry || 'N/A'}`;
//       document.querySelector(".experience .exp-item:nth-child(3) p:nth-child(1)").textContent = `Start Year: ${resumeData.syear || 'N/A'}`;
//       document.querySelector(".experience .exp-item:nth-child(3) p:nth-child(2)").textContent = `End Year: ${resumeData.eyear || 'N/A'}`;
//       document.querySelector(".experience .exp-item:nth-child(4) p:nth-child(1)").textContent = `Start Month: ${resumeData.smonth || 'N/A'}`;
//       document.querySelector(".experience .exp-item:nth-child(4) p:nth-child(2)").textContent = `End Month: ${resumeData.emonth || 'N/A'}`;

//       // Populate main content: Skills
//       const skillsList = document.querySelector(".skills-list");
//       skillsList.innerHTML = ''; // Clear existing skills
//       for (let i = 1; i <= 3; i++) {
//         if (resumeData[`skill${i}`]) {
//           const li = document.createElement("li");
//           li.textContent = resumeData[`skill${i}`];
//           skillsList.appendChild(li);
//         }
//       }
//     }

//     // Populate resume if data already exists in localStorage
//     populateResume();

//     // Function to download resume as PDF
//     document.getElementById("downloadBtn").addEventListener("click", downloadResume);

//     function downloadResume() {
//       const resumeContainer = document.querySelector(".resume-container");
//       const opt = {
//         margin: 1,
//         filename: 'resume.pdf',
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//       };

//       html2pdf().from(resumeContainer).set(opt).save();
//     }
//   });

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resumeForm");
  const navigateBtn = document.getElementById("navigateBtn");
  navigateBtn.id = "navigateBtn";
  navigateBtn.textContent = "Go to UI/UX Resume";
  navigateBtn.style.display = "none"; // Initially hidden
  form.after(navigateBtn); // Add the button after the form

  // Form submission logic to store data in localStorage
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Validate required fields
      const requiredFields = ["fname", "lname", "title", "phone", "email"];
      const missingFields = requiredFields.filter((field) => !data[field]);

      if (missingFields.length > 0) {
        alert(
          `Please fill in the following required fields: ${missingFields.join(
            ", "
          )}`
        );
        return;
      }

      // Store the form data in localStorage
      localStorage.setItem("resumeData", JSON.stringify(data));

      console.log("Form data stored successfully:", data);
      alert("Resume data submitted and stored successfully!");

      // Optionally redirect to the resume page or trigger the resume display
      populateResume(); // Automatically populate the resume after form submission

      // Show the button to navigate to UI/UX page after form submission
      navigateBtn.style.display = "inline-block";
    });
    navigateBtn.addEventListener("click", () => {
      window.location.href = "UIUX.html";
    });
  }

// Function to populate the resume data from localStorage
function populateResume() {
    const resumeData = JSON.parse(localStorage.getItem("resumeData")); // Retrieve data from localStorage

    if (!resumeData) {
        console.error("No resume data found in localStorage.");
        return;
    }

    // Safely populate the profile information
    const dobElement = document.querySelector(".profile-info p:nth-child(2)");
    if (dobElement) {
        dobElement.textContent = `Date of Birth: ${resumeData.dob || 'N/A'}`;
    }

    const countryElement = document.querySelector(".profile-info p:nth-child(3)");
    if (countryElement) {
        countryElement.textContent = `Country: ${resumeData.country || 'N/A'}`;
    }

    const cityElement = document.querySelector(".profile-info p:nth-child(4)");
    if (cityElement) {
        cityElement.textContent = `City: ${resumeData.city || 'N/A'}`;
    }

    const twitterElement = document.querySelector(".profile-info p:nth-child(5) a");
    if (twitterElement) {
        twitterElement.href = `https://twitter.com/${resumeData.socials || 'yourhandle'}`;
        twitterElement.textContent = `@${resumeData.socials || 'yourhandle'}`;
    }

    const occupationElement = document.querySelector(".profile-info p:nth-child(6)");
    if (occupationElement) {
        occupationElement.textContent = `Current Occupation: ${resumeData.title || 'N/A'}`;
    }

    // Populate contact information
    const emailElement = document.querySelector(".contact-info p:nth-child(2)");
    if (emailElement) {
        emailElement.textContent = `Email: ${resumeData.email || 'N/A'}`;
    }

    const phoneElement = document.querySelector(".contact-info p:nth-child(3)");
    if (phoneElement) {
        phoneElement.textContent = `Phone: ${resumeData.phone || 'N/A'}`;
    }

    // Populate education section
    const schoolNameElement = document.querySelector(".education .edu-item:nth-child(1) p:nth-child(1)");
    if (schoolNameElement) {
        schoolNameElement.textContent = `School Name: ${resumeData.schName || 'N/A'}`;
    }

    const fieldOfStudyElement = document.querySelector(".education .edu-item:nth-child(1) p:nth-child(2)");
    if (fieldOfStudyElement) {
        fieldOfStudyElement.textContent = `Field of Study: ${resumeData.fos || 'N/A'}`;
    }

    const degreeElement = document.querySelector(".education .edu-item:nth-child(2) p:nth-child(1)");
    if (degreeElement) {
        degreeElement.textContent = `Degree: ${resumeData.degree || 'N/A'}`;
    }

    const schoolLocationElement = document.querySelector(".education .edu-item:nth-child(2) p:nth-child(2)");
    if (schoolLocationElement) {
        schoolLocationElement.textContent = `School Location: ${resumeData.location || 'N/A'}`;
    }

    const graduationElement = document.querySelector(".education p:nth-child(3)");
    if (graduationElement) {
        graduationElement.textContent = `Graduation Month/Year: ${resumeData.gmonth || 'N/A'}, ${resumeData.gyear || 'N/A'}`;
    }

    // Populate experience section
    const jobTitleElement = document.querySelector(".experience .exp-item:nth-child(1) p:nth-child(1)");
    if (jobTitleElement) {
        jobTitleElement.textContent = `Job Title: ${resumeData.jobTitle || 'N/A'}`;
    }

    const organizationElement = document.querySelector(".experience .exp-item:nth-child(1) p:nth-child(2)");
    if (organizationElement) {
        organizationElement.textContent = `Organization Name: ${resumeData.nog || 'N/A'}`;
    }

    const stateElement = document.querySelector(".experience .exp-item:nth-child(2) p:nth-child(1)");
    if (stateElement) {
        stateElement.textContent = `State: ${resumeData.state || 'N/A'}`;
    }

    const expCountryElement = document.querySelector(".experience .exp-item:nth-child(2) p:nth-child(2)");
    if (expCountryElement) {
        expCountryElement.textContent = `Country: ${resumeData.expCountry || 'N/A'}`;
    }

    const startYearElement = document.querySelector(".experience .exp-item:nth-child(3) p:nth-child(1)");
    if (startYearElement) {
        startYearElement.textContent = `Start Year: ${resumeData.syear || 'N/A'}`;
    }

    const endYearElement = document.querySelector(".experience .exp-item:nth-child(3) p:nth-child(2)");
    if (endYearElement) {
        endYearElement.textContent = `End Year: ${resumeData.eyear || 'N/A'}`;
    }

    const startMonthElement = document.querySelector(".experience .exp-item:nth-child(4) p:nth-child(1)");
    if (startMonthElement) {
        startMonthElement.textContent = `Start Month: ${resumeData.smonth || 'N/A'}`;
    }

    const endMonthElement = document.querySelector(".experience .exp-item:nth-child(4) p:nth-child(2)");
    if (endMonthElement) {
        endMonthElement.textContent = `End Month: ${resumeData.emonth || 'N/A'}`;
    }

    // Populate skills section
    const skillsList = document.querySelector(".skills-list");
    if (skillsList) {
        skillsList.innerHTML = ''; // Clear existing skills
        for (let i = 1; i <= 3; i++) {
            if (resumeData[`skill${i}`]) {
                const li = document.createElement("li");
                li.textContent = resumeData[`skill${i}`];
                skillsList.appendChild(li);
            }
        }
    }
}

// Call populateResume to fill the page with data from localStorage
populateResume();


  // Function to download resume as PDF
  document
    .getElementById("downloadBtn")
    .addEventListener("click", downloadResume);

  function downloadResume() {
    const resumeContainer = document.querySelector(".resume-container");
    const opt = {
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(resumeContainer).set(opt).save();
  }

  // Add click event to the navigate button
  navigateBtn.addEventListener("click", () => {
    // Navigate to the UIUX.html page
    window.location.href = "UIUX.html";
  });

  // Dynamically show the navigation button when the form is valid
  form.addEventListener("input", () => {
    if (form.checkValidity()) {
      navigateBtn.style.display = "inline-block";
    } else {
      navigateBtn.style.display = "none";
    }
  });
});
