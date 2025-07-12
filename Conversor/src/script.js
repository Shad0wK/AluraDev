function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmLibra = valorEmRealNumerico * 7;
  console.log(valorEmLibra);

  var valorConvertido = document.getElementById("valorConvertido");
  var valorConvertidoEmLibra =
    valorEmRealNumerico + " Reais é igual a " + valorEmLibra + " libras.";
  valorConvertido.innerHTML = valorConvertidoEmLibra;
}

function Converter2() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var valorConvertido2 = document.getElementById("valorConvertido2");
  var valorConvertidoEmDolar =
    valorEmDolarNumerico + " Dolares é igual a R$ " + valorEmReal;
  valorConvertido.innerHTML = valorConvertidoEmDolar;
}

function Converter3() {
  var valorCelsius = parseFloat(document.getElementById("valor").value);

  var valorEmCelsius = valorCelsius - 32;

  var converterCelsius = document.getElementById("valorConvertido3");

  var valorConvertidoEmFarenheint =
    valorCelsius + " Celsius é igual a " + valorEmCelsius + " Farenheint";
  valorConvertido.innerHTML = valorConvertidoEmFarenheint;
}

function Converter4() {
  var valorReal = parseFloat(document.getElementById("valor").value);

  var valorEmKwanza = valorReal * 112;

  var converterKwanza = document.getElementById("valorConvertido4");

  var valorConvertidoEmKwanza =
    valorReal + " Reais é igual a " + valorEmKwanza + " Kwanza";
  valorConvertido.innerHTML = valorConvertidoEmKwanza;
}

function Converter5() {
  var valorCelsius = parseFloat(document.getElementById("valor").value);

  var valorEmKelvin = valorCelsius + 273;

  var converterCelsius = document.getElementById("valorConvertido5");

  var valorConvertidoEmKelvin =
    valorCelsius + " Celsius é igual a " + valorEmKelvin + " Kelvin";
  valorConvertido.innerHTML = valorConvertidoEmKelvin;
}
