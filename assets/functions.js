function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function select(name)
{
if(name === "a")
{
$( "#slider-vertical" ).slider({
      value: a,
	  min: -999
    });
}
else if(name === "b")
{
$( "#slider-vertical" ).slider({
      value: b,
	  min: -999
    });
}
else if(name === "r")
{
$( "#slider-vertical" ).slider({
      value: circleRadius,
	  min: 1
    });
}

$("#"+selected).attr("class", "");
selected = name;
$("#"+name).attr("class", "selected");
}

function range(num,min,max,offsetMin,offsetMax)
{
	if(typeof variable_here != 'undefined')
	{
		if(num-offsetMax < max && num-offsetMin > min)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	else
	{
		if(num < max && num > min)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
}