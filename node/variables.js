// there are 3 basic ways to declare variables in js

// Var, but don't use this one anymore
var test = 3; 
var test = 3; // ok

//you can redeclare a variable using var (avoid doing that) 

// let, is like var, but block scoped, and not allowed to re-declare
let hello = 'world'; // Notice strings use single quotes (More strict) 
hello = 5; // changing the type of variable is okay, in this case string to number.
hello = [];
console.log("just checking",hello);
// let hello = 'world'; can't do this either!

// const is a constant
const iAmAConstant = 9;
// iAmAConstant = 10; can't do this!


/**
 * 'let' lets you change the value but const does not
 */


// objects
// variables can also be objects
const obj = {}; // obj litteral    empty objects


// objects can dynamically add and remove properties
obj.a = 9;
obj.b = 10;

// For Practice

// declare an object with an object as a property

const myObj = {
a : "",
b : {
    c : {

    }
}};

console.log(myObj);
//you cant chaneg the actual reference
myObj.a = '4';
console.log(myObj);


//hashmap
const hash = {};
hash['key']='value';
console.log(hash);


/**

git reset <filename>
before commit

git checkout -- <filename>
take the last version and use it as current version 


*/



