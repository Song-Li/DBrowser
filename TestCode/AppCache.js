var timeofac = [0.0, 0.0, 0.0, 0.0];
var times = 10;
var pre = 0;

function getAppCache()
{
	var i = 0;
	for (i = 0; i < 4 ; i++)
	{
		console.log("Average time of loading " + size[i] + "KB document : " + (timeofac[i]/times) + "ms");
	}
	
	//console.log("Average time of loading " + size[3] + "KB document : " + (timeofac/times) + "ms");
}

function doAppCache(index)
{
	//console.log(index,"doAppCache");
	var myimg = new Image();
	myimg.addEventListener("error",function(){
		var end = performance.now();
		console.log("size:" + size[index%4] + " time:" + (end - start) + "ms");
		//if (index > 4*pre-1) timeofac[index%4] += (end - start);
		if (index < 4*(times + pre) - 1) doAppCache(index + 1);
		//else getAppCache();
	});
	var start = performance.now();
	myimg.src = "TestFile/" + size[index%4] + "k.html";
}

function startMeasure()
{
	/*setTimeout(function(){
		},times*exp);*/
	doAppCache(0);
}


function appCache()
{
	var mycache = window.applicationCache;
	mycache.addEventListener("cached",startMeasure());
	//mycache.onnoupdate = startMeasure();
}
