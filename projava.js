// ===============================
// 1. MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu when a link is clicked

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


// ===============================
// 2. FAQ
// ===============================

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const faqItem = question.parentElement;

        faqItem.classList.toggle("active");

    });

});


// ===============================
// 3. FORM VALIDATION
// ===============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let valid = true;


    // Get values

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value.trim();

    const name =
        document.getElementById("name").value.trim();

    const comment =
        document.getElementById("comment").value.trim();


    // Clear old errors

    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("nameError").textContent = "";
    document.getElementById("commentError").textContent = "";

    document.getElementById("successMessage").textContent = "";


    // EMAIL

    if (email === "") {

        document.getElementById("emailError")
            .textContent = "Email is required.";

        valid = false;

    }

    else if (!email.includes("@") || !email.includes(".")) {

        document.getElementById("emailError")
            .textContent = "Enter a valid email.";

        valid = false;

    }


    // PASSWORD

    if (password === "") {

        document.getElementById("passwordError")
            .textContent = "Password is required.";

        valid = false;

    }

    else if (password.length < 6) {

        document.getElementById("passwordError")
            .textContent =
            "Password must contain at least 6 characters.";

        valid = false;

    }


    // NAME

    if (name === "") {

        document.getElementById("nameError")
            .textContent = "Name or phone is required.";

        valid = false;

    }


    // COMMENT

    if (comment.length < 5) {

        document.getElementById("commentError")
            .textContent =
            "Please write at least 5 characters.";

        valid = false;

    }


    // SUCCESS

    if (valid) {

        document.getElementById("successMessage")
            .textContent =
            "Form submitted successfully!";

        form.reset();

    }

});


// ===============================
// 4. STUDENT SEARCH / FILTER
// ===============================

const studentSearch =
    document.getElementById("studentSearch");

const students =
    document.querySelectorAll(".student-card");


studentSearch.addEventListener("input", function() {

    const searchValue =
        studentSearch.value.toLowerCase();


    students.forEach(function(student) {

        const studentText =
            student.textContent.toLowerCase();


        if (studentText.includes(searchValue)) {

            student.style.display = "block";

        }

        else {

            student.style.display = "none";

        }

    });

});
