console.log("hii!!");
console.log("hii!!");
console.log("hii!!");
console.log("hii!!");
console.log("hii!!");
console.log("hii!!");
console.log("hii!!");
console.log("hii!!");
console.log("hii!!");
console.log("hii!!");
console.log("hii!!");
console.log("hii!!");
console.log("hii!!");
console.log("hii!!");


/* Issues in repeating code 
- too much work for developer
- chances of error
- unable to count the number of repetition
- too much work to update "Hi" to "Hii"
*/

/* To solve these issues, we can use Loops */

//while loop
let count = 10;
while(count > 0){
    console.log("hii");
    count--;
}

// let i = 5;
// while(i!=0){
//     console.log("param");
//     i--;
// }


// print the value from 1-10
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }


//print all even numbers up to 25
let n = 0;
while(n <=  25){
    if(n % 2 == 0)
    console.log(n);
n++;
}

//print countdown from 10 to 1
let countdown = 10;
while(countdown >=1){
    console.log(countdown);
    countdown-=1;
}


