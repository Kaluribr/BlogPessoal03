
import Home from './paginas/home/Home';
import { Grid } from '@material-ui/core';
import './App.css'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
   <Navbar />
   <Home />
   <Footer/>
   </>
  )
}

export default App
