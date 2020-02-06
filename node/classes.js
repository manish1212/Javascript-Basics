// declaring classes in js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Something {
  constructor(name) {
    this.name = name;
    this.myName = 7;
  }

  hello() {
    console.log(this.name)
  }
}

const s = new Something('tim');
s.hello();

// for practice

// Create a subclass
class SubClass extends Something {
  constructor() {
    super('asd');
  }

  static myFunction() {
    console.log('I am static');
  }
}

const subclass = new SubClass();
subclass.hello();

// add a property after the object has been instantiated
subclass.a = 'hello world';
console.log(subclass.a);

// add a static function
SubClass.myFunction();

SubClass.prototype.test = 4;
const newTest = new SubClass();
console.log(newTest.test);