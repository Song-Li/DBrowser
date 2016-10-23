function doSomething()
{
	for (i=0;i<1000000;i++);
}


function init()
{
	var start = performance.now();
	var stop = start;
	for(;start == stop;) stop = performance.now();
	return stop;
}


function Learning()
{
	var start,stop;
	var count = 0;
	var tmp;
	start = init();
	for (stop = start; stop == start; count++) 
		stop = performance.now();
	return [start,stop,count];
}

function toEdge()
{
	var start = performance.now();
	var stop, count;
	for (stop = start, count = 0; stop == start; count++) 
		stop = performance.now();
	return [start,count]
}

function clockEdgeAttack()
{	
	var times,start,stop,exp,remain,time,grain;
	var sumTime = 0;
	var sumRemain = 0;
	var sumExp = 0;
	var sumGrain = 0;

	start = performance.now();
	doSomething();
	stop = performance.now();
	document.write("Original Time of doSomething: " + ( stop - start ) + " milliseconds.<br/>");
 
	for (times = 0; times < 1000; times ++)
	{
		[start,stop,exp]= Learning();
		sumExp +=exp;
		sumGrain += (stop - start);
	}
	exp = (sumExp / times).toFixed(0);
	grain = (sumGrain / times);
	for (times = 0; times < 1000; times ++)
	{
		start = init();
		doSomething();
		[stop,remain] = toEdge();
		sumTime += (stop - start);
		sumRemain += remain;
	}
	remain = (sumRemain / times).toFixed(0);

	document.write("exp:" + exp + "<br/>");
	document.write("remain:" + remain + "<br/>");
	var duration = sumTime + ((exp-remain)/exp) * grain * times;
	document.write("Accurate Time of doSomething: " + ( duration / times ) + " milliseconds.<br/>");
	
}
