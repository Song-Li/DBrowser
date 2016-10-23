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
}

function videoParse()
{
	for (i = 0; i < 4; i++)
	{
		switch (i){
			case 0 : doVideoParse(50,i); break;
			case 1 : doVideoParse(60,i); break;
			case 2 : doVideoParse(150,i); break;
			case 3 : doVideoParse(250,i); break;
		}
	}
}
