function checkStrings() {
    var texto1 = document.getElementById("comparador1").value;
    var texto2 = document.getElementById("comparador2").value;
    if (ignorarMaiusculas()) {
        texto1 = texto1.toLowerCase();
        texto2 = texto2.toLowerCase();
    }
    if (texto1 == texto2) {
        console.log("iguais");
    }else{
        console.log("diferentes");
    }
}
function ignorarMaiusculas() {
    return false
}