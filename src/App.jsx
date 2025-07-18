import './components/Header';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Search from './components/pages/Search';
import Account from './components/pages/Account';
import NewPost from './components/pages/NewPost';
import {Routes, Route} from "react-router-dom";
import Register from './components/pages/Register';




function App() {
  return (
    <div className='container py-3'>
       <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/account'} element={<Account />}/>
        <Route path={'/login'} element={<Login />}/>
        <Route path={'/post/new'} element={<NewPost />}/>
        <Route path={'/search'} element={<Search />}/>
        <Route path={'/register'} element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
