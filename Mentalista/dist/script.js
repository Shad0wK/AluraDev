var numeroRandom = parseInt(Math.random() * 16);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log("chute");
  var numeroCerto = document.getElementById("resultado");
  if (chute == numeroRandom) {
    numeroCerto.innerHTML = "Você acertou";
  } else if (chute > 15 || chute < 0) {
    numeroCerto.innerHTML = "Numero não está entre 0 e 15 ai amigão";
  } else {
    numeroCerto.innerHTML = " Você errou";
  }
}