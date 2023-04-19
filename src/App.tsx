import Home from "./paginas/home/Home";
import { Grid } from "@material-ui/core";
import "./App.css";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import CadastroUsuario from "./paginas/CadastroUsuario/CadastroUsuario";
import Login from "./paginas/login/Login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
        <div style={{ minHeight: '85vh'}}>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/cadastrousuario" element={<CadastroUsuario />}/>
          </Routes>
        </div>
      <Footer/>
    </Router>
  );
}

export default App;
