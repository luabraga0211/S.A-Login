import './App.css'
import Login from './pages/Login/Login';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import LoginAdm from './pages/LoginAdm/LoginAdm';
import Aboutus from './pages/Aboutus/Aboutus';
import Homeinicio from './pages/HomeInicio/Homeinicio';
import Entradasaida from './pages/Entradasaida/Entradasaida';
import Vregister from './pages/Vregister/Vregister';
import Usuariocriado from './pages/Usuariocriado/Usuariocriado';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/LoginAdm' element={<LoginAdm />} />
      <Route path='/Aboutus' element={<Aboutus />} />
      <Route path='/Homeinicio' element={<Homeinicio />} />
      <Route path='/Entradasaida' element={<Entradasaida />} />
      <Route path='/Vregister' element={<Vregister />} />
      <Route path='/Usuariocriado' element={<Usuariocriado />} />



      </Routes>
      </BrowserRouter>
  )
}
export default App
