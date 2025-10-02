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


//Q.2 check the even or odd number
let num = 11;
let check = (num % 2 == 0)  ? "Even Number" : "Odd Number ";
console.log(check);


//Q.3 check atmospheric conditions (temperature)

let temp = 20;
let condition = (temp > 25 ) ? "Hotiii Atmosphere" : "Cloudy Atmosphere";
console.log(condition);


//Q.4 check the number is positive or negative
let n = 0;
let positiveOrNegative = n == 0  ? "Neutral" : n > 0 ? " Positive Number":"Negative Number";
console.log(positiveOrNegative);


// Q.5 calculate highest marks using Ternary Operator 
const marks3 = 98;
const marks4 = 60;
const name3 = "Mauli";
const name4 = "jay";
const highestScorereName = marks3 > marks4 ? name3 : name4;
const highMarks = marks3 > marks4 ? marks3 : marks4;
console.log(highestScorereName,"has highest marks is:",highMarks);

// Q6 print 1-7 into  weekdays
const dayNumber = 6;
const weekday = dayNumber === 1 ? "Monday" :
                dayNumber === 2 ? "Tuesday" :
                dayNumber === 3 ? "Wednesday" :
                dayNumber === 4 ? "Thursday" :
                dayNumber === 5 ? "Friday" :
                dayNumber === 6 ? "Saturday" :
                dayNumber === 7 ? "Sunday" :
                "Invalid day"; 
console.log(weekday);