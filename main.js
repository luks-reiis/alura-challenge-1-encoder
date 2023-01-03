function crip() {
    var textoDigitado = document.getElementById("inputTexto").value;

    if (textoDigitado != "") {
        var textoCrip = textoDigitado.split(/e/g).join("enter").split(/i/g).join("imes").split(/a/g).join("ai").split(/o/g).join("ober").split(/u/g).join("ufat");
        document.getElementById("conteudoTemporario").style.display = "none";
        document.getElementById("conteudoTransformado").style.display = "inline-block"
        document.getElementById("conteudoTransformado").value = textoCrip;
        document.getElementById("inputTexto").value = "";
    }
}

function decrip() {
    var textoDigitado = document.getElementById("inputTexto").value;

    if (textoDigitado != "") {
        var textoDecrip = textoDigitado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.getElementById("conteudoTemporario").style.display = "none";
        document.getElementById("conteudoTransformado").style.display = "inline-block"
        document.getElementById("conteudoTransformado").value = textoDecrip;
        document.getElementById("inputTexto").value = "";
    }
}