function resetSite() {
    document.getElementById("comparador").style.display = "none";
    document.getElementById("checador").style.display = "none";
}
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
    var comSaida = document.getElementById("transformarTextoSim").checked;
    document.getElementById("comprimentoResultado").innerText = "Número de caracteres: " + tamanhoComEspaco + "/" + document.getElementById("comprimentoMaximo").value;
    var tamanhoSemEspaco = document.getElementById("comprimentoId").value.replace(/ /g, "");
    tamanhoSemEspaco = tamanhoSemEspaco.length;
    document.getElementById("comprimentoSemEspaco").innerText = "Número de caracteres sem espaço: " + tamanhoSemEspaco + "/" + document.getElementById("comprimentoMaximo").value;
    if (tamanhoComEspaco >= document.getElementById("comprimentoMaximo").value) {
        document.getElementById("resultadoComprimento").innerText = "Fora do permitido"
        document.getElementById("resultadoComprimento").style.color = "red";
    }else{
        document.getElementById("resultadoComprimento").innerText = "Dentro do permitido"
        document.getElementById("resultadoComprimento").style.color = "green";
    }
    if (comSaida) {
        document.getElementById("transformarTexto").style.display = "flex";
        if (document.getElementById("none").checked) {
            document.getElementById("textoTransformado").value = "";
        }
        if (document.getElementById("lowerCase").checked) {
            document.getElementById("textoTransformado").value = document.getElementById("comprimentoId").value.toLowerCase();
        }
        if (document.getElementById("upperCase").checked) {
            document.getElementById("textoTransformado").value = document.getElementById("comprimentoId").value.toUpperCase();
        }
        if (document.getElementById("capitalize").checked) {
            var capitalizado = document.getElementById("comprimentoId").value;
            capitalizado = capitalizado.charAt(0).toUpperCase() + capitalizado.slice(1).toLowerCase();
            document.getElementById("textoTransformado").value = capitalizado;
        }
    } else {
        document.getElementById("transformarTexto").style.display = "none";
    }
    
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