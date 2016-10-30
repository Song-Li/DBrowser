/* This is the function we want to measure its time
 * You can change it to any other execution code 
 */
function doSomething()
{
	for (i=0;i<100000;++i);
}

/* Let the time reach the edge of Major clock first
 * 
 */
function init()
{
	var start = performance.now();
	var stop = start;
	for(;start == stop;) stop = performance.now();
	return stop;
}

/* Calculate the number of Minor time of each Major time
 *
 */
function Learning()
{
	var start,stop;
	var count = 0;
	start = init();
	for (stop = start; stop == start; ++count) 
		stop = performance.now();
	return [start,stop,count];
}

/* Let the time reach the edge of Major clock
 * after we measure an execution code 
 * and return the remaining number of the Minor clock
 */
function toEdge()
{
	var start = performance.now();
	var stop, count;
	for (stop = start, count = 0; stop == start; ++count) 
		stop = performance.now();
	return [start,count]
}

function clockEdgeAttack()
{	
	/* times: used to iterate
	 * start: Major time point of execution start 
	 * stop : Major time point of execution stop
	 * exp : the number of Minor time of Major period
	 * grain : the physical time of Major period 
	 *         e.g. the grain of Firefox is 0.05 ms
	 * origin : the physical time of execution 
	 *          when we donot use the clock-edge tech
	 */
	var times,start,stop,exp,remain,grain,origin;
	var sumTime = 0;
	var sumRemain = 0;
	var sumExp = 0;
	var sumGrain = 0;
	var sumOrigin = 0;

	/*
	 * Measure the time of execution code 
	 * if we do not use the Clock Edge Tech
	 */ 
	for (times = 0; times < 100; times++)
	{
		start = performance.now();
		doSomething();
		stop = performance.now();
		sumOrigin += (stop - start);
	}
	origin = (sumOrigin / times);

	/*
	 * Learning the number of Minor time of Major period
	 * and calculate the grain
	 */
	for (times = 0; times < 100; times++)
	{
		[start,stop,exp] = Learning();
		sumExp +=exp;
		sumGrain += (stop - start);
	}
	exp = (sumExp / times).toFixed(0);
	grain = (sumGrain / times);

	/* 
	 * Measure the time of execution code
	 * using the Clock Edge Tech
	 */
	for (times = 0; times < 100; times ++)
	{
		start = init();
		doSomething();
		[stop,remain] = toEdge();
		sumTime += (stop - start);
		sumRemain += remain;
	}
	remain = (sumRemain / times).toFixed(0);
	
	/*
	 * Calculate the accurate time
	 */
	var duration = sumTime + ((exp-remain)/exp) * grain * times;


	/*
	 * print out the result
	 */
	document.write("exp:" + exp + "<br/>");
	document.write("remain:" + remain + "<br/>");
	document.write("grain:" + grain + "<br/>");
	document.write("Original Time of doSomething: " + orign + " milliseconds.<br/>"); 
	document.write("Accurate Time of doSomething: " + ( duration / times ) + " milliseconds.<br/>");
	
}
