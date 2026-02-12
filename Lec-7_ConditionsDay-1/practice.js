//------------------------Conditional Statements--------------------
let a = "16";
let b = 16;
if ( a == b){
    console.log("Both a & b are same values");
}else{
    console.log("Both a & b are not same values");
}


let p = 19;
let q = 18;
let r = 19;
if(p == q || q == r || p == r){
    console.log("these are the equal values")

}else{
    console.log("these are not equal value")
}

//ex 2 Marking System Using Else-If conditions:
let marks =90;
if(marks >= 80){
    console.log("First class with distinction");
}else if(marks >= 60 && marks <= 79){
    console.log("first class");
}else if(marks >= 40  && marks <= 69){
    console.log("second class");
}
else{
    console.log("Fail");
}