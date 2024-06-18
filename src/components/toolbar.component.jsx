import { Link } from "react-router-dom";
import "./toolbar.component.css";
import Logo from "../assets/logo.png";

function Toolbar({ token, handleToken }) {
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
          {token ? (
            <button
              onClick={() => {
                // Cookies.remove("vinted-token");
                // setToken(null);
                handleToken(null);
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <>
              <Link to="/signup" className="signup">
                S'inscrire
              </Link>
              <Link to="/login" className="signin">
                Se connecter
              </Link>
            </>
          )}
          <Link to={token ? "/publish" : "/login"} className="sell">
            Vends tes articles !
          </Link>
        </div>
      </div>
    </>
  );
}

export default Toolbar;
