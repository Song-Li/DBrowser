function run() {
  var element_s = document.createElement('script');
  document.body.appendChild(element_s);
  var start = performance.now();
  element_s.src = "./1e2.js";
  document.getElementById("start").innerHTML = "start at " + start;
  window.onerror = function() {
    var end = performance.now();
    document.getElementById("end").innerHTML = "end " + end;
    document.getElementById("info").innerHTML = "time to downlode " + (end - start);
  }
  element_s.onload = function() {
    console.log("onload");
  }
}
