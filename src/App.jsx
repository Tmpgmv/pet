import { Route, Routes } from "react-router-dom";
import "./components/Header";
import Account from "./components/pages/Account/Index";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login/Index";
import NewPost from "./components/pages/NewPost";
import Register from "./components/pages/Register";
import Search from "./components/pages/Search";
import Card from "./components/pages/Card";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="container py-3">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/account"} element={<Account />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/post/new"} element={<NewPost />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/card"} element={<Card />} />        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
