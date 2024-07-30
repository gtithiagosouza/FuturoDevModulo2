import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Signin from './Component/pages/Signin';
import Signup from './Component/pages/Signup';
 import Home from './Component/pages/Home'; 
import Bicicletas from './Component/pages/Bicicletas';
/* import Sidebar from './Component/components/Sidebar'; */
import Overview from './Component/pages/Overview';
import Sensores from './Component/pages/Sensores';
import Locais from './Component/pages/Locais';

function App() {

  const isAuthenticated = true 


  function loginRedirect(componente){
    console.log(`loginRedirect::isAuthenticated::${isAuthenticated}`)
    if (isAuthenticated) {
      return <Navigate to='/' replace />
    }
    return componente
  }

  return (
      <>
      <BrowserRouter>
      <Routes>

      <Route path='/login' element={loginRedirect(<Signin />)} />
      <Route path='/cadastro' element={loginRedirect(<Signup />)} />

        {isAuthenticated ? 
        (
          <>
          <Route path='/' Component={Home} />
          <Route path='/Overview' Component={Overview} />
          <Route path='/Bicicletas' Component={Bicicletas} />
          <Route path='/Overview' Component={Overview} />
          <Route path='/Sensores' Component={Sensores} />
          <Route path='/Locais' Component={Locais} />

          </>
        ) 
        : 
        (
          <Route path='*' element={<Navigate replace to='/login' />} />
        )
        }
        
        
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;