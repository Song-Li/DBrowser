var res_array = [];
var payload = 1e2; 
var cur = 0;

function run() {

  var element_s = document.createElement('script');
  document.body.appendChild(element_s);
  start = performance.now();
  element_s.src = "./1e6.js";

  window.onerror = function() {
    cur ++;
    var end = performance.now();
    addToRes(end - start);
    if(cur != payload) run();
  }

}


function addToRes(res) {
  res_array.push([cur, res]); 
  if(cur == payload) {
    //drawBasic(res_array);
    document.getElementById("info").innerHTML = res_array.join('<br>');
  }
}

function doJob() {
  run();
  console.log(res_array);
}
