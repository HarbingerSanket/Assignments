// Task 1: Callback Functions
// Create a function named multiplyByTwo that takes a number as input and multiplies it by 2.
// Instead of directly returning the result, this function should invoke a callback function with the
// calculated value as an argument.

function multiplyByTwo(callback, num) {
    let result = num * 2;
    callback(result); //invoke callback function
}

function useAsCallback(result) {
    console.log(result); //print result
}

console.log("----------------------------------------------------");

// Task 2: Asynchronous File Reading
// Use the built-in fs (File System) module to read the contents of a file named "data.txt."
// Create a function named readFileContents that takes a filename and a callback function as
// parameters. Inside the function, read the file contents asynchronously using fs.readFile and pass
// the contents to the callback function.

const fs = require("fs");

function readFileContents(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            callback(data);
        }
    });
}

console.log("----------------------------------------------------");

// Task 3: Promises
// Create a function named sumArray that takes an array of numbers as input and returns a
// Promise. The Promise should resolve with the sum of all the numbers in the array.
// Create a function named squareArray that takes an array of numbers as input and returns a
// Promise. The Promise should resolve with a new array containing the square of each number in
// the input array.

function sumArray(numbers) {
    return new Promise((resolve, reject) => {
        let sum = 0;
        if (numbers.length != 0) {
            for(let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            resolve(sum);
        }
        else {
            reject("Array empty");
        }
    });};



function squareArray(numbers) {
    return new Promise((resolve, reject) => {
        let squareArray = [];
        if (numbers.length != 0) {
            for(let i = 0; i < numbers.length; i++) {
                squareArray.push(numbers[i] * numbers[i]);
            }
            resolve(squareArray);
        }
        else {
            reject("Array is empty");
        }
    });
}

console.log("----------------------------------------------------");
// Task 4: Async/Await
// Refactor the readFileContents function from Task 2 to use async/await. The function should now
// return the file contents instead of using a callback.

async function readFileContentsAsync(filename) {
    try {
        let data = await fs.promises.readFile(filename, 'utf8'); 
        return data;
    }
    catch (err) {
        console.log(err);
    }
}


console.log("----------------------------------------------------");
// Task 5: Displaying Output
// Use multiplyByTwo function from Task 1 to multiply a given number by 2 and display the result
// using console.log.
// Use the readFileContents function from Task 2 to read the contents of "data.txt" and display the
// contents using console.log.
// Use the sumArray function from Task 3 to find the sum of an array of numbers and display the
// result using console.log.
// Use the squareArray function from Task 3 to square an array of numbers and display the resulting
// squared array using console.log.
// Test the refactored readFileContents function from Task 4 and display the file contents using
// console.log.


//task1
multiplyByTwo(useAsCallback, 4);


//task2
readFileContents('data.txt', (data) => {
    console.log(data);
});

//task3.1
sumArray([1, 2, 3, 4, 5])
    .then(sum => {console.log('Sum of array:', sum);})
    .catch(err => {console.error('Error:', err);});

//task3.2
squareArray([1, 2, 3, 4, 5])
    .then(squared => { console.log('Squared array:', squared);})
    .catch(err => {console.error('Error:', err);});

//task4
(async () => {
    let data = await readFileContentsAsync('data.txt');
    console.log(data);
})();


//bonus task
function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}
 
delay(2000).then(() => {
    console.log('Resolved after 2 seconds');
});


