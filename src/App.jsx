import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Toolbar from "./components/toolbar.component";
import Shop from "./pages/shop/shop.page";
import Signin from "./pages/signin/signin.page";
import Signup from "./pages/signup/signup.page";

const ROUTES = [
  {
    name: "shop",
    path: "/",
    page: <Shop />,
  },
  {
    name: "signin",
    path: "/login",
    page: <Signin />,
  },
  {
    name: "signup",
    path: "/signup",
    page: <Signup />,
  },
];

function App() {
  return (
    <Router>
      <Toolbar nav={ROUTES} />
      <Routes>
        {ROUTES.map((route) => (
          <Route path={route.path} element={route.page} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
