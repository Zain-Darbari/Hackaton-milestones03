document.getElementById("resume-form")?.addEventListener('submit',function(event){
    event.preventDefault();


    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    const firstnameElement = document.getElementById('first-name') as HTMLInputElement;
    const lastnameElement = document.getElementById('last-name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;

    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    

    if(profilePictureInput &&firstnameElement && lastnameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){

        const firstname = firstnameElement.value;
        const lastname = lastnameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        const profilepictureFile = profilePictureInput.files?.[0]
        const profilePictureURL =profilepictureFile ? URL.createObjectURL(profilepictureFile) : '';
    

    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`: ""}
    <p><strong>First Name:</strong> ${firstname}</p>
    <p><strong>Last Name:</strong> ${lastname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    
    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>

    `;

    console.log({
        firstnameElement, lastnameElement, emailElement, 
        phoneElement, educationElement, experienceElement, skillsElement
    });
    

    const resumeOutputElement = document.getElementById('resumeOutput')
    if(resumeOutputElement){
     resumeOutputElement.innerHTML = resumeOutput

    }else{
     console.error("The resume display element is missing.")

    }
}   else{
    console.error('one or more output elements are missing')
}
});