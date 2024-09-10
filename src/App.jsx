import './App.css'
import Login from './pages/Login/Login';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
