// console.log(stName); // undefined -- hoisting

var stName: any;

// var stName; // Re-Declare

stName = "Java"; // Re-Assingment

console.log(stName); // Java

stName = 100;
stName = true;


// console.log(a); // Hoisting not allowed - Reference error

let a: number = 10;

// let a: number = 20; // Re Declaring not allowed

a = 30; // Re assignment is allowed.

const country: string = 'India';
const universityName: string = 'JNTUH';

// async - await 

// Promise  -  

let stname1: string = 'Chandra\
dsfdsfsf\
ddsfdsfdsfdf\
ddsfdsfdsfdf';
// console.log(stname1);

let stName2: string = "Shekhar\
ssdfsfdsf\
ssfdsfadsfdd\
dsfdsafdsafdfs";
// console.log(stName2);

// Template Literal
let stName3: string = `dsfkdsndskjn
adsfdsfadsfdsf
adsfadsfdasf
dsfadsf
adssfadsfsdf`;
// console.log(stName3);

let sName: string = "Chandra";
let age: number = 35;

// console.log('Student name is :: ', sName, ' and age is :: ', age);
// console.log("Student name is :: ", sName, " and age is :: ", age);
// console.log(`Student name is :: ${sName} and age is :: ${age}`);



