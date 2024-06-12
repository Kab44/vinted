import { Link } from "react-router-dom";
import "./toolbar.component.css";
import Logo from "../assets/logo.png";

function ToolbarTest(props) {
  return (
    <>
      <nav>
        <ul>
          {props.nav.map((route) => (
            <li>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

function Toolbar(props) {
  return (
    <>
      <div>
        <div className="tool-container">
          <img className="logo" src={Logo} alt="logo" />
          <input
            className="search-bar"
            type="Recherche"
            placeholder="Rechercher des articles"
          />
          <button className="signin">Se connecter</button>
          <button className="signup">S'inscrire</button>
          <button className="sell">Vends tes articles</button>
        </div>
      </div>
    </>
  );
}

export default Toolbar;
