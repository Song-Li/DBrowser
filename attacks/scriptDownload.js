var res_array = [];
var count = {};
var payload = 15; 
var cur = 0;
var pre_start = 0;
var ran = 0;
var avg = [];
var max_size = 20;
var max_ignore = 6;

function run(cur_size) {
  var file_name = cur_size.toString() + "M.js";
  var element_s = document.createElement('script');
  start = performance.now();
  document.body.appendChild(element_s);
  element_s.src = file_name;
  window.onerror = function(e) {
    var end = performance.now();
    var res = end - start;
    addToRes(cur_size, res); 
    if(cur < payload) run(cur_size);
    else if(cur_size < max_size) doJob(++ cur_size); 
    cur ++;
  }
}


function addToRes(cur_size, during) {
  res_array.push(during); 
  if(count[during] === undefined) {
    count[during] = 0;
  }
  count[during] += 1;
  if(cur >= payload) {
    var mean = get_res(cur_size);
    avg.push([cur_size, mean]);
    //console.log(avg);
    if(cur_size == max_size) drawBasic(avg);
  }
}

function get_res(cur_size) {
  var mean = 0;
  for(var r in res_array) {
    if(r < max_ignore) continue;
    mean += res_array[r];
  }
  mean /= (res_array.length - max_ignore);
  document.getElementById("result").innerHTML += mean.toString() + '<br>';
  return mean;
}

function doJob(i) {
  cur = 0;
  res_array = [];
  run(i);
  return avg;
}
