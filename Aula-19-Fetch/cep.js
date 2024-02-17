let url = "https://viacep.com.br/ws";
let urlEstados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
let urlCidades = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/";

let cep = document.getElementById("input-cep");
let rua = document.getElementById("input-rua");
let bairro = document.getElementById("input-bairro");
// let estado = document.getElementById("input-estado");
// let cidade = document.getElementById("input-cidade");
let selectEstado = document.getElementById("select-estado");
let selectCidade = document.getElementById("select-cidade");
let complemento = document.getElementById("input-complemento");

// cep.addEventListener("keyup", function (event) {
cep.addEventListener("keyup", (event) => {
  let cepValue = event.target.value;
  if (cepValue.length !== 8) {
    rua.value = "";
    bairro.value = "";
    selectEstado.value = "";
    selectCidade.value = "";
    complemento.value = "";
    return;
  }

  //   fetch(`${url}/${cepValue}/json`)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (json) {
  //       console.log(json);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  fetch(`${url}/${cepValue}/json`)
    .then((response) => response.json())
    .then((json) => {
      rua.value = json.logradouro;
      bairro.value = json.bairro;
      // estado.value = json.uf;
      // cidade.value = json.localidade;
    });
  //  .catch(function (error) {
  //    console.log(error);
  //  });
});

/*
   -> Tipos de Funções em JS <-

   function minhaFuncao(params){}

   const outraFuncao = function(params) {}

                       arrow function com parâmetro
   const outraFuncao = (params) => {};

   let letFunction = function () {}

                     arrow function sem parâmetro
   let letFunction = () => {};
*/

fetch(urlEstados)
  .then((response) => response.json())
  .then((estados) => {
    //  console.log(estados);
    selectEstado.innerHTML = "<option>Selecione um Estado</option>";

    estados.forEach((item) => {
      selectEstado.innerHTML += `<option value="${item.id}">${item.nome}</option>`;
    });
  });

selectEstado.addEventListener("change", (event) => {
  //   console.log(event.target.value);
  fetch(`${urlCidades}/${event.target.value}/municipios`)
    .then((response) => response.json())
    .then((cidades) => {
      console.log(cidades);
      selectCidade.innerHTML = "<option>Selecione uma Cidade</option>";

      let cidadeOptions = cidades.map(
        (item) => `<option>${item.nome}</option>`
      );

      selectCidade.innerHTML += cidadeOptions.join();
    });
});
