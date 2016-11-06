var start = 0;
var mini = 0;

function toEdge(){
  var start = performance.now();
  while(performance.now() == start);
}

function cb(){
  mini ++;
  if(performance.now() - start > 100){
    document.write(mini / 100);
  }
  else{
    setTimeout(cb);
  }
}

function aClockEdge(){
  toEdge();
  start = performance.now();
  setTimeout(cb,0);
}
