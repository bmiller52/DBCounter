function setupDone() {
  var p1, p2, p3, p4, p5, p6, p7, p8;
  p1 = document.getElementById("p1").value;
  document.getElementById("p1Name").innerHTML = p1;

  p2 = document.getElementById("p2").value;
  document.getElementById("p2Name").innerHTML = p2;

  p3 = document.getElementById("p3").value;
  document.getElementById("p3Name").innerHTML = p3;

  p4 = document.getElementById("p4").value;
  document.getElementById("p4Name").innerHTML = p4;

  p5 = document.getElementById("p5").value;
  document.getElementById("p5Name").innerHTML = p5;

  p6 = document.getElementById("p6").value;
  document.getElementById("p6Name").innerHTML = p6;

  p7 = document.getElementById("p7").value;
  document.getElementById("p7Name").innerHTML = p7;

  p8 = document.getElementById("p8").value;
  document.getElementById("p8Name").innerHTML = p8;
}

var p1pre = 0;
document.getElementById("total1").innerHTML = p1pre;

function p1Add() {
  var num, result;
  num = parseInt(document.getElementById("p1total").value, 10);

  result = (num + p1pre);
  document.getElementById("total1").innerHTML = result;

  p1pre = result;
  document.getElementById("p1total").value = "";

}

var p2pre = 0;
document.getElementById("total2").innerHTML = p2pre;

function p2Add() {
  var num, result;
  num = parseInt(document.getElementById("p2total").value, 10);

  result = (num + p2pre);
  document.getElementById("total2").innerHTML = result;

  p2pre = result;
  document.getElementById("p2total").value = "";

}

var p3pre = 0;
document.getElementById("total3").innerHTML = p3pre;

function p3Add() {
  var num, result;
  num = parseInt(document.getElementById("p3total").value, 10);

  result = (num + p3pre);
  document.getElementById("total3").innerHTML = result;

  p3pre = result;
  document.getElementById("p3total").value = "";

}

var p4pre = 0;
document.getElementById("total4").innerHTML = p4pre;

function p4Add() {
  var num, result;
  num = parseInt(document.getElementById("p4total").value, 10);

  result = (num + p4pre);
  document.getElementById("total4").innerHTML = result;

  p4pre = result;
  document.getElementById("p4total").value = "";

}

var p5pre = 0;
document.getElementById("total5").innerHTML = p5pre;

function p5Add() {
  var num, result;
  num = parseInt(document.getElementById("p5total").value, 10);

  result = (num + p5pre);
  document.getElementById("total5").innerHTML = result;

  p5pre = result;
  document.getElementById("p5total").value = "";

}

var p6pre = 0;
document.getElementById("total6").innerHTML = p6pre;

function p6Add() {
  var num, result;
  num = parseInt(document.getElementById("p6total").value, 10);

  result = (num + p6pre);
  document.getElementById("total6").innerHTML = result;

  p6pre = result;
  document.getElementById("p6total").value = "";

}

var p7pre = 0;
document.getElementById("total7").innerHTML = p7pre;

function p7Add() {
  var num, result;
  num = parseInt(document.getElementById("p7total").value, 10);

  result = (num + p7pre);
  document.getElementById("total7").innerHTML = result;

  p7pre = result;
  document.getElementById("p7total").value = "";

}

var p8pre = 0;
document.getElementById("total8").innerHTML = p8pre;

function p8Add() {
  var num, result;
  num = parseInt(document.getElementById("p8total").value, 10);

  result = (num + p8pre);
  document.getElementById("total8").innerHTML = result;

  p8pre = result;
  document.getElementById("p8total").value = "";

}
