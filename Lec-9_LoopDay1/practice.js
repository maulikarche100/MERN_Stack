// ------------loop-----------
// For loop from 1-5
for( let count = 1;count <= 10; count++){
    console.log("mauli");
}
console.log("loop ended");


//You are given a number 12. Print sum of all even numbers from 1 to 12.
let sum = 0;
for (let i = 1; i <= 12; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);

//sum of 1 to 5
let sum1 = 0;
for(let j = 1 ; j <= 5; j++){
    sum1 = sum1 + j;
}
console.log(sum1);

// sum of odd number from 1-12
let sum2 = 0;
for(let i = 1; i<=12;i++){
    if(i % 2 != 0){
        sum2 += i
    }
}
console.log(sum2);

//print 1-10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


