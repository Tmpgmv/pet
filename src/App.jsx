import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Account from "./components/pages/Account/Index";
import Card from "./components/pages/Card/Index";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login/Index";
import NewPost from "./components/pages/NewPost";
import Register from "./components/pages/Register";
import Search from "./components/pages/Search";
import RequireAuth from "./components/RequireAuth";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    
    <div className="container py-3">
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/search"} element={<Search />} />
        <Route path="/card/:cardId" element={<Card />} />
        <Route path={"/register"} element={<Register />} />
        
        {/* Только для авторизованных пользователей */}
        
        {/* Форсируем ре-рендеринг через свойство Key. 
        Т.е. мы на страницу ACCOUNT. Мы запрашиваем изменение адреса
        электронной почты и телефона. И ести выполнить navigate(ACCOUNT), 
        React не будет перезагружать компоненты. Потому что
        переход выполняется на ту же страницу, где мы уже находимся. 
        
        Но пишем свойство key. Принцип: location.key меняется
        каждый раз, когда используется navigate (даже в случае, если мы остаемся
        на той же страницы)
        
        Т.е. это позволят выполнять перезагрузку страницы через navigate.               
        */}
        <Route path={"/account"} element={<RequireAuth><Account key={location.key}/></RequireAuth>} />
        <Route path={"/post/new"} element={<RequireAuth><NewPost /></RequireAuth>} />
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
