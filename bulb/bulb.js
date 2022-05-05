const y = document.querySelector('button');
function light (){
    y.innerHTML="off";
    y.style.background='#FF8080'
    y.style.border='#FF8080 solid 1px ';
    document.getElementById('bulb').style.boxShadow="inset 0 0 50px #fff,inset 20px 0 80px #f0f,inset -20px 0 80px #0ff,inset 20px 0 300px #f0f,inset -20px 0 300px #0ff,0 0 50px #fff,-10px 0 80px #f0f,10px 0 80px #0ff";
    y.addEventListener("click",off);
  }
   y.addEventListener("click" , light );
   function off(){
     y.innerHTML ="on";
     y.style.background='#97DBAE';
     y.style.border='#97DBAE 1px solid ';
     document.getElementById('bulb').style.boxShadow="none";
   }