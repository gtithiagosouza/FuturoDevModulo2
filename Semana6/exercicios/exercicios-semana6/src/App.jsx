import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import "./Contato.css"



function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function enviarForm() {
    const form = {
      nome,
      email,
      mensagem
    }
    console.log('Formulário a ser enviado: ', form)
  }

  return (
    <>
      <Header></Header>

   

      <div className="Contato">
        <fieldset>
          <label>Nome</label>
          <input type='text' 
            placeholder='Digite seu nome' 
            value={nome} 
            onChange={(e) => setNome(e.target.value)}/>
        </fieldset>

        <fieldset>
          <label>E-mail</label>
          <input type='text' placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        </fieldset>

        <fieldset>
          <label>Mensagem</label>
          <textarea type='text' placeholder='Digite sua mensagem' value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
        </fieldset>

        <button onClick={() => enviarForm()}>Enviar</button>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;


{/* <Header />


<Footer /> */}