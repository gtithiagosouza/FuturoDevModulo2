const inputElemento = document.querySelector('input')
const buttonElemento = document.querySelector('button')
const listaElemento = document.querySelector('.list')
// document.querSelector
// document.getElementById

const interesses = []

/**
 * @param {MouseEvent} event - Isso é um evento de click
 */
function lidarAoClicarNoItem(event) {
    const elementoAtual = event.target
    const interesseId = elementoAtual.dataset.interesseId
    
    const inputCheckElemento = elementoAtual.querySelector('input')
    
    inputCheckElemento.setAttribute('checked', 'true')

    interesses.map(item => {
        if(item.id === interesseId) {
            return {
                ...item,
                checked: true,
            }
        }
        return item
    })

    elementoAtual.classList.add('riscado')
}

/** Registrar os eventos */
/** Inicia por aqui - aplicando o evento ao botão */
buttonElemento.addEventListener('click', () => {
    const valorInput = inputElemento.value

    /** Verifica se tem valor no input */
    if(valorInput) {
        /** Criando objeto */
        const itemData = {
            id: Date.now(),
            name: valorInput,
            checked: false,
        }

        const itemElemento = document.createElement('li')
        const checkElemento = document.createElement('input')
        checkElemento.type = "checkbox"
        
        itemElemento.innerText = valorInput
        itemElemento.dataset.interesseId = itemData.id
        
        itemElemento.prepend(checkElemento)

        itemElemento.addEventListener('click', lidarAoClicarNoItem)
        // listaElemento.prepend(itemElemento) // incluir como primeiro filho 
        listaElemento.appendChild(itemElemento) // incluir como ultimo filho
        
        interesses.push(itemData)

        inputElemento.value = ""

    } else {
         document.getElementById('Adicione').innerHTML = "<h1> Adicione um produto</h1>"
    }
})