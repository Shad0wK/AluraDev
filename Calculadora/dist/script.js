function Calcular() {

var notas = (parseInt(document.getElementById("valor").value) + parseInt(document.getElementById("valor2").value) + parseInt(document.getElementById("valor3").value) +
parseInt(document.getElementById("valor4").value) ) / 4;

 
var notasCertas = document.getElementById("resultado");

 if (notasCertas > 60 ) {
    notas.innerHTML = "Você passou"
 } else {notas.innerHTML = " Você não passou";
}

resultado.innerHTML = notas;
}