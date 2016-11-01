function run() {
  var element_s = document.createElement('script');
  document.body.appendChild(element_s);
  window.onerror = function() {
    var end = performance.now();
    document.getElementById("end").innerHTML = "end " + end;
    document.getElementById("info").innerHTML = "time to downlode " + (end - start);
  }
  var start = performance.now();
  document.getElementById("start").innerHTML = "start at " + start;
  element_s.src = "./1e4.js";
  element_s.onload = function() {
    console.log("onload");
  }
}
