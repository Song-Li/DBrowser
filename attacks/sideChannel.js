var size = 256 * 1024;
var buffer = new ArrayBuffer(size);
var buffer2 = new ArrayBuffer(size);
var origindata = new DataView(buffer);
var freshdata = new DataView(buffer2);
var start;
var type = 0;

startPostMessage = function(){
  var receiveMessage = function(message){
    if (message.data !== 'Test') return;
    getEnd();
  };
  var postMessage = function() {
    window.postMessage('Test', window.location.toString())
  };
  window.addEventListener("message", receiveMessage, false);
  postMessage();
}

function set() {
  var pointer = 0;
  do {
    cur = origindata.getUint32(pointer);
    pointer += 4; 
  }while(pointer < size);
}


function fresh() {
  var bit = 1;
  var pointer = 0;
  do {
    cur = freshdata.getUint32(pointer, pointer);
    pointer += 4; 
  }while(pointer < size);
}

function getEnd() {
  var end = performance.now();
  if(type == 1) document.write("Diff: ");
  else document.write("Same: ");
  document.write("Start " + start + " end " + end + "<br>");
  document.write(end - start);
}

function check() {
  var bit = 1;
  var pointer = 0;
  var cnt = 1e5;
  set();
  start = performance.now();
  startPostMessage();
  while(cnt --) {
    fresh();
    if(type == 1) set();
    else fresh();
  }
}
