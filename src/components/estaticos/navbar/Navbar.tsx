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
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";

function Navbar() {
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );
  let history = useNavigate()
  const dispatch = useDispatch();

  function goLogout(){
    dispatch(addToken(''));
    alert('Usuario deslogado')
    history('/login')
  }

  var navbarConponent;

  if(token !== ""){
    navbarConponent = 
    <Box >
    <AppBar position="static" className="navbar">
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
            <Typography variant="h6" style={{fontFamily:'cursive'}}>InterMeme</Typography>
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
            <Link to='/cadastrarTema' className="text-decorator-none">
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
  }


  return (
    <>
      {/* O que é sx={{ flexGrow: 1 }*/}
        {navbarConponent}
    </>
  );
}

export default Navbar;
