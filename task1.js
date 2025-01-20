//Task 1: Declare and Initialize Variables

// Declare a variable named "name" and initialize it with your full name as a string.
// Declare a variable named "age" and initialize it with your age as a number.
// Declare a variable named "isStudent" and initialize it with a boolean value representing whether you are
// a student or not.

let name="Sanket Deepak Tidke";
let age=22;
let isStudent=true;

console.log(name+age+isStudent);

console.log("----------------------------------------------------")

// Task 2: Basic Arithmetic Operations

// Declare two variables, "num1" and "num2," and initialize them with any numeric values.
// Create a new variable named "sum" and store the sum of "num1" and "num2" in it.
// Create a new variable named "difference" and store the difference between "num1" and "num2" in it.
// Create a new variable named "product" and store the product of "num1" and "num2" in it.
// Create a new variable named "quotient" and store the result of dividing "num1" by "num2" in it.

let num1=10;
let num2=20;

let sum =num1+num2;
console.log(sum);


let difference=num1-num2;
console.log(difference);

let  product = num1*num2;
console.log(product);

let quotient=num1/num2;
console.log(quotient);

console.log("----------------------------------------------------")
// Task 3: Concatenation

// Create three variables: "firstName," "lastName," and "occupation."
// Initialize each variable with appropriate string values representing your first name, last name, and
// occupation.
// Create a new variable named "fullName" and concatenate "firstName" and "lastName" to form your full
// name.
// Create a new variable named "bio" and use string concatenation to compose a sentence describing
// yourself, including your full name and occupation.

let firstName="sanket";
let lastname="Tidke";
let occupation="strudent";

let fullname=firstName+" "+lastname;
console.log(fullname);

let bio="I am "+fullname+" my occupation is "+occupation;
console.log(bio);

console.log("----------------------------------------------------")
// Task 4: Displaying Output

// Use console.log to display the values of all variables created above.
// Format the output for Task 2 to display the results of arithmetic operations in a human-readable format.


console.log("here is the output of the variabkes that are creatd"+ name + age + isStudent+" in task one");

console.log(`The output of the operations performed on ${num1}+${num2} is:`);
console.log("The addition is:"+sum);
console.log("The substraction is:"+difference);
console.log("The multiplication is:"+product);
console.log("The division is:"+quotient);

console.log("----------------------------------------------------")

// Bonus Task (Optional):
// Create a variable named "birthYear" and initialize it with your birth year.
// Calculate your approximate age using the current year and the "birthYear" variable.
// Display the calculated age using console.log.

let birthYear=2001;
let current_year=2025;
console.log(current_year-birthYear);





