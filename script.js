var flag = false;

function clearAll() {
	document.getElementById('dktop').value = '';
}
function binhPhuong() {
	var x2 = document.getElementById('dktop').value;
	x2 = x2 * x2;
	document.getElementById('dktop').value = x2;
}
function sqrt() {
	var s = Math.sqrt(document.getElementById('dktop').value) ;
	document.getElementById('dktop').value = s
}
function giaiThua (){
	var g = document.getElementById('dktop').value;
	var n = 1;
	for(var i = 1; i <= g; i++){
		n = n * i;
	}
	document.getElementById('dktop').value = n;
}
function del() {
	var del = document.getElementById('dktop').value;
	del = del.substr(0, del.length - 1)
	document.getElementById('dktop').value = del;
}
function number7() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	document.getElementById('dktop').value += "7";
}
function number8() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	document.getElementById('dktop').value += "8";
}
function number9() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	document.getElementById('dktop').value += "9";
}
function layDu() {
	flag = false;
	document.getElementById('dktop').value += "%";
}
function log10() {
	document.getElementById('dktop').value += Math.LN10;
}
function number4() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	document.getElementById('dktop').value += "4";
}
function number6() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	document.getElementById('dktop').value += "6";
}
function number5() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	document.getElementById('dktop').value += "5";
}
function nhan() {
	flag = false;
	document.getElementById('dktop').value += "*";
}
function tru() {
	flag = false;
	document.getElementById('dktop').value += "-";
}
function number1() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	document.getElementById('dktop').value += "1";
}
function number2() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	document.getElementById('dktop').value += "2";
}
function number3() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	document.getElementById('dktop').value += "3";
}
function chia() {
	flag = false;
	document.getElementById('dktop').value += "/";
}
function cong() {
	flag = false;
	document.getElementById('dktop').value += "+";
}
function number0() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	document.getElementById('dktop').value += "0";
}
function cham() {
	document.getElementById('dktop').value += ".";
}
function pi() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	document.getElementById('dktop').value += " 3.14";
}
function cal() { 
	var KQ = eval (document.getElementById('dktop').value);
	//console.log(eval(document.getElementById('dktop').value));
	document.getElementById('dktop').value = KQ;
	flag = true;

}


