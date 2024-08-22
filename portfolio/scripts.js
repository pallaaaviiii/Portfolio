document.addEventListener('DOMContentLoaded', function() {
    // Create bubbles dynamically
    const bubbleContainer = document.querySelector('.bubble-container');
    const numBubbles = 30; // Number of bubbles to create

    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.width = `${Math.random() * 50 + 20}px`; // Random size
        bubble.style.height = bubble.style.width;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.top = `${Math.random() * 100}vh`;
        bubbleContainer.appendChild(bubble);
    }

    // Bubble pop effect
    const bubbles = document.querySelectorAll('.bubble');

    bubbles.forEach(bubble => {
        bubble.addEventListener('mouseover', function() {
            this.classList.add('bubble-pop');
        });

        bubble.addEventListener('mouseout', function() {
            this.classList.remove('bubble-pop');
        });
    });

    // Text animation effect
    const textElements = document.querySelectorAll('.description h2, .description p');

    textElements.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.animation = 'text-animate 0.5s ease forwards';
        });

        element.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
});
