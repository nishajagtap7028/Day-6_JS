// Task 1: Variables and Data Types

let userName = "Nisha";
const age = 22;
var isStudent = true;

let skills = ["HTML", "CSS", "JavaScript"];
let profile = { city: "Pune", pin: 411001 };

console.log("Name:", userName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Skills:", skills);
console.log("Profile:", profile);

// Task 2: Simple Arithmetic Calculator

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

alert("Addition: " + (num1 + num2));
alert("Subtraction: " + (num1 - num2));
alert("Multiplication: " + (num1 * num2));
alert("Division: " + (num2 !== 0 ? num1 / num2 : "Cannot divide by zero"));

// Task 3: Conditional Statements (Grade Checker)

let marks = parseInt(prompt("Enter your marks:"));
let grade;

if (marks >= 90) grade = "A";
else if (marks >= 80) grade = "B";
else if (marks >= 70) grade = "C";
else if (marks >= 60) grade = "D";
else grade = "F";

console.log("Grade:", grade);

// Task 4: Loops

console.log("Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

console.log("Even numbers from 2 to 10:");
let i = 2;
while (i <= 10) {
  console.log(i);
  i += 2;
}

// Task 5: Functions

function greetUser(name) {
  console.log("Welcome, " + name + "!");
}

function square(num) {
  return num * num;
}

greetUser("Nisha");
console.log("Square of 6 is:", square(6));
