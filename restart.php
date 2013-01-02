<script src="assets/jquery-1.7.1.min.js"></script>
<?php
$score = $_POST["score"];
$add = $_POST["add"];
?>
<form id='redirectForm' action='game.php' method='post'>
	<input type="hidden" id="score" name="score" value="<?php 
	if($add = 1)
	{
	echo $score+1;
	}
	else
	{
	echo $score;
	}
	?>" />
	<input type="submit" style="visibility:hidden;" id="redirect" /><!---->
</form>
<script>
$("#redirect").click();
</script>