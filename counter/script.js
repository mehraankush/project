let count = 0;

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){

    btn.addEventListener("click",function(e){
        // console.log(e.currentTarget);
     const style = e.currentTarget.classList;
     if(style.contains('decr')){
        count--;
     }
    else if(style.contains('incr')){
        count++;
     }
     else if(style.contains('Re')){
        count=0;
     }
     if(count>0){
        value.style.color ='green';
     }
     else if(count<0){
        value.style.color ='red';
     }
     value.innerHTML=count;
    });
});