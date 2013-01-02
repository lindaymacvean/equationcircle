<html>
<head>
	<?php 
	$score = $_POST["score"];
	?>
    <script src="assets/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="assets/Tangle.js"></script>
    
    <link rel="stylesheet" href="assets/TangleKit/TangleKit.css" type="text/css">
    <script type="text/javascript" src="assets/TangleKit/mootools.js"></script>
    <script type="text/javascript" src="assets/TangleKit/sprintf.js"></script>
    <script type="text/javascript" src="assets/TangleKit/BVTouchable.js"></script>
    <script type="text/javascript" src="assets/TangleKit/TangleKit.js"></script>
</head>
<body>
    <div>
        <canvas id="canvas1" style="border:2px solid black">
		<font size="9" color="red">
		<center>
		This game does not work with your browser. Please Download Chrome or Firefox for the game to work.
		</center>
		</font>
		</canvas>
    </div>
    
    <div align=center id="controls">
        <font size="9">
        (x-a)<sup>2</sup>+(y-b)<sup>2</sup> = r<sup>2</sup><br>
        x= <span id="x" class="TKAdjustableNumber" data-var="x" data-min="-100" data-max="100" ></span>&nbsp
        y= <span id="y" class="TKAdjustableNumber" data-var="y" data-min="-100" data-max="100" ></span>&nbsp
        b= <span id="b" class="TKAdjustableNumber" data-var="b" data-min="-219" data-max="219" ></span>&nbsp
        a= <span id="a" class="TKAdjustableNumber" data-var="a" data-min="-571" data-max="571" ></span>&nbsp
        r= <span id="r" class="TKAdjustableNumber" data-var="r" data-min="1" data-max="150"></span>
        </font>
		<form id='register' height="0" action='restart.php' method='post'>
		<input type="submit" id="restart" value="Restart"/>
		<input type="hidden" id="score" name="score" value="<?php echo $score ?>" />
		<input type="hidden" id="add" name="add" value="0" />
		</form>
    </div>
    
<script>
$(document).ready(function(){
function restart(score)
{
$("#score").value = score + '';
$("#restart").click();
}


var a;
var b;
var aa = document.getElementById("a");
var bb = document.getElementById("b");
var xx = document.getElementById("x");
var yy = document.getElementById("y");
var rr = document.getElementById("r");
var circleOn = true;
var scoreStr = "<?php echo $_POST['score'] ?>";
var score = parseInt(scoreStr);


function setUpTangle() {

            var controls = document.getElementById("controls");

            var tangle = new Tangle(controls, {
                initialize: function () {
                    this.x = 0;
                    this.y = 0;
                    this.a = 0;
                    this.b = 0;
                    this.r = 70;
                },
                update: function () {
                    a = this.a;
                    b = this.b;
					circleRadius = this.r;
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
var holeX = ((canvas.width) / 2) + 500;
var holeY = (canvas.height) / 2;
var circleRadius = 70;
var holeRadius = Math.floor(Math.random()*149);

//clear
function clearStuff(){
    //console.log("clearing...");
	ctx.fillStyle = "rgb(255,255,255)";
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
ctx.arc(circleX, circleY, circleRadius, 0, 2* Math.PI, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = '#003300';
ctx.stroke();
circleX = centerX - a;
circleY = centerY + b;
if (circleX === holeX && circleY === holeY && circleRadius === holeRadius)
{
	score++;
	$("#add").value = 1;
	restart(score);
}
//console.log("circle painted");
}

//draw hole
function paintHole() {
var startAngle = 0;
var endAngle = 360;
var clockwise = true;

clearStuff();
ctx.beginPath();
ctx.arc(holeX, holeY, holeRadius, 0, 2*Math.PI, true);
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
ctx.font = 'italic bold 30px sans-serif';
ctx.fillText('Score: '+score, 0, 30);
}

setInterval(paint,10);
});</script>
</body>
</html>