const inputElemento = document.querySelector('input')
const buttonElemento = document.querySelector('button')
const listaElemento = document.querySelector('.list')


/** Registrar os eventos */
buttonElemento.addEventListener('click', () => {
    const valorInput = inputElemento.value

    if(valorInput) {

      if (document.getElementById('Adicione')) {
        document.getElementById('Adicione').remove();
    }    
        const itemElemento = document.createElement('li')
        itemElemento.innerText = valorInput
               

        // listaElemento.prepend(itemElemento) // incluir como primeiro filho 
        listaElemento.appendChild(itemElemento) // incluir como ultimo filho

        inputElemento.value = '';
        
    } else {
     document.getElementById('Adicione').innerHTML = "<h1> Adicione um produto</h1>"
           
    }
})