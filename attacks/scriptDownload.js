var res_array = [];
var count = {};
var payload = 1e2; 
var cur = 0;
var pre_start = 0;
var ran = 0;
var avg = [];

function run(file_name) {
  var element_s = document.createElement('script');
  start = performance.now();
  document.body.appendChild(element_s);
  element_s.src = file_name;
  window.onerror = function(e) {
    cur ++;
    var end = performance.now();
    var res = end - start;
    //console.log(start, end);
    if(addToRes(res)) run(file_name);
  }

}


function addToRes(during) {
  res_array.push([cur, during]); 
  if(count[during] === undefined) {
    count[during] = 0;
  }
  count[during] += 1;
  if(cur >= payload) {
    get_res();
    document.getElementById("info").innerHTML = "We have " + Object.keys(count).length + " different times<br>";
    for(key in count) {
      document.getElementById("info").innerHTML += key + ': ' + count[key] + '<br>';
    }
    
    document.getElementById("info").innerHTML += 'The times are here<br>' + res_array.join('<br>');
    return false;
  }
  return true;
}

function get_res() {
  var mean = 0;
  for(var r in res_array) {
    mean += res_array[r][1];
  }
  mean /= res_array.length;
  //document.getElementById("result").innerHTML += mean.toString() + '<br>';
  return mean;
}

function doJob() {
  for(var i = 1;i < 2;++ i) {
    var average = run(i.toString() + "e5.js");
    res_array = [];
    avg.push([i, average]);
  }
  return avg;
}
