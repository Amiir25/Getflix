/*-------------- Frequently Asked Questions --------------*/
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // Select the answer div
        let icon; // To swich icons

        //Collapse other answers
        document.querySelectorAll('.faq-answer').forEach((otherAnswer) => {
            if (otherAnswer !== answer) {
                otherAnswer.classList.remove('active');

                // Change icon
                icon = otherAnswer.previousElementSibling.querySelector('i');
                icon.classList.remove('fa-x');
                icon.classList.add('fa-plus');
            }
        });

        // display current answer
        if (answer.classList.contains('active')) {
            answer.classList.remove('active');
        } else {
            answer.classList.add('active');
        }

        // Change icon
        icon = question.querySelector('i');
        if (icon.classList.contains('fa-plus')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-x');
        } else {
            icon.classList.remove('fa-x');
            icon.classList.add('fa-plus');
        }
    });
});

/*-------------- Sign In Button --------------*/
function openSignInPage() {
    window.location.href = 'html/signin.html';
}

/*-------------- Get Started Button --------------*/
const getStartedBtns = document.querySelectorAll('.get-started-btn');

getStartedBtns.forEach((button) => {
    button.addEventListener('click', () => {
        // Find the closest email input related to this button
        const getStartedEmail = button.closest('.get-started').
            querySelector('.get-started-email input');

        if (getStartedEmail.value.trim() === "") {
            getStartedEmail.focus();
        } else {
            window.location.href = 'html/registration.html';
        }

        // Save the email entered
        const userEmail = getStartedEmail.value.trim();
        if (userEmail) {
            sessionStorage.setItem('userEmail', userEmail);
        }
    });
});

/*-------------- Registrations --------------*/
function openRegistration() {
    window.location.href = 'html/registration.html';
}
function openRegistrationForm() {
    window.location.href = 'html/registration-form.html';
}

// Put the email in the registration-form page
window.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('registration-form')) {
        const savedEmail = sessionStorage.getItem('userEmail');
        if (savedEmail) {
            document.querySelector('#registration-email').value = savedEmail
        }
    }
});

/*-------------- Form Validations --------------*/
const checkEmail = document.getElementById('registration-email');
const checkPassword = document.getElementById('registration-password');
const btnNext2 = document.querySelector('.next-step-2');

btnNext2.addEventListener('click', () => {
    document.querySelector('.line-1').textContent = 'I am fine!'
    // if (checkEmail.value.trim() === "") {
    //     checkEmail.classList.add('empty-form');
    // } else {
    //     checkEmail.classList.remove('empty-form');
    // }
    // if (checkPassword.value.trim() === "") {
    //     checkPassword.classList.add('empty-form');
    // } else {
    //     checkPassword.classList.remove('empty-form');
    // }
    // if (checkEmail.value.trim() !== "" && checkPassword.value.trim() !== "") {
    //     window.location.href = 'home.htm'
    // }
});


// Go back to home page
function backHome() {
    window.location.href = '../index.html';
}