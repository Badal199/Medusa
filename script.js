const getResultBtn = document.getElementById('getResultBtn');
const userInput = document.getElementById('userInput');
const resultModal = document.getElementById('resultModal');
const modalResult = document.getElementById('modalResult');
const closeModal = document.getElementById('closeModal');
const clickSound = document.getElementById('clickSound');

let previousInput = '';

// Create code lines for the animation
const createCodeLines = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < 100; i++) {
        const line = document.createElement('div');
        line.classList.add('code-line');
        line.textContent = Array.from({ length: 20 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join(' '); // Random characters
        line.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        line.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration
        line.style.animationDelay = `${Math.random() * 5}s`; // Random delay
        document.body.appendChild(line);
    }
};

// Handle result generation and display
getResultBtn.addEventListener('click', () => {
    const inputNumber = userInput.value.trim();

    if (inputNumber.length === 3) {
        if (inputNumber === previousInput) {
            alert("Please enter another number."); // Alert for the same number
            return;
        }
        previousInput = inputNumber; // Store the new input

        // Simulate generating a result
        const result = Math.random() < 0.5 ? 'BIG' : 'SMALL'; // Random result for demonstration
        modalResult.textContent = `Result: ${result}`;
        
        // Show the result modal
        resultModal.style.display = 'block';

        // Play sound on button click
        clickSound.currentTime = 0; // Reset sound to start
        clickSound.play();
    } else {
        alert("Please enter a 3-digit number."); // Alert for invalid input
    }
});

// Close modal functionality
closeModal.addEventListener('click', () => {
    resultModal.style.display = 'none';
});

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === resultModal) {
        resultModal.style.display = 'none';
    }
};

// Run the createCodeLines function to populate the screen
createCodeLines();
