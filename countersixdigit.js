var counter = document.querySelectorAll('.next');
var cbutton=document.getElementById('button');
var inputbox = document.getElementById('input');
var current=document.querySelectorAll('.current');
var count=0;
var unitcount=0;
var tenscount=0;
cbutton.addEventListener('click',function(){
     
       var id = setInterval(function() {        

            counter[5].classList.add("animation");
            count++;
            unitcount++
            

            setTimeout(function(){

             counter[5].classList.remove("animation");
             current[5].innerText=counter[5].innerText;
            }, 500);

            
            if(unitcount>9)
            {
                unitcount=0;
                counter[4].classList.add("animation");
                setTimeout(function(){
                    counter[4].classList.remove("animation");
                    current[4].innerText=counter[4].innerText;
                    counter[4].innerText++;
                }, 500);

                if(counter[4].innerText>9)
                {   
                    counter[4].innerText=0;
                    counter[3].classList.add("animation");
                setTimeout(function(){
                    counter[3].classList.remove("animation");
                    current[3].innerText=counter[3].innerText;
                    counter[3].innerText++;
                }, 500);
                }

                if(counter[3].innerText>9)
                {   
                    counter[3].innerText=0;
                    counter[2].classList.add("animation");
                setTimeout(function(){
                    counter[2].classList.remove("animation");
                    current[2].innerText=counter[2].innerText;
                    counter[2].innerText++;
                }, 500);
                }
                
                if(counter[2].innerText>9)
                {   
                    counter[2].innerText=0;
                    counter[1].classList.add("animation");
                setTimeout(function(){
                    counter[1].classList.remove("animation");
                    current[1].innerText=counter[1].innerText;
                    counter[1].innerText++;
                }, 500);
                }

                if(counter[1].innerText>9)
                {   
                    counter[1].innerText=0;
                    counter[0].classList.add("animation");
                setTimeout(function(){
                    counter[0].classList.remove("animation");
                    current[0].innerText=counter[0].innerText;
                    counter[0].innerText++;
                }, 500);
                }
    
            }
            counter[5].innerText=unitcount;
            if(inputbox.value==count)
            {
                clearInterval(id);
                count=0;
                unitcount=0;
                setTimeout(function(){
                    alert('Time is up');
                    location.reload();
                    
                }, 500);
                
            }
           
        }, 1000);
    
});