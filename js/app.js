document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Simulate form submission (you can implement the actual submission logic here)

        // Show an alert message
        window.alert("Your Feedback Sent!");

        // Clear form fields
        contactForm.reset();
    });
});
