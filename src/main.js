document.addEventListener('DOMContentLoaded', myStart);
function myStart(){
    document.getElementById('big').addEventListener('click', increase);
    document.getElementById('small').addEventListener('click', decrease);
}
function increase() {
    var h = document.getElementById('body');
    var style = window.getComputedStyle(h, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    h.style.fontSize = (fontSize + 1) + 'px';
}
function decrease() {
    var h = document.getElementById('body');
    var style = window.getComputedStyle(h, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    h.style.fontSize = (fontSize - 1) + 'px';
}