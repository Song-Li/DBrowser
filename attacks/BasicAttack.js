var timeofba = [0.0,0.0,0.0,0.0];
var timesofba = 10;

function getBasicAttack()
{	
	var i;
	for (i = 0; i < 4; i++)
	{
		console.log("Average time of loading " + (i+1) + "MB document:" + (timeofba[i]/timesofba) + "ms");
	}
}

function doBasicAttack(index)
{
	var myimg = new Image();
	myimg.onerror = function(){
		var end = performance.now();
		if (index - pre >= 0) timeofba[(index-pre)%4] += (end - start);
		if (index - pre < 4 * timesofba - 1) doBasicAttack(index+1);
		else getBasicAttack();
	}; 
	
	var start = performance.now();
	if (index - pre >= 0) 
		myimg.src = "TestFile/"+((index - pre) % 4 + 1)+"M.html";
	else 
		myimg.src = "TestFile/"+(index % 4 + 1)+"M.html";
}

function basicAttack()
{
	doBasicAttack(0);
}
