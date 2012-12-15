$(document).ready(function(){

var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext('2d');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

//clear
function clearStuff(){

}

//draw circle
function paintCircle() {
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
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

clearStuff();
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

clearStuff();
}

paintCircle();
paintHole();

});
