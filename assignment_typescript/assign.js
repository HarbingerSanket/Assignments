"use strict";
// 1. Create a TypeScript function that takes either a string or a number as a parameter. Use a union type to define the parameter.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathOps = void 0;
function myFunction(data) {
    console.log(data);
}
myFunction("Hello world");
myFunction(124);
console.log("---------------------------------------------------");
console.log("---------------------------------------------------");
var person = {
    name: "Sanket",
    address: {
        city: "Pune",
        state: "Maharashtra",
        pincode: 123456
    }
};
console.log(person);
console.log("---------------------------------------------------");
// 4. Define an enum for days of the week. Create a function that takes a day as a parameter and logs a message based on the day.
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
function day(day) {
    switch (day) {
        case Days.Monday:
            console.log("It's Monday, start of the week!");
            break;
        case Days.Friday:
            console.log("It's Friday, almost weekend!");
            break;
        // Add cases for other days as needed
        default:
            console.log("It's a regular day.");
    }
}
console.log("---------------------------------------------------");
// 5. Use type assertions to convert a variable from one type to another. Explain why you chose type assertions over other options.
var data = "hello world";
var data1 = data;
console.log(data1);
console.log("---------------------------------------------------");
// 6. Create a generic function that takes an array and returns the first element. Use the function with arrays of different types.
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(["Sanket", "Tidke"]));
console.log("---------------------------------------------------");
var person1 = { name: "sanket" }; // age is optional
console.log("---------------------------------------------------");
var result = "Array"; // Valid
var result2 = "Not Array"; // Valid
console.log("---------------------------------------------------");
var config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
};
// config.apiUrl = "newUrl"; // Error: Cannot assign to 'apiUrl' because it is a read-only property
var partialConfig = { timeout: 3000 };
console.log("---------------------------------------------------");
// 10. Write a function that infers the return type based on the input type. For example, if the input is a string, the function returns a number; if it's an array, it returns a boolean.
function processInput(input) {
    if (typeof input === "string") {
        return input.length; // inferred as number
    }
    else {
        return input > 10; // inferred as boolean
    }
}
console.log(processInput("Hello")); // 5
console.log(processInput(15)); // true
console.log("---------------------------------------------------");
// 11. Create a namespace that encapsulates a set of functions related to mathematical operations. Demonstrate how to use the namespace in another file.
var MathOps;
(function (MathOps) {
    function add(a, b) {
        return a + b;
    }
    MathOps.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathOps.subtract = subtract;
})(MathOps || (exports.MathOps = MathOps = {}));
var result1 = MathOps.add(10, 5);
console.log("---------------------------------------------------");
var combined = function (x) {
    if (typeof x === "number") {
        console.log("Number:", x);
    }
    else if (typeof x === "string") {
        console.log("String:", x);
    }
};
combined(45);
combined("Hello");
console.log("---------------------------------------------------");
var vehicle1 = {
    make: "Toyota",
    model: "Corolla",
    drive: function () { return console.log("Driving a car"); },
};
console.log("---------------------------------------------------");
var key = "name";
console.log("---------------------------------------------------");
// 15. Write a function that checks if a variable is of a certain type using a type guard. Use this function to conditionally handle different types.
function isString(value) {
    return typeof value === "string";
}
var result3 = isString("Hello"); // true
var result4 = isString(123); // false
console.log("---------------------------------------------------");
var dict = {
    hello: "world",
    name: "bro",
};
console.log("---------------------------------------------------");
var employees = ["John", 30, "New York"];
console.log("---------------------------------------------------");
// 18. Create a function that takes a parameter and allows it to be either a string or null/undefined. Handle both cases in the function.
function handleInput(input) {
    if (input) {
        console.log("Input:", input);
    }
    else {
        console.log("No input provided.");
    }
}
handleInput("Hello");
handleInput(null);
handleInput(undefined);
console.log("---------------------------------------------------");
// 19. Write a TypeScript function without explicitly specifying the types. Allow TypeScript to infer the types based on the function implementation.
function add(a, b) {
    return a + b;
}
console.log(add(1, 2)); // Inferred as number
console.log(add("a", "b")); // Inferred as string
console.log("---------------------------------------------------");
// 20. Create an object with properties representing a person's information. Use the object spread syntax to create a new object with additional properties.
var personNew = { name: "sanket", age: 23 };
var extendedPerson = __assign(__assign({}, personNew), { address: "pune maharashtra" });
console.log(extendedPerson); // { name: "sanket", age: 23, address: "Pune" }
console.log("---------------------------------------------------");
