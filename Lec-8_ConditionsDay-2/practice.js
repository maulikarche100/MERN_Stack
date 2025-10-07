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



//Q.7 check the vowels..
let alphabet = 4;
const vowels =  alphabet === 1 ? "'a' is a vowel":
                alphabet === 2 ? "'e' is a vowel":
                alphabet === 3 ? "'i' is a vowel":
                alphabet === 4 ? "'o' is a vowel":
                alphabet === 5 ? "'u' is a vowel":
                "invalid vowel";
console.log(vowels);


//print greatest among three numbers
let x = 120;
let y = 90;
let z = 40;

const largestNum = x >= y && x >= z ? "x is largest number" : y >= x && y >= z ? "y is largest number" : "z is largest number";
console.log(largestNum);



//print the name and score of highest scoring student
const name = "mauli";
const name1 = "jay";
const name2 = "ketan";
const marks = 94;
const marks1 = 90;
const marks2 = 60;
const highestMarks = marks > marks1 && marks > marks2 ? "Mauli has highest marks" : 
                    marks1 > marks && marks1 > marks2 ? "jay has highest marks":
                    "ketan has highest marks";

                    console.log(highestMarks);

