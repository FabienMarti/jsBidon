var array = [];
document.getElementById('buttonValid').style.opacity = 0;
function getValue(val) {
    array.push(val);
    document.getElementById('text').innerHTML += val + " ";
    if (array.length <= 1) {
        document.getElementById('textError').innerHTML = "Ton choix :";
    }
    else if (array.length == 3) {
        document.getElementById('buttonValid').style.opacity = 1;
    }
    else if (array.length >= 4) {
        document.getElementById('textError').innerHTML = "3 Elements MAX";
        document.getElementById('text').innerHTML = " ";
        document.getElementById('buttonValid').style.opacity = 0;
        array = [];
    }
}



function checkResult() {
    if (array[0] == 2 && array[1] == 2 && array[2] == 1) {
        document.getElementById('textError').innerHTML = "C'est gagné !";
        document.getElementById('text').innerHTML = " ";

    }
    else {
        document.getElementById('textError').innerHTML = "Raté !";
        document.getElementById('text').innerHTML = " ";

    }
    array = [];
    document.getElementById('buttonValid').style.opacity = 0;
}








