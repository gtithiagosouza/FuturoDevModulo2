import './Header.css'; 
import bikcraftLogo from '../../assets/bikcraft.svg'; // Ajuste o caminho da importação conforme necessário

const Header = () => {
  return (
    <header className="header-bg">
      <div className="header">
        <a href="./">
          <img src={bikcraftLogo} alt="Bikcraft" />
        </a>
        <nav aria-label="primaria">
          <ul className="header-menu">
            <li><a href="./bicicletas.html">Bicicletas</a></li>
            <li><a href="./seguros.html">Seguros</a></li>
            <li><a href="./contato.html">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;