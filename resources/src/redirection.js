var time=5;
const countDown=document.getElementById('time');
setInterval(updating,1000);
function updating(){
    countDown.innerHTML=time;
    time-=1;
}