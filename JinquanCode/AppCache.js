var timeofac = [0.0, 0.0, 0.0, 0.0];
var times = 10;

function getAppCache()
{
	var i = 0;
	for (i = 0; i < 4 ; i++)
	{
		console.log("Average time of loading " + size[i] + "KB document : " + (timeofac[i]/times) + "ms");
	}
	
}

function doAppCache(index)
{
	var myimg = new Image();
	myimg.addEventListener("error",function(){
		var end = performance.now();
		if (index - pre >= 0) timeofac[(index-pre)%4] += end - start;
		if (index - pre < 4*times - 1) doAppCache(index + 1);
		else getAppCache();
	});
	var start = performance.now();
	if (index - pre >= 0) myimg.src = "TestFile/" + size[(index-pre)%4] + "k.html";
	else myimg.src = "TestFile/" + size[index%4] + "k.html";
}

function startMeasure()
{
	doAppCache(0);
}


function appCache()
{
	var mycache = window.applicationCache;
	mycache.addEventListener("cached",startMeasure());
	//mycache.onnoupdate = startMeasure();
}
