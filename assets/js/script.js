var array = [];
function getValue(val) {
    array.push(val);
    document.getElementById('text').innerHTML += val + "<br>";
    if (array.length >= 4) {
        document.getElementById('text').innerHTML = "3 Elements MAX";
        array = [];
    }
}
function checkResult() {
    if (array[0] == 2 && array[1] == 2 && array[2] == 1) {
        document.getElementById('text').innerHTML = "C'est gagné !";
        array = [];
    }
    else {
        document.getElementById('text').innerHTML = "Raté !";
        array = [];
    }
}








