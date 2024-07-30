import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'
import Produtos from './pages/Produtos/Produtos';

function App() {
  return (



    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Produtos" element={<Produtos />} />
      </Routes>
    </Router>
  );
}

export default App;