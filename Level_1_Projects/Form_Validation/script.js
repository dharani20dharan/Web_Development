document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    let isValid = true;

    // Name validation
    let name = document.getElementById("name").value.trim();
    if (name.length < 3) {
        showError("name", "Name must be at least 3 characters long");
        isValid = false;
    }

    // Email validation
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError("email", "Please enter a valid email address");
        isValid = false;
    }

    // Phone validation
    let phone = document.getElementById("phone").value.trim();
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        showError("phone", "Phone number must be exactly 10 digits");
        isValid = false;
    }

    // Age validation
    let age = document.getElementById("age").value.trim();
    if (age === "" || isNaN(age) || age < 18) {
        showError("age", "You must be at least 18 years old");
        isValid = false;
    }

    // Event type validation
    let eventType = document.getElementById("event").value;
    if (eventType === "") {
        showError("event", "Please select an event type");
        isValid = false;
    }

    // If all fields are valid
    if (isValid) {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }
});

// Function to show error under the input
function showError(inputId, message) {
    let inputField = document.getElementById(inputId);
    let errorField = inputField.nextElementSibling;
    errorField.textContent = message;
    errorField.style.color = "red";
}
