// JavaScript file for registration page

document.addEventListener('DOMContentLoaded', function () {
    const wrappers = document.querySelectorAll('.wrapper');
    const nextButtons = document.querySelectorAll('[class^="next-btn-"]');

    // Show only the first content initially
    wrappers.forEach(wrapper => wrapper.style.display = 'none');
    const firstWrapper = document.querySelector('#content-1');
    firstWrapper.style.display = 'block';
    firstWrapper.classList.add('active');

    // Add click event for each "Next" button
    nextButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentIndex = parseInt(button.getAttribute('data-index'));
            const currentWrapper = document.querySelector(`#content-${currentIndex}`);
            const nextWrapper = document.querySelector(`#content-${currentIndex + 1}`);

            if (nextWrapper) {
                // Animate current wrapper out to the left
                currentWrapper.classList.remove('active');
                currentWrapper.classList.add('exit');

                // Wait for animation to complete before hiding
                setTimeout(() => {
                    currentWrapper.style.display = 'none';
                    currentWrapper.classList.remove('exit');
                }, 500); // Match the transition duration

                // Animate next wrapper in from the right
                nextWrapper.style.display = 'block';
                setTimeout(() => {
                    nextWrapper.classList.add('active');
                }, 50); // Allow DOM to update before applying class
            }
        });
    });
});