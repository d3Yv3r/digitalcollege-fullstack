import { requestGET } from "./scripts/api.js";
import RenderSelectOptions from "./scripts/select-options.js";

let url = "https://viacep.com.br/ws";
let urlEstados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
let urlCidades = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/";

let cep = document.getElementById("input-cep");
let rua = document.getElementById("input-rua");
let bairro = document.getElementById("input-bairro");
let selectEstado = document.getElementById("select-estado");
let selectCidade = document.getElementById("select-cidade");
let complemento = document.getElementById("input-complemento");

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

  requestGET(`${url}/${cepValue}/json`, (json) => {
    rua.value = json.logradouro;
    bairro.value = json.bairro;
  });
});

requestGET(urlEstados, function (estados) {
  selectEstado.innerHTML = RenderSelectOptions(estados, "nome", "id", true);

  //   estados.forEach((item) => {
  //     selectEstado.innerHTML += `<option value="${item.id}">${item.nome}</option>`;
  //   });
});

selectEstado.addEventListener("change", (event) => {
  //   urlCidades = `${urlCidades}/${event.target.value}/municipios`;
  urlCidades += `/${event.target.value}/municipios`;

  requestGET(urlCidades, function (cidades) {
    selectCidade.innerHTML = RenderSelectOptions(cidades, "nome", "id", true);

    //  selectCidade.innerHTML = "<option>Selecione uma Cidade</option>";
    //  let cidadeOptions = cidades.map((item) => `<option>${item.nome}</option>`);
    //  selectCidade.innerHTML += cidadeOptions.join();
  });
});
