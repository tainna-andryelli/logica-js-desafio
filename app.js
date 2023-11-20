let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function exibeMensagemDeClique() {
  console.log("O botão foi clicado");
}

function exibeAlerta() {
  alert("Eu amo JS!");
}

function perguntaCidade() {
  let cidade = prompt("Digite o nome de uma cidade brasileira:");
  alert(`Estive em ${cidade} e lembrei de você.`);
}

function soma() {
  let n1 = parseInt(prompt("Digite o número 1:"));
  let n2 = parseInt(prompt("Digite o número 2:"));
  let soma = n1 + n2;
  alert(`O resultado da soma de ${n1} com ${n2} é ${soma}.`);
}
