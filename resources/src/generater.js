var container=document.querySelector('.container');
var card=document.querySelector('.card');
var back=document.querySelector('.back');
container.addEventListener('mousemove',event=>{
    var x=event.offsetX;
    var y=event.offsetY;
    var shiftX=-20+(5/36)*x;
    var shiftY=-20+(4/41)*y;
    container.style='transform : scale(1.2) translatex('+shiftX+'px)'+'translatey('+shiftY+'px)';
});
container.addEventListener('mouseout',()=>{
    container.style='transform : scale(1.0);';
});
container.addEventListener('click',()=>{
    container.style='transform : rotateY('+180+'deg)';
    var i=parseInt(Math.random()*100,10);
    var namae=parseInt(i/10,10);
    back.style='background-image:url(../images/card'+namae+'.png);';
    setTimeout(() => {
        console.log(i)
        location.href="card.html?name="+namae;
    }, 300);
    
});
