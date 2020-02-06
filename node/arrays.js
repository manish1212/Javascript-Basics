// Arrays in js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// arrays can be delared explicitly
const array = [8, 9, 3, 4, 'asd'];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';
console.log(array[10])
array[10] = "hello";
console.log(array[10])

// for practice

// use forEach
array.forEach((item)=> {
    console.log(item);
})



// use map

const myArray = [1,2,3,4];
const anotherArray2 = myArray.map((item) => item +1);
console.log(anotherArray2);






// use push
anotherArray2.push(6);
console.log("Push ", anotherArray2);
// use pop
anotherArray2.pop();
console.log("Pop ", anotherArray2);




// use filter (takes a callback of function) 
const myFilterArray = anotherArray2.filter((item=> item> 3));
console.log("filter ", myFilterArray);