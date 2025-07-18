import { Route, Routes } from "react-router-dom";
import "./components/Header";
import Account from "./components/pages/Account";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import NewPost from "./components/pages/NewPost";
import Register from "./components/pages/Register";
import Search from "./components/pages/Search";

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
      </Routes>
    </div>
  );
}

export default App;
