const nome = window.prompt("digite seu nome")
console.log(nome)
const elemento = document.getElementById("nomeConvertido");
elemento.innerHTML = `Seu nome é ${nome}`