var size = 256 * 1024;
var threshold = 0.04;
var buffer = new ArrayBuffer(size); 
var probeView = new DataView(buffer);
var time = 0;
var stop = 0;
var pmCnt = 0;
startPostMessageLoop = function(){
  var receiveMessage = function(message){
    if (message.data !== 'Test') return;
    pmCnt++;
    postMessage();
  };
  var postMessage = function() {
    window.postMessage('Test', window.location.toString())
  };
  window.addEventListener("message", receiveMessage, false);
  postMessage();
}

function set() {
  var cur;
  do {
    cur = probeView.getUint32(cur);
  }while (cur < size);
}

function check() {
  var cnt = 0;
  var flag = 0;
  time ++;
  pstart = pmCnt;
  while(cnt < size) {
    var start = performance.now();
    cur = probeView.getUint32(cnt);
    var end = performance.now();
    if(end - start > threshold) flag = 1;
    cnt += 4;
  }
  pend = pmCnt;
  if(pstart != pend) flag = 1;
  if(flag == 1) document.write(time + ",");
  set();
  if(time > 1000) clearInterval(loop);
}

function run() {
  //startPostMessageLoop();
  var cur = buffer;
  for (var i = 0;i < size / 4;++ i) 
    probeView.setUint32(i * 4,i * 4 + 4);
  set();
  loop = setInterval(check, 400);
}

