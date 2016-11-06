var pmCnt = 0;
var stCnt = 0;
var stop = 0;

startPostMessageLoop = function(){
  var receiveMessage = function(message){
    if (stop == 1 || message.data !== 'Test') return;
    pmCnt++;
    postMessage();
  };
  var postMessage = function() {
    window.postMessage('Test', window.location.toString())
  };
  window.addEventListener("message", receiveMessage, false);
  postMessage();
}

startSetTimeoutLoop = function(){
  var step = function(){
    stCnt++;
    if(stop == 0) setTimeout(step, 0);
  }
  step();
}

function print(obj) {
  document.body.innerHTML = obj + "<br>";
}

function append(obj) {
  document.body.innerHTML += obj + "<br>";
}

check = function() {
  stop = 1;
  clearInterval(loop);
  var res = pmCnt / stCnt;
  print("One Major clock has " + res + " minor clocks");
}

startPostMessageLoop();
startSetTimeoutLoop();

setTimeout(check, 10000);


loop = setInterval(function() {
  append('stCnt:'+ stCnt);
  append('pmCnt:'+ pmCnt);
}, 1000);
