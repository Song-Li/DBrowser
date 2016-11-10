var start = 0;
var end = 0;
var count = 1e5;
var times = 100;
var time = 1;
var sum = 0;
var startR = 0;
var endR = 0;
var sumR = 0;

function doSomething(){
  var i = 0;
  while(i++ < 1e4);
}

function toEdge(){
  var start = performance.now();
  var stop, count;
  for (stop = start, count = 0; stop == start; ++count)
    stop = performance.now();
  return [start,count]
}

function cb(){
  getSeverTime();
  end = performance.now();
  //document.write("time: "+(end - start)+"<br/>");
  sum += end - start;
  if(time++ < times)learn();
  else{
    average = count*times/sum;
    averageR = count*times/sumR;
    document.write("sum: " + sum + "<br/>");
    document.write("sumR: " + sumR + "<br/>");
    document.write("error: " + (1- sum/sumR)*100 + "%<br/>");
  }
}

function learn(){
  i = 0;
  //toEdge();
  setTimeout(cb);
  getSeverTime();
  start = performance.now();
 // document.write("learn <br/>");
  while(i++ < count);
  //document.write("learn <br/>");
}

function getSeverTime(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    try{
      if(startR == 0){
        if(xhttp.response == "")return;
        startR = xhttp.responseText;
        //document.write("startR: "+startR+"<br/>");
        return;
      }
      else{
        endR = xhttp.responseText;
        if(endR <= startR)return;
        sumR += endR - startR;
        //document.write("endR: "+endR+"<br/>");
        //document.write("timeR: "+(endR - startR)+"<br/>");
        startR = 0;
        endR = 0;
        return;
      }
    }
    catch(e){
      document.write("ready error<br/>");
    }
  };
 try{
    //xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    //xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
   // xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    //document.write("before open <br/>");
   // xhttp.setRequestHeader("Content-Type", "text/xml");
    xhttp.open("GET", "http://127.0.0.1:5000", false);
   // xhttp.setRequestHeader("Content-Type", "text/xml");
    // xhttp.setRequestHeader('Content-Type', 'text')
    //xhttp.setRequestHeader('Access-Control-Allow-Origin', '*')
    //xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
    //xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    xhttp.send();
    //xhttp.abort();
    //document.write("after open <br/>");
  }
  catch(e){
  }
  //document.write("end get<br/>");
}

function clockEdgeAttack(){
  //getSeverTime();
  learn()
}
