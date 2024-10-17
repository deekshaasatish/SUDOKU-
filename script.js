// script.js

// The correct solution for the 9x9 Sudoku puzzle
const solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

// Function to check the user's solution
function checkSolution() {
    const rows = document.querySelectorAll('#sudoku-grid tr');
    let isCorrect = true;

    rows.forEach((row, rowIndex) => {
        const cells = row.querySelectorAll('td input');
        cells.forEach((input, colIndex) => {
            const value = parseInt(input.value);
            if (value !== solution[rowIndex][colIndex]) {
                input.style.backgroundColor = 'red';  // Highlight incorrect cells
                isCorrect = false;
            } else {
                input.style.backgroundColor = 'lightgreen';  // Correct cells
            }
        });
    });

    if (isCorrect) {
        alert('Congratulations! You solved the puzzle!');
    } else {
        alert('There are mistakes in your solution. Try again.');
    }
}

// Function to reset the game
function resetGame() {
    const inputs = document.querySelectorAll('#sudoku-grid input');
    inputs.forEach(input => {
        if (!input.disabled) {
            input.value = '';  // Clear user input
            input.style.backgroundColor = '';  // Reset background color
        }
    });
}
