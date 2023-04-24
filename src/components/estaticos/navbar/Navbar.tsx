import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import useLocalStorage from "react-use-localstorage";

function Navbar() {
  const [token, setToken] = useLocalStorage('token')
  let history = useNavigate()

  function goLogout(){
    setToken('')
    alert('Usuario deslogado')
    history('/login')
  }

  return (
    <>
      {/* O que é sx={{ flexGrow: 1 }*/}
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Box display='flex' justifyContent='space-between' width='100%'>
              <Box display="flex" gap={3} alignItems="center">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{fontFamily:'cursive'}}>BlogPessoal</Typography>
                {/* Porquê está em component="div"?*/}
                <Link to='/home' className="text-decorator-none">
                <Box className="cursor">
                  <p style={{fontFamily:'cursive'}}>Home</p>
                </Box>
                </Link>
                <Link to='/postagem' className="text-decorator-none">
                <Box className="cursor">
                  <p style={{fontFamily:'cursive'}}>Postagens</p>
                </Box>
                </Link>
                <Link to='/temas' className="text-decorator-none">
                <Box className="cursor">
                  <p style={{fontFamily:'cursive'}}>Temas</p>
                </Box>
                </Link>
                <Link to='/formularioTema' className="text-decorator-none">
                <Box className="cursor">
                  <p style={{fontFamily:'cursive'}}>Cadastrar Tema</p>
                </Box>
                </Link>
              </Box>
              
              <Box onClick={goLogout}>
              <Button color="inherit" style={{fontFamily:'cursive', textDecoration:'none', color:'white'}}>Logout</Button>
              </Box>
              
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
