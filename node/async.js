// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

const sleepyHello = () => new Promise(resolve => setTimeout(() => {
  console.log('Hello');
  resolve();
}, 1200));


//1st way 
const test = async () => { //this is now a promsise
  // await sleepyHello(); // it will wait for that function to get execute
  // console.log('Now this');

  // alternative to .then and .catch (because we cannot use .then/.catch in async function)
  try{
    await sleepyHello(); // it will wait for that function to get execute
  }catch(e){
    console.log('Now this');
  }
};

test()
.then(()=>console.log("coz due to async test becomes a promise"));


//2nd way
// sleepyHello()
// .then(()=>console.log("Now this"))

// goal to print hello first and then "Now this"
//async is a short way to do a promise