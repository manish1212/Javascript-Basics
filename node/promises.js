const promiseExample = (name) => {
  return new Promise((resolve, reject) => {
    // Do anything you want
    // finishes when resolve() is called      
    setTimeout(() => {
      resolve(name);
     }, 3000);
  });
};

promiseExample('Manish')
  .then(answer => "Hello "+ answer)
  .then((res) => console.log(res))
  .catch((e) => console.log('Something went wrong!'));

console.log('hi');

/**
 

JS are single threaded

js cannot stop running
it needs to keep running





*/
