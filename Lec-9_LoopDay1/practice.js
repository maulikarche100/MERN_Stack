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

//ex) sum of odd number from 1-12
let sum2 = 0;
for(let i = 1; i<=12;i++){
    if(i % 2 != 0){
        sum2 += i
    }
}
console.log(sum2);

//print 1-10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//ex)
let n = 10;
let sum9 = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum9 += i;
        }
    }
    console.log(sum9);


    //-------------------------while loop-----------------------------
//ex)
    let p = 1;
    while(p<=5 ){
        console.log("p=",p);
        p++;
    }

//ex)
    let i = 1;
    let count = 1;
    while(i<=5 ){
        if(i % 2 == 0){
            count = count+i; 
        }
        i++;
    }
    console.log(count);

//--------------->>>>>>>>>>>>>> do-While ---------->>>>>>>>>
//ex)
let b = 1; 
do{
    console.log("mauli");
    b++;
}while(b<=20);

let q = 1;








