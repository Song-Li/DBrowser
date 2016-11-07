var size = 256 * 1024;
var buffer = new ArrayBuffer(size);
var buffer2 = new ArrayBuffer(size);
var origindata = new DataView(buffer);
var freshdata = new DataView(buffer2);

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

function check() {
  var bit = 1;
  var pointer = 0;
  var cnt = 1e4;
  var type = 1;
  set();
  var start = performance.now();
  while(cnt --) {
    fresh();
    if(type == 1) set();
    else fresh();
  }
  var end = performance.now();
  if(type == 1) document.write("Diff: ");
  else document.write("Same: ");
  document.write("start " + start + " end " + end + "<br>");
  document.write(end - start);
}
