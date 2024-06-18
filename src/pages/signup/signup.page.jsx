import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Je récupère la fonction handleToken en props
const Signup = ({ handleToken }) => {
  // States qui gèrent mes inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  //   State qui gère le message d'erreur
  const [errorMessage, setErrorMessage] = useState("");

  //   Permet de naviguer au click après avoir exécuté du code
  const navigate = useNavigate();

  // Fonction qui sera appelée lors de la validation du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    //   Je fais disparaitre un éventuel message d'erreur
    setErrorMessage("");
    try {
      //   Requête axios :
      // - Premier argument : l'url que j'interroge
      // - deuxième : le body que j'envoi
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email,
          username,
          password,
          newsletter,
        }
      );
      console.log(response.data);
      if (response.data.token) {
        // J'enregistre le token dans mon state et mes cookies
        handleToken(response.data.token);
        // Cookies.set("vinted-token", response.data.token, { expires: 15 });
        // setToken(response.data.token);
        // Rediriger l'utilisateur vers la page /
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      // Si je reçois le status 409
      if (error.response.status === 409) {
        setErrorMessage("Cet email est déjà utilisé");
      } else if (error.response.data.message === "Missing parameters") {
        // Si je reçois le message Missing parameters
        setErrorMessage("Veuillez remplir tous les champs");
      }
    }
  };

  return (
    <main>
      <h1>Page Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <input
          type="checkbox"
          onChange={() => {
            setNewsletter(!newsletter);
          }}
          checked={newsletter}
        />
        <input type="submit" value="S'inscrire" />
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </main>
  );
};

export default Signup;
