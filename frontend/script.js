const form = document.getElementById("registrationForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const gender = document.getElementById("gender").value;
    const classList = document.getElementById("classList").value;

    if (
        firstName === "" ||
        lastName === "" ||
        gender === "" ||
        email === "" ||
        studentId === "" ||
        classList === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email");
        return;
    }


//SEND DATA TO BACKEND
    const studentData={
        firstName,
        lastName,
        email,
        studentId,
        gender,
        classList
    };

    try{
        const response=await fetch('http://localhost:3000/students', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(studentData)
        });

        const result=await response.json();

        alert("Registration Successful");
        console.log(result);

        form.reset();

    }catch(error){
        console.error(error);
        alert("Error submitting form  X ");
    }
});