var container=document.querySelector('.container')
var shadow=document.querySelector('.shadow')
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
    container.style='transform : rotateY('+180+'deg)'
    setTimeout(() => {
        var i=parseInt(Math.random()*100,10);
        var namae=parseInt(i/10,10);
        console.log(i)
        location.href="card.html?name="+namae;
    }, 300);
    
});