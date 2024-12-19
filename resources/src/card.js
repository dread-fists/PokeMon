const Val=window.location.search;
const urlParams=new URLSearchParams(Val);
const cardsel=urlParams.get('name');
var container=document.querySelector('.container');
var card=document.querySelector('.card');
var overlay=document.querySelector('.overlay');
card.style='background-image:url(../images/card'+cardsel+'.png);';
container.addEventListener('mousemove',event=>{
    var x=event.offsetX;
    var y=event.offsetY;
    var rotateY=-20+(4/29)*x;
    var rotateX=20-(4/41)*y;
    overlay.style='background-position:'+(x/5+y/5)+'%';
    container.style='transform : scale(1.2) rotateY('+rotateY+'deg) rotateX('+rotateX+'deg)'
})
container.addEventListener('mouseout',()=>{
    container.style='transform : scale(1.0) '
})