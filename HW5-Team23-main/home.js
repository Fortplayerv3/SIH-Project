document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isActive = question.classList.contains('active');
            
            // Close all open answers
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.style.maxHeight = null;
            });

            // If it's not active, open it
            if (!isActive) {
                question.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
// Array of background images
const images = [
    'url(bg1.jpeg)', // Replace with your image paths
    'url(bg2.jpeg)',
    'url(bg3.jpeg)',
    'url(bg4.jpeg)'
];

let currentIndex = 0;
const changeInterval = 5000; // Time interval for auto slide (in milliseconds)

// Function to change the background image
function changeBackground(index) {
    document.body.style.backgroundImage = images[index];
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    changeBackground(currentIndex);
}

// Function to go to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeBackground(currentIndex);
}

// Set initial background image
changeBackground(currentIndex);

// Automatically change the background image at intervals
setInterval(nextImage, changeInterval);

// Event listeners for manual navigation using arrows
document.querySelector('.arrow-left').addEventListener('click', prevImage);
document.querySelector('.arrow-right').addEventListener('click', nextImage);
