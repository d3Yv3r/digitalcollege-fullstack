let idade = prompt("Qual sua Idade");

let mensagem = "";

function erro(mensagem) {
  alert(mensagem);
  let tag_h1 = document.getElementById("content");
  tag_h1.textContent = "Você não tem acesso para ver esse conteudo";
}

function confirmacao(mensagem) {
  let confirmacao = confirm(mensagem + "Você deseja continuar?");

  if (confirmacao) {
    alert("Confirmação Recebida!");
  } else {
    erro("Confirmação não Recebida!");
  }
}

if (idade >= 18) {
  mensagem = "Você é maior! ";
  confirmacao(mensagem);
} else {
  mensagem = "Você NÃO é maior! ";
  erro(mensagem);
}
