function atualizarTela() {
    if (document.getElementById("comparar").checked) {
        limparComparador();
        document.getElementById("comparador").style.display = "flex";
        document.getElementById("checador").style.display = "none";
    } else {
        document.getElementById("comparador").style.display = "none";
        document.getElementById("checador").style.display = "flex";
        transformarTexto();
    }
}
function transformarTexto() {
    var tamanhoComEspaco = document.getElementById("comprimentoId").value.length;
    document.getElementById("comprimentoResultado").innerText = "Número de caracteres: " + tamanhoComEspaco;
}
function checkStrings() {
    var texto1 = document.getElementById("comparador1").value;
    var texto2 = document.getElementById("comparador2").value;
    var resultado = document.getElementById("comparadorResultado");
    if (texto1 == 0 && texto2 == 0) {
        resultado.innerText = "";
        return;
    }
    if (ignorarMaiusculas()) {
        texto1 = texto1.toLowerCase();
        texto2 = texto2.toLowerCase();
    }
    if (texto1 == texto2) {
        resultado.innerText = "Iguais";
        resultado.style.color = "green";
    }else{
        resultado.innerText = "Diferentes";
        resultado.style.color = "red";
    }
}
function ignorarMaiusculas() {
    return document.getElementById("ignorarMaiusculaSim").checked;
}
function limparComparador() {
    document.getElementById("comparador1").value = "";
    document.getElementById("comparador2").value = "";
    checkStrings();
}