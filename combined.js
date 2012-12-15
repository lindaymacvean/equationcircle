$(document).ready(function(){

var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext('2d');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var circleX = 0;
var circleY = canvas.height / 2;

//clear
function clearStuff(){
    console.log("clearing...");
	ctx.fillStyle = 'white';
	ctx.fillRect(0,0,canvas.width,canvas.height);
}

//draw circle
function paintCircle() {
var radius = 70;
var startAngle = 0;
var endAngle = 360;
var clockwise = true;

clearStuff();
ctx.beginPath();
ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = '#003300';
ctx.stroke();
circleX += 3;
console.log("circle painted");
}

//draw hole
function paintHole() {
var centerX = ((canvas.width) / 2) + 100;
var centerY = (canvas.height) / 2;
var radius = 70;
var startAngle = 0;
var endAngle = 360;
var clockwise = true;

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = '#003300';
ctx.stroke();
console.log("hole painted");
}

function paint()
{
console.log("executing painting functions...");
paintCircle();
paintHole();
}

setInterval(paint,10);

});
