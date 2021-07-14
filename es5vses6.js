//ES5 vs ES6

//check browser compatabilty https://caniuse.com/


//1. Arrow function
// function greetings (name) {
//    return 'hello ' + name
// }

// const greetings = (name) => {
//    return `hello ${name}`;
//   }

// // const greetings = name => `hello ${name}`;

// console.log(greetings('riya'));


//2.Object Manipulation:

// var obj1 = { a: 1, b: 2 }
// var obj2 = { a: 2, c: 3, d: 4}
// var obj3 = Object.assign(obj1, obj2)

// const obj1 = { a: 1, b: 2 }
// const obj2 = { a: 2, c: 3, d: 4}
// const obj3 = {...obj1, ...obj2}

// 3.Block scoping 
// var num = 0; // num is globally scoped
// for (let i = 0; i < 5; i++) { // i is block scoped
//   num += i;
// }
// console.log(num); // 0 + 1 + 2 + 3 + 4 = 10
// console.log(i); // undefined

//4.Template Literal (`) Backquote/Backtick

// const a = 1;
// const b = 'b';
// // ---------- ES5 ----------
// const c = 'value of a is ' + a + ' and value of b is ' + b;
// // ---------- ES6 ----------
// const c = `value of a is ${a} and value of b is ${b}`;



//5. Exporting & Importing Modules

//var myModule = { x: 1, y: function(){ console.log('This is ES5') }}
//module.exports = myModule;

// const myModule = { x: 1, y: () => { console.log('This is ES6') }}
// export default myModule;

//ES5 version
// var myModule = require('./myModule');
// ES6 version
// import myModule from './myModule';

//6. Promises vs Callbacks


// function func1(callback)
// {
//     console.log("function1");
//     callback();
// }
// function func2()
// {
//   console.log("function2");
// }

// func1(func2);
// ---------- ES5 (callback) ----------
// function isEvenNumber(num, callback) {
//    if (num % 2 === 0) {
//      callback(true);
//    } else {
//      callback(false);
//    }
//  }
//  isEvenNumber(10, function(result) {
  
//    if (result) {
//      console.log('even number');
//    } else {
//      console.log('odd number');
//    }
//  });

//  // ---------- ES6 (promise) ----------
//  const isEvenNumber = (num) => {
//    return new Promise((resolve, reject) => {
//      if (num % 2 === 0) {
//        resolve(true);
//      } else {
//        reject(false);
//      }
//    });
//  };
//  isEvenNumber(10).then((result) => {
//    console.log('even number');
//  }).catch((error) => {
//    console.log('odd number');
//  });

//==========


//ES6 includes the following new features:
// arrows
// classes
// enhanced object literals
// template strings
// destructuring
// default + rest + spread
// let + const
// iterators + for..of
// generators
// unicode
// modules
// module loaders
// map + set + weakmap + weakset
// proxies
// symbols
// subclassable built-ins
// promises
// math + number + string + array + object APIs
// binary and octal literals
// reflect api
// tail calls

//reference : https://madasamy.medium.com/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4
