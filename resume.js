window.onload = function() {
    const resumeData = JSON.parse(localStorage.getItem("resumeData"));

    if (resumeData) {
        document.getElementById("resumeName").innerText = resumeData.name || "Your Name";
        document.getElementById("resumeRole").innerText = resumeData.role || "Your Role";
        document.getElementById("resumeAboutMe").innerText = resumeData.aboutMe || "Your About Me";
        document.getElementById("resumeCareerObjective").innerText = resumeData.careerObjective || "Your Career Objective";
        document.getElementById("resumeEmail").innerText = resumeData.email || "Your Email";
        document.getElementById("resumePhone").innerText = resumeData.phone || "Your Phone";

        if (resumeData.github) {
            const githubLink = document.getElementById("resumeGithub");
            githubLink.href = resumeData.github;
            githubLink.innerText = resumeData.github;
        }

        if (resumeData.linkedin) {
            const linkedinLink = document.getElementById("resumeLinkedin");
            linkedinLink.href = resumeData.linkedin;
            linkedinLink.innerText = resumeData.linkedin;
        }

        document.getElementById("resumeLanguages").innerHTML = resumeData.languages
            ? resumeData.languages.map(lang => `<li>${lang}</li>`).join('')
            : "<li>Not Provided</li>";

        document.getElementById("resumeSkills").innerHTML = resumeData.skills
            ? resumeData.skills.map(skill => `<li>${skill}</li>`).join('')
            : "<li>Not Provided</li>";

        document.getElementById("resumeEducation").innerHTML = resumeData.education
            ? resumeData.education.map(edu => `<li>${edu}</li>`).join('')
            : "<li>Not Provided</li>";

        document.getElementById("resumeExperience").innerHTML = resumeData.experience
            ? resumeData.experience.map(exp => `<li>${exp}</li>`).join('')
            : "<li>Not Provided</li>";

        document.getElementById("resumeCertificates").innerHTML = resumeData.certificates
            ? resumeData.certificates.map(cert => `<li>${cert}</li>`).join('')
            : "<li>Not Provided</li>";
    }
};

// Function to print the resume
function printResume() {
    window.print();
}
