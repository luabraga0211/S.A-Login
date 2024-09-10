import './App.css'
import Login from './pages/Login/Login';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import LoginAdm from './pages/LoginAdm/LoginAdm';
import Aboutus from './pages/Aboutus/Aboutus';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/LoginAdm' element={<LoginAdm />} />
      <Route path='/Aboutus' element={<Aboutus />} />
      
      </Routes>
      </BrowserRouter>
  )
}

export default App
