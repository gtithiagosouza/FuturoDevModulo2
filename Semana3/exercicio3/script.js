
document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("botao");

  startButton.addEventListener("click", () => {
      const name = prompt("Por favor, insira seu nome:");

      if (!name) {
          alert("Erro: Você não inseriu um nome.");
          return;
      }

      const proceed = confirm(`Deseja continuar com a interação, ${name} ?`);

      if (proceed) {
          alert(`Obrigado por continuar, ${name} !`);
      } else {
          alert("Interação encerrada.");
      }
  });
});
