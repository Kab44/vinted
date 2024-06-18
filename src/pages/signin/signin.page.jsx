import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email,
          password,
        }
      );
      //   console.log(response.data);
      if (response.data.token) {
        handleToken(response.data.token);
        // Cookies.set("vinted-token", response.data.token, { expires: 15 });
        // setToken(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1>Page Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <input type="submit" value="Se connecter" />
      </form>
    </main>
  );
};

export default Signin;
