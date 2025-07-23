import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Account from "./components/pages/Account/Index";
import Card from "./components/pages/Card";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login/Index";
import NewPost from "./components/pages/NewPost";
import Register from "./components/pages/Register";
import Search from "./components/pages/Search";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="container py-3">
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/card"} element={<Card />} />
        <Route path={"/register"} element={<Register />} />
        
        {/* Только для авторизованных пользователей */}
        
        <Route path={"/account"} element={<RequireAuth><Account /></RequireAuth>} />
        <Route path={"/post/new"} element={<RequireAuth><NewPost /></RequireAuth>} />
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
