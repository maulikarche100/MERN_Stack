
//program to find the factorial of N
let N = 5;
let factorial = 1;
for(let i = 1; i<=N; i++){
    factorial *= i
}
console.log(factorial);

//check N is prime or not

N = 10;
let devisorCount = 0;
for(let i=1; i<=N; i++){
    if(N % i == 0)
    devisorCount++;
}
const message = (devisorCount > 2) ? "Non-Prime Number" : "Prime Number";
console.log(N ,"is a",  message)

// find the hcf 
let a =  200;
let b = 100;
let hcf = 1;
for(let i = 1; i<=a && i<=b; i++){
    if(a % i === 0 && b % i === 0){
        hcf = i;
    }
}
console.log(hcf , "is a HCF of two Number");