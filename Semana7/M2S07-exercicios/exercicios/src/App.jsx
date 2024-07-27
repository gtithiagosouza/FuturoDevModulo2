import './App.css'
import Contador from './componentes/Contador'
import Noticia from './componentes/Noticia'
import Lista from './componentes/Lista'
import Formulario from './componentes/Formulario'
import Inputcontrol from './componentes/Inputcontrol'




function App() {
  return (
    <>
      <div>

      
        <Contador></Contador>
        <Lista></Lista>
        <Formulario></Formulario>
        <Inputcontrol></Inputcontrol>

       

      </div>
      
      <Noticia></Noticia>
  
    </>
  )
}

export default App