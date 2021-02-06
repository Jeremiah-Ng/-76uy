var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var width=screen.width
new_width=width-70;
new_height=screen.height-300;
if(width<992){
    canvas.width=new_width;
    canvas.height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",touch_start);
var lastx;
var lasty;
function touch_start(e){
lastx=e.touches[0].clientX-canvas.offsetLeft;
lasty=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", touch_move);
function touch_move(e){
    var currentx= e.touches[0].clientX-canvas.offsetLeft;
    var currenty= e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=document.getElementById("color").value;
    ctx.lineWidth=document.getElementById("width").value;
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(currentx, currenty);
    ctx.stroke();
    lastx=currentx
    lasty=currenty
}
function lol(){
    document.getElementById("text1").innerHTML=document.getElementById("color").value;
}
var Mouseevent;

canvas.addEventListener("mousedown",mousedown);
function mousedown(e){
    Mouseevent="mousedown";
}
canvas.addEventListener("mouseup",mouseup);
function mouseup(e){
    Mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",mouseleave);
function mouseleave(e){
    Mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",mousemove);
function mousemove(e){
    var currentx=e.clientX-canvas.offsetLeft;
    var currenty=e.clientY-canvas.offsetTop;
    if(Mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=document.getElementById("color").value;
        ctx.lineWidth=document.getElementById("width").value;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}