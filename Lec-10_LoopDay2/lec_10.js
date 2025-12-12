//print to find the factorial of N
const N = 5;
let factorial = 1;
for(let i=1; i<=N; i++){
    factorial *= i;
}
console.log(factorial);

//check the prime number
const n = 13;
let primeNumber= 0;
for(let i=1; i<=n; i++){
    if(n%i==0)
    primeNumber++;
}
const message = primeNumber > 2 ? "Non- Prime Number" : "Prime Number";
console.log( n +" is a "+ message);

