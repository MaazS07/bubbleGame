
function bubmaker(){
var clutter="";
var rn=0;




    for(var i=1;i<=150;i++)
    {     rn=  Math.floor(Math.random()*10);
        clutter+=` <div id="bubble">${rn}</div>`;
        }
        document.querySelector("#gamebody").innerHTML=clutter;
    }
    bubmaker();
    var timer=3;
    function timerfnc()
  
    {    setInterval(function()
        {
            if(timer>0)
        {
          timer--;
          document.querySelector("#timmerr").textContent=timer;
        }
        else{
            clearInterval(timer);
            document.querySelector("#gamebody").style.backgroundColor="white";
            document.querySelector("#gamebody").innerHTML=`<h1>GAME OVER</h1> <br><h2>Your Score:${scores}<br></h2>`;
            
            
            
         
           
        }
        }
    ,1000);
       
    }
timerfnc();


function gethit()
{
    rn= Math.floor(Math.random()*10)

document.querySelector("#hitt").textContent=rn;

}
gethit();
var scores=0;
function incscore()
{
 scores+=10;
 document.querySelector("#scoree").textContent=scores;

}
function func()
{  var clickednum;
    document.querySelector("#gamebody").addEventListener("click",function(details)
    {
        clickednum =Number(details.target.textContent);
        if(clickednum===rn)
        {
            incscore();
            bubmaker();
            gethit();

        }

    });
}

func();
