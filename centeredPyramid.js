// User input
const readlineSync = require('readline-sync');

// wait for users input for a fibonacci number
const marker = readlineSync.question('What is your marker:');
const size = +readlineSync.question('What is the size of your pyramid:');

// recursively make a pyramid
const makePyramid = (marker, size, offset = 0) => {
    if (size <= 0) return;// doesn't return a value, it just breaks out of the current function scope
    makePyramid(marker, size - 1, offset + 1);

    // Building the pyramid
    const sideString = marker.repeat(size-1);
    console.log(' '.repeat(offset) + sideString + marker + sideString);
}

makePyramid(marker, size);