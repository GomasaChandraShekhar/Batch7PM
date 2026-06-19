"use strict";
// console.log(stName); // undefined -- hoisting
var stName;
var stName; // Re-Declare

stName = "Java"; // Re-Assingment

console.log(stName); // Java

stName = 100;
stName = true;

// console.log(a); // Hoisting not allowed - Reference error
let a = 10;
// let a: number = 20; // Re Declaring not allowed
a = 30; // Re assignment is allowed.
console.log(typeof (a));
a = true;
console.log(typeof (a));

const country = 'India';
const universityName = 'JNTUH';

let stname1 = 'Chandra\
dsfdsfsf\
ddsfdsfdsfdf\
ddsfdsfdsfdf';
// console.log(stname1);
let stName2 = "Shekhar\
ssdfsfdsf\
ssfdsfadsfdd\
dsfdsafdsafdfs";
// console.log(stName2);
// Template Literal
let stName3 = `dsfkdsndskjn
adsfdsfadsfdsf
adsfadsfdasf
dsfadsf
adssfadsfsdf`;
// console.log(stName3);
let sName = "Chandra";
let age = 35;
// console.log('Student name is :: ', sName, ' and age is :: ', age);
// console.log("Student name is :: ", sName, " and age is :: ", age);
// console.log(`Student name is :: ${sName} and age is :: ${age}`);
