/*var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
//canvas.width = document.width - 4 - 59;
canvas.width = document.width - (15 + 37);
canvas.height = document.height - 80;
*/
function randomRange(from,to)
{
    return Math.floor(Math.random()*(to-from+1)+from);
}

var centerX = window.innerWidth/2;
var centerY = window.innerHeight/2;
var canvas = document.getElementById("ingamesvg");
var cw = window.innerWidth - (15 + 37);
var ch = window.innerHeight - 80;
$("#ingamesvg").attr("width", cw);
$("#ingamesvg").attr("height", ch);

var circle = document.getElementById("l1circle");
var cx = circle.getAttribute("cx");
var cy = circle.getAttribute("cy");


var a = 0;
var b = 0;
var x = -centerX;
var y = -centerY;
var score = [0,0,0];
var selected = "a";
var circleX = centerX;
var circleY = centerY;
var holeRadius = Math.floor(Math.random()*149);
var holeX = randomRange(holeRadius*3,cw);
var holeY = randomRange(holeRadius*3,ch);
var circleRadius = 70;
var scoreElem = [];
paintHole(holeX,holeY,holeRadius);
//a-b-x-y
document.getElementById('backgroundMusic').muted = false;

$("#a").click(function ()
{
	select("a");
});

$("#b").click(function ()
{
	select("b");
});

$("#r").click(function ()
{
	select("r");
});


  $(function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: -9999,
      max: 999,
	  animate: "slow",
      value: a,
    });
  });
  
  $("#slider-vertical").css({'height': document.height - 80});

console.log("Hole Radius: "+holeRadius);
console.log("Hole X: "+holeX);
console.log("Hole Y: "+holeY);
console.log("Canvas Width: "+canvas.width);
console.log("Canvas Heigth: "+canvas.height);
changeLevel(1);
setInterval(update,10);

function update()
{
cx = circle.getAttribute("cx");
cy = circle.getAttribute("cy");
//canvas.width = document.width - (15 + 37);
//canvas.height = document.height - document.getElementById('equation').offsetHeight-47;
//console.log("executing painting functions...");

if(selected === "a")
{
a = $( "#slider-vertical" ).slider( "value" );
}
else if(selected === "b")
{
b = $("#slider-vertical").slider("value");
}
else if(selected === "r")
{
circleRadius = $("#slider-vertical").slider("value");
}

//clear();
paintHole(holeX,holeY,holeRadius);
paintCircle(-a,-b, circleRadius);
checkOverlap()
//ellipse(0-a,0-b,5,10);
//drawScore(score);
}

/*var supportsOrientationChange = "onorientationchange" in window,
       orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
window.addEventListener(orientationEvent, function(){
//alert("Screen orientation in degrees: "+ window.orientation + " Screen width: " + screen.width);
});*/