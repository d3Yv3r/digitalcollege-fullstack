/*
   //Primeira Forma
   let request = fetch(apiUrl).then(function (response) {
   response.json().then(function (obj) {
      console.log(obj);
   });
   });


   //Primeira Forma
   let request = fetch(apiUrl)
   //Resultado da requisição (response = promise)
   .then(function (response) {
      return response.json();
   })
   .then(function (obj) {
      console.log(obj);
   });


   //Descrição
   fetch() -> Função de fazer requisição que retorna uma promise;
   .then() -> Função que aguarda a promise do fetch e que retorna uma função com a promise como parâmetro;
*/

let formCep = document.getElementById("form-cep");

formCep.addEventListener("submit", function (event) {
  event.preventDefault();

  let cep = document.getElementById("input-cep");

  let tableBody = document.querySelector("#table tbody");

  fetch(`https://viacep.com.br/ws/${cep.value}/json`)
    .then(function (response) {
      return response.json();
    })
    .then(function (obj) {
      tableBody.innerHTML = `
    <tr>
      <td>${obj.cep}</td> 
      <td>${obj.logradouro}</td> 
      <td>${obj.bairro}</td> 
      <td>${obj.uf}</td> 
    </tr>
    `;
    });
});
