let inputNome = document.getElementById("nome");
let inputNumero = document.getElementById("numero");
let inputValidade = document.getElementById("validade");

let cardNome = document.getElementById("card-nome");
let cardNumero = document.getElementById("card-numero");
let cardValidade = document.getElementById("card-validade");

//Evento JS de escuta (.addEventListener())
inputNome.addEventListener("keyup", function (event) {
  cardNome.innerHTML = event.target.value;
});

inputNumero.addEventListener("keyup", function (e) {
  cardNumero.innerHTML = e.target.value;
});

inputValidade.addEventListener("keyup", function (e) {
  cardValidade.innerHTML = e.target.value;
});

/*
   --> Primeira versão <--
   
   const BACEN = {
   instituicao: "",
   transacao: function (conta, valor) {
      if (this.instituicao === "") {
         console.log("Instituição indefinida");
         return;
      }

      if (this.instituicao === "itau") {
         console.log(
         valor + "foi transferido para " + conta + " com uma taxa de 10%"
         );
         console.log("Valor com taxa " + valor * 1.1);
         return;
      }

      if (this.instituicao === "bradesco") {
         console.log(
         valor + "foi transferido para " + conta + " com uma taxa de 5%"
         );
         console.log("Valor com taxa " + valor * 1.05);
         return;
      }

      // console.log("Instituição indefinida");
   },
   };

   BACEN.instituicao = "bradesco";
   BACEN.transacao("001", 20);

   --> Refatorado <--

   const ITAU = function (conta, valor) {
   console.log("O valor com a taxa ficou " + valor * 1.1);
   };

   const BRADESCO = function (conta, valor) {
   console.log("O valor com a taxa ficou " + valor * 1.05);
   };

   const BACEN = {
   transacao: function (instituicao, conta, valor) {
      console.log("Iniciando transação");

      instituicao(conta, valor);

      console.log("Outras coisas que interessam ao BACEN");

      console.log("Transação concluída!");
   },
   };

   BACEN.transacao(ITAU, "001", 20);

*/
