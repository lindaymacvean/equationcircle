function restart(add)
{
if(add)
{
	score.unshift(1);
	console.log("Score+1");
}
holeRadius = Math.floor(Math.random()*149);
holeX = randomRange(holeRadius*2,canvas.width-holeRadius);
holeY = randomRange(holeRadius*2,canvas.height-holeRadius);
selected = "a";
$( "#slider-vertical" ).slider({
      value: a
    });
}

var level1 = '(x-<span id="a" class="selected">a</span>)<sup>2</sup>+(y-<span id="b">b</span>)<sup>2</sup> = <span id="r">r</span><sup>2</sup><br>';

var level2 = "";

function changeLevel(level)
{
	if(level === 1)
	{
		document.getElementById('equation').innerHTML = level1;
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
	}
}