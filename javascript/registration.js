// JavaScript file for registration page

document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.querySelector('.form-container');
    const nextButtons = document.querySelectorAll('.next-btn');
    nextButtons.forEach(button => {
        button.addEventListener('click', function () {
            formContainer.scrollBy({ left: -1000, behavior: 'smooth' });
        });
    });
});

// leftButton.addEventListener('click', () => {
//     movies.scrollBy({ left: -1000, behavior: 'smooth' });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const wrappers = document.querySelectorAll('.wrapper'); // All content sections
//     const nextButtons = document.querySelectorAll('.next-btn'); // All "Next" buttons

//     // Show only the first content initially
//     wrappers.forEach(wrapper => {
//         wrapper.style.display = 'none';
//         wrapper.classList.remove('active', 'exit'); // Reset classes
//     });

//     const firstWrapper = document.querySelector('#content-1');
//     firstWrapper.style.display = 'block';
//     firstWrapper.classList.add('active');

//     // Add click event to each "Next" button
//     nextButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const currentIndex = parseInt(button.getAttribute('data-index'));
//             const currentWrapper = document.querySelector(`#content-${currentIndex}`);
//             const nextWrapper = document.querySelector(`#content-${currentIndex + 1}`);

//             if (nextWrapper) {
//                 currentWrapper.classList.remove('active');
//                 currentWrapper.classList.add('exit');

//                 setTimeout(() => {
//                     currentWrapper.style.display = 'none';
//                     currentWrapper.classList.remove('exit');
//                 }, 500); // Match transition duration

//                 nextWrapper.style.display = 'block';
//                 setTimeout(() => {
//                     nextWrapper.classList.add('active');
//                 }, 50);
//             }
//         });
//     });
// });
