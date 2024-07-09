document.addEventListener('DOMContentLoaded', () => {
  const episodios = [
    { id: 'episodio 2', src: '/Semana4/exercicio1Net/img/epi.png'}
   ];

  const epiCont = document.getElementById('epi');
 

  function adicionarEpi(episodio) {
    const img = document.createElement('img');    
    img.id = episodio.id;
    img.src = episodio.src;
    img.width = 694;
    img.height = 135;
    img.onclick = () => epiClicado(episodio.id);
    
    epiCont.appendChild(img);
  }

  episodios.forEach(adicionarEpi);
});

function epiClicado(id) {
  console.log('Episódio clicado:', id);
}