// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// Declaring with the function keyword
function hi() {
  console.log('Say Hello');
}

//by default it is void
//In JS it return undefined instead of void


hi();

// arrow functions
const arrow = (test) => {
  console.log(test);
};

arrow('hi');

// for practice

// make an arrow function with no block body
const myarrow = (name)=> 'hello '  + name;
console.log(myarrow("Manish"))

// make a function that returns a function
const myFunctionFactory = name => () => {
console.log("Just Checking " + name)
};
const myNewFunction = myFunctionFactory('Manish');
myNewFunction();


//************* Callbacks ************
const myCallbackFunc = (callback, name) =>{
  callback(name);
}
myCallbackFunc((callbackName)=>{
  console.log("Hello Callback function " + callbackName);
},"Manish")


