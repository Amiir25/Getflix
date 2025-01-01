// JavaScript file for registration page

const content1 = document.getElementById('content-1');
const content2 = document.getElementById('content-2');
const content3 = document.getElementById('content-3');

const nextBtn1 = document.querySelector('.next-btn-1');
const nextBtn2 = document.querySelector('.next-btn-2');
const nextBtn3 = document.querySelector('.next-btn-3');

// Initialize the first form as active
// content1.classList.add('active');
content1.style.display = 'block';


nextBtn1.addEventListener('click', () => {
    content1.classList.add('exit');
    content1.classList.remove('active');

    content2.classList.remove('exit');
    content2.style.display = 'block';

    setTimeout(() => {
        nextContent.style.left = '0';
    }, 50);
});

nextBtn2.addEventListener('click', () => {
    content2.classList.add('exit');
    content2.classList.remove('active');

    content3.classList.add('active');
    setTimeout(() => {
        nextContent.style.left = '0';
    }, 50);
});




// const nextBtn = document.querySelectorAll('.next-step');
// let currentIndex = 1;
// nextBtn.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         // Access the clicked button using 'event.target'
//         const currentBtn = event.target;

//         // Get the data-link attribute value using 'dataset.link'
//         const currentIndex = currentBtn.dataset.link;

//         const currentContent = document.getElementById(`content-${currentIndex}`);
//         const nextContent = document.getElementById(`content-${currentIndex + 1}`);

//         // Exit the function if there is no next content
//         if (!nextContent) {
//             window.location.href = '../index.html';
//             return;
//         };

//         currentContent.classList.add('exit');
//         currentContent.classList.remove('active');

//         nextContent.classList.remove('exit');
//         setTimeout(() => {
//             nextContent.style.left = '0';
//         }, 50);

//         // currentIndex++;
//     });
// });