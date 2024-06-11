let x = 10

if(x > 5) {
    var y = 20

    console.log(y + x)
}

// console.log(y)
// console.log(z)

// var z = 1500
function formatarTexto(texto) {
    return texto
}

var nome = "Amora"
var isActive = true
var company = "Amoratec"



// const template = `Nome: ${}`
const botaoIniciar = document.getElementById("btn")
const inputNome = document.getElementById("nome")

botaoIniciar.addEventListener('click', () => {

    //botaoIniciar.innerHTML = "Logado com sucesso!!"
    // botaoIniciar.innerHTML = "<span>teste</span>"
    // if(inputNome) {
        // const corpoDaRequisicao = {
        //     nome: inputNome.value,
        // }


        // let nomeUsuario = inputNome.value
        // console.log('input value => ', nomeUsuario)
    // }

    const nome = window.prompt("Informe seu nome:")
    
    if(nome) {
        const termos = window.confirm("Você concordo com nossos termos? ")

        if(termos) { 
            const templateEmail = `
                <p>
                    Olá, 
                    seja bem-vindo a 
                    nossa newsletter ${nome}
                </p>

                status: ${isActive ? "Ativo" : "Inativo"}

                <strong>
                atenciosamente, 
                ${company}
                </strong>
            `;
            
            document.write(templateEmail)
        }
    }
})




function montarElemento() {
    return "<span>teste....</span>"
}

// document.write(montarElemento())

