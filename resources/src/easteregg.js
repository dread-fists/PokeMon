var time=92;
const i=parseInt(Math.random()*3,10);
console.log(i);
var theone=document.querySelector('.theone');
theone.style='background-image:url(../images/p'+i+'.png);';
const countDown=document.getElementById('time');
setInterval(updating,11);
function updating(){
    countDown.innerHTML=time;
    time-=1;
}
