let placeholder = {
  cardNome: "SEU NOME",
  cardNumero: "1234 1234 1234 1234",
  cardValidade: "12/12",
  cardCvv: "123",
};

/* INPUTS */
let inputNome = document.getElementById("nome");
let inputNumero = document.getElementById("numero");
let inputValidade = document.getElementById("validade");
let inputCvv = document.getElementById("cvv");

/* SPANS */
let cardNome = document.getElementById("card-nome");
let cardNumero = document.getElementById("card-numero");
let cardValidade = document.getElementById("card-validade");
let cardCvv = document.getElementById("card-cvv");

cardNome.innerHTML = placeholder.cardNome;
cardNumero.innerHTML = placeholder.cardNumero;
cardValidade.innerHTML = placeholder.cardValidade;
cardCvv.innerHTML = placeholder.cardCvv;

let cardContent = document.querySelector(".content");

inputNome.addEventListener("keyup", function (event) {
  //   event.target.value = e.target.value = inputNome.value = this.value
  let inputValue = event.target.value;
  if (inputValue) {
    cardNome.innerHTML = inputValue;
    return;
  }

  cardNome.innerHTML = placeholder.cardNome;
});

inputNumero.addEventListener("keyup", function (event) {
  let inputValue = event.target.value;
  if (inputValue) {
    cardNumero.innerHTML = inputValue;
  }

  cardNumero.innerHTML = placeholder.cardNumero;
});

inputValidade.addEventListener("keyup", function (event) {
  let inputValue = event.target.value;
  if (inputValue) {
    cardValidade.innerHTML = inputValue;
  }

  cardValidade.innerHTML = placeholder.cardValidade;
});

inputCvv.addEventListener("keyup", function (event) {
  let inputValue = event.target.value;
  if (inputValue) {
    cardCvv.innerHTML = inputValue;
  }

  cardCvv.innerHTML = placeholder.cardCvv;
});

inputCvv.addEventListener("focus", function () {
  //   console.log(cardContent.classList);
  //   cardContent.classList.add("rotate");
  cardContent.classList.toggle("rotate");
});

//focusout ou blur
inputCvv.addEventListener("blur", function () {
  //   console.log(cardContent.classList);
  //   cardContent.classList.remove("rotate");
  cardContent.classList.toggle("rotate");
});
