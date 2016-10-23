var timeofba = [0.0,0.0,0.0,0.0];
var size = [50,60,150,250];

function doBasicAttack(size,index)
{
	var myimg = new Image();
	myimg.addEventListener("error",function(){
		var end = performance.now();
		timeofba[index] += (end - start);
	});
	
	var start = performance.now();
	myimg.src = "https://zhjq8688.github.io/TestFile/"+size+"k.html";
}

function basicAttack()
{
	var i;
	for (i = 0; i < 4*times; i++)
	{
		doBasicAttack(size[i%4],i%4);
	}
	setTimeout(function(){	
		var i;
		for (i = 0; i < 4; i++)
		{
			console.log("Average time of loading " + size[i] + "KB document:" + (timeofba[i]/times) + "ms");
		}
	},1000);
}
