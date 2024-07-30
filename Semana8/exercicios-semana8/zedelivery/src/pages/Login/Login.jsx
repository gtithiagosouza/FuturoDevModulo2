import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();  

    function handleSubmit(e) {
        e.preventDefault(); 
        if (email === 'admin@admin.com' && senha === 'admin123') {
            navigate('/home');
        } else {
            alert('Email e/ou senha incorretos');
        }
    }
    return (
        <>


<div className= 'Login'>
<div className="fig">
        <img
         width='200' src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=384&q=75"
        ></img>

      
      <h4>Insira seu email para entrar ou se cadastrar</h4>
      <form className='form'  onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="E-mail"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Senha"
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                />
                <button type="submit">Entrar</button>
            </form>
            </div>
            </div>
        </>
    );
}

export default Login;