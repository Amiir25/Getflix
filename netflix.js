/*-------------- Scroll Buttons & Shadows --------------*/
const movies = document.querySelectorAll('.movies');
const leftButtons = document.querySelectorAll('.scroll-btn.left');
const rightButtons = document.querySelectorAll('.scroll-btn.right');
const leftShadows = document.querySelectorAll('.scroll-shadow.left');
const rightShadows = document.querySelectorAll('.scroll-shadow.right');


movies.forEach((movies, index) => {
    const leftButton = leftButtons[index];
    const rightButton = rightButtons[index];
    const leftShadow = leftShadows[index];
    const rightShadow = rightShadows[index];

    leftButton.addEventListener('click', () => {
        movies.scrollBy({ left: -1000, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', () => {
        movies.scrollBy({ left: 1000, behavior: 'smooth' });
    });

    /*-- Scroll Shadows --*/
    function updateShadows() {
        const scrollLeft = movies.scrollLeft; // How far the .movies scrolled horizontally
        const scrollWidth = movies.scrollWidth; // Total scrollable width of .movies
        const clientWidth = movies.clientWidth; // Visible width of .movies

        // Hide the left button
        leftButton.style.visibility = 'hidden';

        // Show/hide the left shadow
        // Check if there is hidden content to the left of the visible area
        if (scrollLeft > 0) {

            // Show shadow if there is scrollable content on the left
            leftShadow.style.opacity = '1';

            // Show the left button
            leftButton.style.visibility = 'visible';
        } else {

            // Hide shadow if scrolled all the way to the left
            leftShadow.style.opacity = '0';
        }

        // Show/hide the right shadow
        // Calculate the position of the right edge of the visible area
        if (scrollLeft + clientWidth < scrollWidth) {

            // Show shadow if there is scrollable content on the right
            rightShadow.style.opacity = '1';

            // Show the right button
            rightButton.style.visibility = 'visible';

        } else {

            // Hide shadow if scrolled all the way to the right
            rightShadow.style.opacity = '0';

            // Hide th right button
            rightButton.style.visibility = 'hidden';
        }
    }

    // Update shadows on scroll and resize events
    movies.addEventListener('scroll', updateShadows);
    window.addEventListener('resize', updateShadows);
    updateShadows();
});

/*-------------- Movie Details --------------*/
const movieItem = document.querySelectorAll('.movie-item');
const movieDetailsWrapper = document.querySelector('.movie-details-wrapper')
const overlay = document.querySelector('.overlay');
const detailsHead = document.querySelector('.details-head');

const filmType = document.getElementById('film-type');
const movieTitle = document.getElementById('movie-title');
const releaseDate = document.getElementById('release-date');
const ageRating = document.getElementById('age-rating');
const movieType = document.getElementById('movie-type');
const genre1 = document.getElementById('genre1');
const genre2 = document.getElementById('genre2');
const genre3 = document.getElementById('genre3');
const logline = document.getElementById('logline');


movieItem.forEach((movie) => {
    movie.addEventListener('click', () => {
        const dataFilmType = movie.getAttribute('data-film-type');
        const dataTitle = movie.getAttribute('data-movie-title');
        const dataRelease = movie.getAttribute('data-release-date');
        const dataAge = movie.getAttribute('data-age-rating');
        const dataMovieType = movie.getAttribute('data-movie-type');
        const dataGenre1 = movie.getAttribute('data-genre1');
        const dataGenre2 = movie.getAttribute('data-genre2');
        const dataGenre3 = movie.getAttribute('data-genre3');
        const dataLogline = movie.getAttribute('data-logline');
        const dataBackground = movie.getAttribute('data-background');

        // Debug the background path
        console.log('Background Image Path:', dataBackground);

        filmType.textContent = dataFilmType;
        movieTitle.textContent = dataTitle;
        releaseDate.textContent = dataRelease;
        ageRating.textContent = dataAge;
        movieType.textContent = dataMovieType;
        genre1.textContent = dataGenre1;
        genre2.textContent = dataGenre2;
        genre3.textContent = dataGenre3;
        logline.textContent = dataLogline;

        detailsHead.style.background = `linear-gradient(
        rgba(22, 22, 22, 0),
        rgba(22, 22, 22, 0),
        rgba(22, 22, 22, .0),
        rgba(22, 22, 22, .9) 90%),
        url('${dataBackground}') no-repeat center center / cover`;

        // Apply smooth transition
        showMovieDetails();

        // Show the movie detail
        movieDetailsWrapper.style.display = 'block';
        overlay.style.display = 'block';
    });
});

// Close the details box by exit button
const closeDetails = document.querySelector('.close-details');
closeDetails.addEventListener('click', () => {
    movieDetailsWrapper.style.display = 'none';
    overlay.style.display = 'none';
});

// close the details box by overlay
overlay.addEventListener('click', () => {
    movieDetailsWrapper.style.display = 'none';
    overlay.style.display = 'none';
});

function showMovieDetails() {
    // Set initial styles to apply smooth transition
    movieDetailsWrapper.style.opacity = '0';
    overlay.style.opacity = '0';

    // Add transition effect
    movieDetailsWrapper.style.transition = 'opacity 0.9s ease';
    overlay.style.transition = 'opacity 0.9s ease';

    // Make the box visible after a short delay
    setTimeout(() => {
        movieDetailsWrapper.style.opacity = '1';
        overlay.style.opacity = '1';
    }, 10);
}


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
    window.location.href = '/html/signin.html';
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