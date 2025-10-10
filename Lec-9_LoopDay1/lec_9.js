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
console.log("all even numbers up to 25");
let n = 0;
while(n <=  25){
    if(n % 2 == 0)
    console.log(n);
n++;
}

//print countdown from 10 to 1
console.log("Countdown from 10 to 1:");
let countdown = 10;
while(countdown >=1){
    console.log(countdown);
    countdown-=1;
}




//---------->>>>>>>>>>FOR LOOP------------>>>>>>>>>>>>>>>


console.log("Countdown from 10 to 1 by for loop:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


for(let i = 0; i<10; i++){
    console.log("hii");
}


//print counting from 1 to 10
console.log("Counting from 1 to 10:");
for(let i = 1; i<=10; i++){
    console.log(i);
}

//print multiples of 3 ( 3, 6, 9,....,48)
console.log(" multiples of 3 ( 3, 6, 9,....,48)");
for(let i = 3 ; i <= 50; i+=3){
    console.log(i);
}


//print the squares of each number from 20 to 35
console.log("square of each number from 20 - 35:");
for(let i = 20; i<=35; i++){
    console.log(i**2);
}


//method -2
// let p =35;
// for(i=20; i<=p; i++){
//     console.log(i**2);
// }



/*


n =15;
let start = 20;

for(let i = 20; i <=35; i++)
console.log(i*i);

for(let i = start; i<= start + n; i++){
    console.log(i*i);
    //console.log(i**2);
}

*/


// //TC -> 0(n) ----> [(start + n) - start]



//print table of 5 
// 5*1 = 5
//5*2 = 10
//5*3 = 15.....

num = 5;
for(let i = 1; i<=10; i++){
    console.log(num +" * "+ i ,"=",num*i);
}


//find the sum of first 100 numbers and print it

console.log("Sum of all numbers from 1 - 100")
let sum = 0;
for(i = 1; i<=100; i++){
    sum = sum + i
}
console.log(sum);






