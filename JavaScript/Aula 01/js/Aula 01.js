document.getElementById("txt").innerHTML = "Maria"
console.log("Olá mundo");

function aumentar() {
    document.getElementById("txt").style.fontSize = "50px";
}
function diminuir() {
    document.getElementById("txt").style.fontSize = "20px";
}

function acender() {
    document.getElementById("lampada").src = "img/acesa.jpeg";
}

function desligar() {
    document.getElementById("lampada").src = "img/apagada.jpeg";
}
