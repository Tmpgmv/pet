import './components/Header';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className='container py-3'>
       <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/login'} element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
