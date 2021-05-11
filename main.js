let load = document.getElementById("load");
      let img = document.querySelector("#container")
      let a = 0;
     let clear =  setInterval(animi,80);
      function animi(){
          a = a+1;
         load.innerHTML = a + "%"; 
         if(a >= 100){
             clearInterval(clear);
         }else if(a == 70){
             load.style.opacity = 0.3;
             img.style.opacity = 0.6;


         }else if(a == 30){
             load.style.opacity = 0.5;
             img.style.opacity = 0.2;

         }else if(a == 50){
             load.style.opacity = 0.4;
             img.style.opacity = 0.4;


         }else if (a == 80){
             img.style.opacity = 0.7;

         }else if(a == 97){
             load.style.opacity = 0;
             img.style.opacity = 0.9;



         }
      }