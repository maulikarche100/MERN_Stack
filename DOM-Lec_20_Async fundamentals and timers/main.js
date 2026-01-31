document.addEventListener("DOMContentLoaded", () =>{
    const status = document.getElementById("status")
    status.textContent = "Processing..."
  
    const start = Date.now();
    
    while(Date.now() - start < 4000){}
  
    document.getElementById("btn").addEventListener("click", function(){
      console.log("button clicked")
    })
    console.log("done")
    status.textContent = "Done";
  
    console.log("this line is executed");
    setTimeout(() =>{
      console.log("code inside timeout is executed");
    }, 2000);
    setInterval(() =>{
      console.log("code from interval");
    }, 6000);
    console.log("next line is executed")
  //heavyFn
    document.getElementById("btn").addEventListener("click", function(){
      console.log("button clicked")
    })
  
    function heavyFn(){
      console.log("heavy function is executed")
      //simulating
      for (let i = 0; i < 1e9; i++ ){
  
      }
  
    }
  
  })