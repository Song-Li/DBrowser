var res_array = [];
var count = {};
var payload = 1e2; 
var cur = 0;

function run() {
  var element_s = document.createElement('script');
  document.body.appendChild(element_s);
  start = performance.now();
  element_s.src = "./1e2.js";

  window.onerror = function(e) {
    cur ++;
    var end = performance.now();
    console.log(end - start);
    if(addToRes(end - start)) run();
  }

}


function addToRes(during) {
  //console.log(res);
  res_array.push(during); 
  if(count[during] === undefined) {
    console.log(res_array); 
    count[during] = 0;
  }
  count[during] += 1;
  if(cur >= payload) {
    //drawBasic(res_array);
    //console.log(res_array);
    document.getElementById("info").innerHTML = "We have " + Object.keys(count).length + " different times<br>";
    for(key in count) {
      document.getElementById("info").innerHTML += key + ': ' + count[key] + '<br>';
    }
    
    document.getElementById("info").innerHTML += 'The times are here<br>' + res_array.join('<br>');
    return false;
  }
  return true;
}

function doJob() {
  run();
}
