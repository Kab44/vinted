import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
// COMPONENTS
import Toolbar from "./components/toolbar.component";

// PAGES
import Shop from "./pages/shop/shop.page";
import Signin from "./pages/signin/signin.page";
import Signup from "./pages/signup/signup.page";
import Offer from "./pages/shop/Offer";
import Publish from "./pages/Publish";

function App() {
  const [token, setToken] = useState(Cookies.get("vinted-token") || null);

  // Cette fonction permet de stocker le token dans le state et dans les cookies ou supprimer le token dans le state et dans les cookies
  const handleToken = (token) => {
    if (token) {
      Cookies.set("vinted-token", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove("vinted-token");
      setToken(null);
    }
  };

  const ROUTES = [
    {
      name: "shop",
      path: "/",
      page: <Shop />,
    },
    {
      name: "signin",
      path: "/login",
      page: <Signin handleToken={handleToken} />,
    },
    {
      name: "signup",
      path: "/signup",
      page: <Signup handleToken={handleToken} />,
    },
    {
      name: "offer",
      path: "/offers/:id",
      page: <Offer />,
    },
    {
      name: "publish",
      path: "/publish",
      page: <Publish token={token} />,
    },
  ];
  return (
    <Router>
      <Toolbar nav={ROUTES} token={token} handleToken={handleToken} />
      <Routes>
        {ROUTES.map((route) => (
          <Route path={route.path} element={route.page} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
