const name1 = "Ramesh";
const name2 = "Suresh";

const marks1 = 30;
const marks2 = 50;

/*if(marks1 > marks2){
    console.log(name1,"has highest marks =", marks1);
}
else{
    console.log(name2,"has highest Marks =", marks2);
}*/

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



