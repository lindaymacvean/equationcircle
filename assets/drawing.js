var paintedScores = 3;

/*function ellipse(x,y,w,h)
{
var gX = x;
var gY = y;
//border
ctx.save();
ctx.scale(w+5,h+5);
ctx.beginPath();
ctx.arc(gX, gY, 15, 0, Math.PI*2, false);
ctx.fillStyle = "#003300";
ctx.fill();
ctx.closePath();
ctx.restore();

//inside
ctx.save();
ctx.scale(w+4,h+4);
ctx.beginPath();
ctx.arc(x, y, 15, 0, Math.PI*2, false);
ctx.fillStyle = "#green";
ctx.fill();
ctx.closePath();
ctx.restore();
}

function clear(){
    //console.log("clearing...");
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawScore(score)
{
var f=2;
for(var i=32;i<(paintedScores*32)+32;i+=32+5)
{
ctx.beginPath();
ctx.arc(canvas.width-(32), i+15, 16, 0, 2*Math.PI, true);
if(score[f] === 0)
{
ctx.fillStyle = 'red';
}
else
{
ctx.fillStyle = 'green';
}
ctx.fill();
ctx.lineWidth = 3;
ctx.strokeStyle = 'black';
ctx.stroke();
f--;
}

ctx.fillStyle = 'black';
ctx.font="20px Comic Sans MS";
ctx.fillText("Score:",canvas.width - 65,32-10);
}

function paintCircle() {
var startAngle = 0;
var endAngle = 360;
var clockwise = true;

ctx.beginPath();
ctx.arc(circleX, circleY, circleRadius, 0, 2* Math.PI, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = '#003300';
ctx.stroke();
circleX = -x + -a;
circleY = -y + -b;
if (range(circleX,holeX,holeX,-8,+8) && range(circleY,holeY,holeY,-8,+8) && range(circleRadius,holeRadius,holeRadius,-8,+8))
{
	restart(true);
}
//console.log("circle painted");
}

function paintHole() {
var startAngle = 0;
var endAngle = 360;
var clockwise = true;

ctx.beginPath();
ctx.arc(holeX, holeY, holeRadius, 0, 2*Math.PI, true);
ctx.fillStyle = 'black';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = 'black';
ctx.stroke();
//console.log("hole painted");
}
*/

var circleX,circleY;

function paintCircle(x,y,r)
{
	$("#l1circle")
		.attr("cx", x)
		.attr("cy", y)
		.attr("r", r);
}

function checkOverlap()
{
	if(cx >= holeX-5 && cx <= holeX+5 && cy >= holeY-5 && cy <= holeY+5)
	{
		console.log(":D")
	}
}

function paintHole(x,y,r)
{
	$("#l1hole")
		.attr("cx", x)
		.attr("cy", y)
		.attr("r", r);
}