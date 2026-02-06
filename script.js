const form = document.getElementById("registrationForm");
form.addEventListener("submit", function (e) {
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

    console.log("Student Details:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Gender:", gender);
    console.log("Email:", email);
    console.log("Student ID:", studentId);
    console.log("Class:", classList);

    alert("Registration Successful");
    form.reset();

});