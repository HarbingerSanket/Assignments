// 1. Create a TypeScript function that takes either a string or a number as a parameter. Use a union type to define the parameter.

function myFunction(data: string | number) {
  console.log(data);
}

myFunction("Hello world");
myFunction(124);

console.log("---------------------------------------------------");

// 2. Define two interfaces, one with properties for a person's name and another with properties for their contact information. Create a new interface using intersection to combine both.

interface Person {
  name: string;
  age: number;
}

interface Details {
  address: string;
  phno: number;
}

type PersonDetails = Person & Details;

console.log("---------------------------------------------------");

// 3. Create a type alias for a complex data structure, such as a nested object or an array of objects.

type Object1 = {
  name: string;
  address: {
      city: string;
      state: string;
      pincode: number;
  };
}

const person: Object1 = {
  name: "Sanket",
  address: {
      city: "Pune",
      state: "Maharashtra",
      pincode: 123456
  }
}

console.log(person);

console.log("---------------------------------------------------");
// 4. Define an enum for days of the week. Create a function that takes a day as a parameter and logs a message based on the day.

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function day(day: Days) {
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

let data: any = "hello world";
let data1 = data as string;
console.log(data1);

console.log("---------------------------------------------------");

// 6. Create a generic function that takes an array and returns the first element. Use the function with arrays of different types.

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(["Sanket", "Tidke"]));

console.log("---------------------------------------------------");

// 7. Create a mapped type that converts all properties of an interface to be optional. Apply this mapped type to an existing interface.

interface Person1 {
  name: string;
  age: number;
}

type PartialPerson1 = {
  [K in keyof Person1]?: Person1[K];
};

const person1: PartialPerson1 = { name: "sanket" }; // age is optional

console.log("---------------------------------------------------");

// 8. Define a conditional type that checks if a given type is an array. Use it to conditionally assign a type based on whether a variable is an array or not.

type IsArray<T> = T extends any[] ? "Array" : "Not Array";

const result: IsArray<number[]> = "Array";  // Valid
const result2: IsArray<number> = "Not Array";  // Valid

console.log("---------------------------------------------------");

// 9. Create an interface representing a configuration object. Use Readonly to make the properties immutable and Partial to allow for partial updates.

interface Config {
  apiUrl: string;
  timeout: number;
}

const config: Readonly<Config> = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};



// config.apiUrl = "newUrl"; // Error: Cannot assign to 'apiUrl' because it is a read-only property

const partialConfig: Partial<Config> = { timeout: 3000 };

console.log("---------------------------------------------------");

// 10. Write a function that infers the return type based on the input type. For example, if the input is a string, the function returns a number; if it's an array, it returns a boolean.

function processInput(input: string | number) {
  if (typeof input === "string") {
      return input.length; // inferred as number
  } else {
      return input > 10; // inferred as boolean
  }
}

console.log(processInput("Hello")); // 5
console.log(processInput(15)); // true

console.log("---------------------------------------------------");

// 11. Create a namespace that encapsulates a set of functions related to mathematical operations. Demonstrate how to use the namespace in another file.

export namespace MathOps {
  export function add(a: number, b: number): number {
      return a + b;
  }

  export function subtract(a: number, b: number): number {
      return a - b;
  }
}

const result1 = MathOps.add(10, 5);

console.log("---------------------------------------------------");

// 12. Define two function types, one representing a function that takes a number and another that takes a string. Create a new type that represents the intersection of these two function types.

type NumberFunc = (x: number) => void;
type StringFunc = (x: string) => void;

type CombinedFunc = NumberFunc & StringFunc;

const combined: CombinedFunc = (x: any) => {
  if (typeof x === "number") {
      console.log("Number:", x);
  } else if (typeof x === "string") {
      console.log("String:", x);
  }
};

combined(45);
combined("Hello");

console.log("---------------------------------------------------");

// 13. Define two interfaces representing different types of objects. 
// Create a new type that represents the union of these two object types.

interface Car {
  make: string;
  model: string;
  drive: () => void;
}

interface Bike {
  brand: string;
  type: string;
  ride: () => void;
}

type Vehicle = Car | Bike;

const vehicle1: Vehicle = {
  make: "Toyota",
  model: "Corolla",
  drive: () => console.log("Driving a car"),
};

console.log("---------------------------------------------------");


// 14. Define an interface with several properties. Use the keyof keyword to create a type that represents the keys of the interface.

interface Person2 {
  name: string;
  age: number;
}

type PersonKeys = keyof Person2;  // "name" | "age"

const key: PersonKeys = "name";

console.log("---------------------------------------------------");

// 15. Write a function that checks if a variable is of a certain type using a type guard. Use this function to conditionally handle different types.

function isString(value: any): value is string {
  return typeof value === "string";
}

const result3 = isString("Hello");  // true
const result4 = isString(123);     // false

console.log("---------------------------------------------------");

// 16. Create an interface representing a dictionary with a dynamic set of keys and values. Use an index signature to define the type.

interface Dictionary {
  [key: string]: string;
}

const dict: Dictionary = {
  hello: "world",
  name: "bro",
};

console.log("---------------------------------------------------");

// 17. Define a tuple type representing a person's information, including name, age, and address.

type EmployeesInfo = [string, number, string];

const employees: EmployeesInfo = ["John", 30, "New York"];

console.log("---------------------------------------------------");

// 18. Create a function that takes a parameter and allows it to be either a string or null/undefined. Handle both cases in the function.

function handleInput(input: string | null | undefined): void {
  if (input) {
      console.log("Input:", input);
  } else {
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

console.log(add(1, 2));  // Inferred as number
console.log(add("a", "b"));  // Inferred as string

console.log("---------------------------------------------------");

// 20. Create an object with properties representing a person's information. Use the object spread syntax to create a new object with additional properties.

const personNew = { name: "sanket", age: 23 };
const extendedPerson = { ...personNew, address: "pune maharashtra" };

console.log(extendedPerson); // { name: "sanket", age: 23, address: "Pune" }

console.log("---------------------------------------------------");