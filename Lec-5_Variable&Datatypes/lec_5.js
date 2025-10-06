name = "Mauli Karche";
age = 24;
isFollow = true;
x = null;
y = undefined;
console.log(name);
console.log(age);
console.log(isFollow);
console.log(x);
console.log(y);

{
//Types of Variables:
// let, const, var
//var: variable can be redeclared and updated
//let: variable can not be redeclared but can be updated.
//const: variable cannot be redeclared and can not be updated.
}




//ex
let a = 5;
console.log(a); //output is 5

// //ex
// let b = 7;
// let b = 5;
// console.log(b);// syntax error

//ex block scope of variable let 
{
    let a = 7;
    console.log(a);
}
{
    let a = 5;
    console.log(a);
}

//const variable is th fixed values
const PI = 3.14;
console.log(PI);

//---------------------------------------------------------------------------------


//Primitive Datatypes in JS
//1. Number:
//ex
let pen= 3;
let price = 30;
console.log(pen); 
console.log(price); 

//2. String
//ex
let myName = " Mauli Karche";
let clgName = "JSPM's BSIOTR, Wagholi";
console.log(myName);
console.log(clgName);

//3. Boolean
//ex 
let isLike = true;
console.log(isFollow);


// 4. undefined
//ex
// let x;
// console.log(x); //Reference error


//5 . Null
//ex
let d = null;
console.log(x);

// 6. BigInt
//ex
let e = BigInt("123");
console.log(e);

//Symbol
//ex
let f = Symbol("Hello!");
console.log(f);

//-----------------------------------------------------------------



//Non-primitive Datatypes
// 1. objects
// 2.Array
// 3.function


//---->>>>>>>>>>They are learn in next part ------------->>>>>>>>>>>>>>>>>>>>>>>>>>




