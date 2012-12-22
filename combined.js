


$(document).ready(function(){
var a;
var b;


function setUpTangle() {

            var controls = document.getElementById("controls");

            var tangle = new Tangle(controls, {
                initialize: function () {
                    this.x = 0;
                    this.y = 0;
                    this.a = 0;
                    this.b = 0;
                    this.r = 0;
                },
                update: function () {
                    a = this.a;
                    b = this.b;
                }
            });
        }
        
setUpTangle();

var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext('2d');
var a1 = document.getElementById("a");
var b1 = document.getElementById("b");

canvas.width = window.innerWidth - 1;
canvas.height = window.innerHeight - 150;
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

var circleX = canvas.width / 2;
var circleY = canvas.height / 2;
var radius = 70;

//clear
function clearStuff(){
    //console.log("clearing...");
	ctx.fillStyle = 'white';
	ctx.fillRect(0,0,canvas.width,canvas.height);
}

var supportsOrientationChange = "onorientationchange" in window,
       orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
window.addEventListener(orientationEvent, function(){
var canvas = document.getElementById("canvas1");

circleX = canvas.width / 2;
circleY = canvas.height / 2;

//alert("Screen orientation in degrees: "+ window.orientation + " Screen width: " + screen.width);
});

//draw circle
function paintCircle() {
var startAngle = 0;
var endAngle = 360;
var clockwise = true;

//clearStuff();
ctx.beginPath();
ctx.arc(circleX, circleY, radius, 0, 2* Math.PI, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = '#003300';
ctx.stroke();
circleX = centerX - a;
circleY = centerY + b;
//console.log("circle painted");
}

//draw hole
function paintHole() {
var centerX = ((canvas.width) / 2) + 100;
var centerY = (canvas.height) / 2;
var radius = 70;
var startAngle = 0;
var endAngle = 360;
var clockwise = true;

clearStuff();
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2*Math.PI, true);
ctx.fillStyle = 'black';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = 'black';
ctx.stroke();
//console.log("hole painted");
}

function paint()
{
//console.log("executing painting functions...");
if (canvas.width != window.innerWidth - 1 && canvas.height != window.innerHeight- 150)
{
canvas.width = window.innerWidth - 1;
canvas.height = window.innerHeight- 150;
}
paintHole();
paintCircle();
}

setInterval(paint,10);

});
