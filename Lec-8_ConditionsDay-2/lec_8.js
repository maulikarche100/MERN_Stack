
const name1 = "Ramesh";
const name2 = "Suresh";

const marks1 = 90;
const marks2 = 80;


// // Method-1

// if(marks1 > marks2){
//     console.log(name1,"has highest marks =", marks1);
// }
// else{
//     console.log(name2,"has highest Marks =", marks2);
// }

//Method-2 
/*
let winnerName;
let winnerMarks;
if(marks1 > marks2){
    winnerName = name1;
    winnerMarks = marks1;
}
else{
    winnerName = name2;
    winnerMarks =marks2;
}
console.log(winnerName,"has highest marks=", winnerMarks);

*/

//Method-3(best method)

let winnerName = name1;
let winnerMarks = marks1;
if(marks2 > marks1){
    winnerName = name2;
    winnerMarks = marks2;
}
console.log(winnerName,"has highest marks=", winnerMarks);

// Q1
/* To check the greater number */
let a = 80;
let b = 30;
let c = a;
let d = b;
if(b > a){
    d = b;
}
console.log(c, "is a greater number than ", d);

let e = 90;
let f = 80;
if(e > f){
    d = b;
}
console.log(e, "is a greater number than ", f);



//-----------------Ternary Operator---------------------------//

//Q.1 check the even or odd number
let num = 10;
let check = (num % 2 == 0 ) ? "Even Number" : "Odd Number ";
console.log(check);

//Q.2 check the number is positive or negative
let n = 1;
let positiveOrNegative = n == 0  ? "Neutral" : n > 0 ? " Positive Number":"Negative Number";
console.log(positiveOrNegative);



//------------------Grading system by Switch Cases--------------


const grade = "B";
switch(grade){
    case "A":
        console.log(grade,"Excellent Grade keep it up!!!");
        break;
    case "B":
        console.log(grade,"Good keep it up!!!");
        break;
    case "C":
        console.log(grade,"Fair Need Practice");
        break;
    case "D":
        console.log(grade,"Not Good Need Practice");
        break;
    default:
        console.log("Invalid grade");
}




const marks = 90;
switch(true){
    case marks > 90:
        console.log(marks,"Excellent Grade keep it up!!!");
        break;
    case marks > 80 && marks <= 90:
        console.log(marks,"Good keep it up!!!");
        break;
    case marks > 70 && marks <= 80:
        console.log(marks,"Fair Need Practice");
        break;
    case marks > 60 && marks <= 70:
        console.log(marks,"Not Good Need Practice");
        break;
    default:
        console.log("Invalid grade");
}

