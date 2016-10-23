function measureCommon()
{
	var time = 0;
	var i = 0;
	for (time = 10000; time < 200000; time = time*2)
	{
		var max = 0.0;
		var min = 1000.0;
		var start;
		var end;
		for (times = 0; times < 100; times++)
		{
			start = performance.now();
			for (i = 0; i < time*10000; i++);
			end = performance.now();
			if (max < (end - start)/time) max = (end - start)/time;
			if (min > (end - start)/time) min = (end - start)/time;
		}
		console.log("max:" + max + " min:" + min);
	}
}
