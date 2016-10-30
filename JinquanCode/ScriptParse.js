var timesofsp = 5;
var timeofsp = [];
var size = 30;
var pre = 4;

function getScriptParse()
{
	var i;
	for (i = 0; i < size; i++)
	{
		var para = document.createElement("P");
		var t = document.createTextNode("[" + i + "," + timeofsp[i] + "]");
		para.appendChild(t);
		document.body.appendChild(para); 
	}
}

function doScriptParse(index)
{	
	var s = document.createElement('script');
	window.onerror = function(){
		//window.start = performance.now();
		var end = performance.now();
		if (index - pre >= 0)
			timeofsp[(index-pre)%size] += (end-window.start);
		if (index - pre < size * timesofsp - 1) 
		{
			doScriptParse(index + 1);
		}
		else getScriptParse();
	};
	s.onload = function(){
		/*var end = performance.now();
		if (index < 4*timesofsp - 1) doScriptParse(index + 1);*/
		window.start = performance.now();
	};
	document.body.appendChild(s);
	if (index - pre >=0)
		s.src = "https://zhjq8688.github.io/TestFile/" + (((index-pre)%size+21)) + "M.html";
	else	
		s.src = "https://zhjq8688.github.io/TestFile/" + ((index%size+1)) + "M.html";
}
function scriptParse()
{
	//Initialize 
	for (i = 0; i <  size; i++) timeofsp[i] = 0.0;
	doScriptParse(0);
}
