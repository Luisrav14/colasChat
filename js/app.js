class Filas {

    constructor() {
        this.fila = [];
    }

    encolar(data) {
        this.fila.push([data]);
        return this.fila;
    }

    desencolar() {
        this.fila.shift();
        return this.fila;
    }

    frente() {
        return this.fila[0];
    }

    empty() {
        if (this.fila.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    length() {
        return this.fila.length;
    }

    print() {
        return console.log(this.fila);
    }
}

const fila = new Filas();
fila.encolar('Data1');
fila.encolar('Data2');


const seg = fila.length() * 10 + 3;
var i = 0;
var tiempoRes = seg;

var Capturar = function () {
    let dataSave = document.getElementsByClassName("data"),
        arrayGuardar = [];
    for (var i = 0; i < dataSave.length; i++) {
        arrayGuardar[i] = dataSave[i].value;
        console.log(dataSave[i].value);
    }
    fila.encolar(arrayGuardar);
    window.location.href = "../public/espera.html";
}

var contador = setInterval(function () {
    tiempoRes--;
    i++;
    if (i == 10) {
        fila.desencolar();
        i = 0;
    }
    document.getElementById("encola").innerHTML = fila.length() + 1;
    document.getElementById("countdowntimer").innerHTML = tiempoRes;
    if (tiempoRes <= 0) {
        clearInterval(contador);
        window.location.href = "../public/chat.html";
    }
}, 1000);

function cancel() {
    fila.desencolar();
    window.close();
}