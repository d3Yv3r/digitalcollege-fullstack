// let operacao = "";
// let operacao = "somar";
// let operacao = "subtrair";
// let operacao = "soma";
// let operacao = 0;

function calculadora(operacao) {
  let operacoesValidas = ["somar", "subtrair", "multiplicar", "dividir"];
  // if (typeof operacao != "string" || !operacoesValidas.includes(operacao)) {
  if (!operacoesValidas.includes(operacao)) {
    return "Operação Inválida!";
  }

  if (operacao === "somar") {
    return 1 + 1;
  }

  if (operacao === "subtrair") {
    return 2 - 1;
  }

  if (operacao === "multiplicar") {
    return 2 * 4;
  }
  if (operacao === "dividir") {
    return 2 / 1;
  }

  return false;
}

let resultado = calculadora("multiplicar");
console.log(resultado);

/*
  switch (operacao) {
    case "soma":
    case "somar":
      console.log(1 + 1);
      break;
    case "subtrair":
      console.log(2 - 1);
      break;
    default:
      console.log("Operação Inválida!");
      break;
  }

  if (typeof operacao != "string") {
    console.log("Operação Inválida!");
    return;
  }

  if (operacao === "soma" || operacao === "somar") {
    console.log(1 + 1);
  } else if (operacao === "subtrair") {
    console.log(2 - 1);
  } else if (operacao === "divisão") {
    console.log(2 / 1);
  }
  // else {
  //   console.log("Operação Inválida!");
  // }
*/
