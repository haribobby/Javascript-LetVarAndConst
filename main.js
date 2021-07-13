// function sayHello()
// {

//     // alert('hello...');
//     // console.log('Hello Java Script');
//     a =100;
// }

//  sayHello();

//  console.log(a);

// function f1() {
//   var n = 999;
//   function f2() {
//     alert(n); // 999
//   }
//   f2();
// }
// f1();

//1. Declaration and Initialization
// user=5;//?
// var user=10;//?
// let user2=20;//?
// const user3=30;//?
// console.log(user3);

// for (var index = 0; index < 5; index++) {

//     console.log(index);
// }

// console.log("outside.... "+index);

//2. Scope (Local, Global , Block)
// var test=20;
// let sample="check";
// const sample2="check2";
// function variableTest(){
//     let sample="checking";
//     var test=10;
//     let test2=30;
//     if(test===10){
//         let test4=40;
//         var test5=20;
//         const test6="ok";
//         // console.log(test);
//     }
//     test3=40;
//     console.log(test5,test6);
//     console.log(sample,sample2);
// }
// variableTest();
// console.log(test,test3);

//3. Redeclaration
// var declare="sample";
// //var declare="value changed";
// declare="again changed";
// let declare=5;
//const declare=10;
// console.log(declare);

// 4. Reinitialization for primitive data types
// var add=10;
// add=20;
// add=30;
// let minus=20;
// minus=40;
// const pi=3.14;
// pi=10;
// console.log(pi);

//5. Spread Operator
// [...a, ...b] // bad :-(
// a.concat(b) // good :-)

// [x, y].concat(a) // bad :-(
// [x, y, ...a]    // good :-)

// let arr1 = [1,2,3];
// let arr2 = [4,5];

// let arr = arr1.concat(arr2);

// console.log(arr); // [ 1, 2, 3, 4, 5 ]
//
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let arr = [...arr1,...arr2];

// console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

// 6. Reinitialization for reference data types


// const a  = 3; //primitive
// a = a+3;


// var arr1 = [6,7];
// const arr = [1,2,3,4,5]; //array object
// //we can't re-assign
// // arr = arr1;

// arr.push(6);

// arr.forEach(val => console.log(val));
//console.log(arr);




//var arr=[1,2,3,4,5,6];
//const students=[1,2,3,4,5];
//students.push(6);

//students = arr;

//console.log(students);

// const teachers=[...students];
// teachers.push(7);
//console.log(teachers);

// var obj = new Object();
// var obj  = [{},{},{}];

// objects 
var employee = {
   id : 1,
   name: "emp1",
   desg: "ASE"
}


var employeearr =[ {id : 1,name: "emp1",desg: "ASE1" },{id : 1,name: "emp1",desg: "ASE2" },{id : 1,name: "emp1",desg: "ASE3" }];

console.log(employeearr[2].desg);


// const user={name:"optum"};
// user.age=25;
// const admin=JSON.parse(JSON.stringify(user));
// admin.age=30;
// console.log(admin);
// console.log(user);

// var student = "Hari";
// let mobile="Iphone 12 Max Pro";
