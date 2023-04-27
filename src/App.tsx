import Home from "./paginas/home/Home";
import { Grid } from "@material-ui/core";
import "./App.css";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import CadastroUsuario from "./paginas/CadastroUsuario/CadastroUsuario";
import Login from "./paginas/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaTema from "./components/temas/listatema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import CadastroPostagem from "./components/postagens/cadastropostagem/CadastroPostagem";
import CadastroTema from "./components/temas/cadastrotema/CadastroTema";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
    <Router>
      <Navbar />
      <div style={{ minHeight: "85vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/postagem" element={<ListaPostagem />} />
          <Route path='/cadastrarPostagem' element={<CadastroPostagem />} />
          <Route path='/editarPostagem/:id' element={<CadastroPostagem />} />
          <Route path='/apagarPostagem/:id' element={<DeletarPostagem />} />
          <Route path='/cadastrarTema' element={<CadastroTema />} />
          <Route path='/editarTema/:id' element={<CadastroTema />} />
          <Route path='/deletarTema/:id' element={<DeletarTema />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
