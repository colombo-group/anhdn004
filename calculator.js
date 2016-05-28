/**
 * Created by Love Barca on 5/25/2016.
 */
var input= "";
var result = 0;
var bonho = 0;
window.onload = function () {
    document.getElementById("demo").innerHTML = 0;
}
function addKey(key) {
    input += key;
    document.getElementsByClassName("result").value = input;
    document.getElementById("demo").innerHTML = input;
}
function cong(){
    input = parseFloat(input);
    result += input;
    pheptinh = "cong";
    input = "";
}
function tru() {
    input = parseFloat(input);
    result += input;
    pheptinh = "tru";
    input = "";
}
function nhan() {
    input = parseFloat(input);
    result += input;
    pheptinh ="nhan";
    input = "";
}
function chia() {
    input = parseFloat(input);
    result += input;
    pheptinh = "chia";
    input = "";
}
function compute() {
    input = parseFloat(input);
    if (pheptinh == "cong"){

        result += input;
        console.log(result);
        input = 0;
    }
    if (pheptinh == "tru"){
        result -= input;
        console.log(result);
        input = 0;
    }
    if (pheptinh == "nhan"){
        result *= input;
        console.log(result);
        input = 0;
    }
    if (pheptinh == "chia"){
        result /= input;
        console.log(result);
        input = 0;
    }
    document.getElementById("demo").innerHTML = result;
}
function clearDisplay() {
    bonho = result;
    result = 0;
    input = 0;

    document.getElementById("demo").innerHTML = 0;

}
function addM() {
    input = parseFloat(input);

    bonho += input;

}
function subM(){
    input = parseFloat(input);
    bonho -= input;

}
function readM() {
    document.getElementById("demo").innerHTML = bonho;
}
function doidau() {
    input = input * -1;
    document.getElementById("demo").innerHTML = input;
}
function sothapphan() {

}

