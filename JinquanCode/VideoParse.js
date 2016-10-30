var start = [];
var end = [];
function doVideoParse(size,index)
{
	var myvideo = document.createElement("video");
	myvideo.addEventListener("suspend",function(){
		start[index] = performance.now();
	});
	myvideo.addEventListener("error",function(){
		end[index] = performance.now();
		console.log("time measurement of parsing " + size + "KB document :" + (end[index] - start[index]) + " ms[ index = " + index + "]");
	});
	myvideo.src = "https://zhjq8688.github.io/TestFile/" + size + "k.html";
	//myvideo.load();
}

function videoParse()
{
	var i;
	var times = 1;
	for (i = 0; i < 4; i++)
	{
		doVideoParse(size[i],i);		
	}
}
