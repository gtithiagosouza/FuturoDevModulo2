const produtos = [
  { nome: "Atum Congelado", valor: 22.90 },
  { nome: "Cabeça de Bode", valor: 42.59 },
  { nome: "Orelha de Cabra", valor: 2.99 },
  { nome: "Pata de Aintilope", valor: 76.09 }
];

function listarProdutos() {
  const listaProdutos = document.getElementById('produtos');

  for (let i = 0; i < produtos.length; i++) {
      const produto = produtos[i];

      
      const produtoDiv = document.createElement('div');
      produtoDiv.className = 'produto';

     
      produtoDiv.innerHTML = `
          <h2>${produto.nome}</h2>
          <p>R$ ${produto.valor.toFixed(2)}</p>
      `;

     
      listaProdutos.appendChild(produtoDiv);
  }
}

document.addEventListener('DOMContentLoaded', listarProdutos);