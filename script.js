
//eventlistner
document.getElementById("calc btn").addEventListener("click", calculate)
document.getElementById("result").addEventListener("click", calculate)


// Input
function calculate () {

    let X1 =document.getElementById("X1").value;
    let X2 =document.getElementById("X2").value;
    let Y1 =document.getElementById("Y1").value;
    let Y2 =document.getElementById("Y2").value;
    let result = document.getElementById("result").value;
    
   
   //output
    let Ydifference = Y2-Y1;
    let Xdifference = X2-X1; 
    //console.log (Ydifference);
  // console.log (Xdifferece);

     result= Ydifference / Xdifference;
    result.innerHTML = "your slope is" + result;

}



