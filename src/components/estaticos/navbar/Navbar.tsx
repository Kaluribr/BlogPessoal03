import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
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
                <Box className="cursor">
                  <p style={{fontFamily:'cursive'}}>Home</p>
                </Box>
                <Box className="cursor">
                  <p style={{fontFamily:'cursive'}}>Postagens</p>
                </Box>
                <Box className="cursor">
                  <p style={{fontFamily:'cursive'}}>Temas</p>
                </Box>
                <Box className="cursor">
                  <p style={{fontFamily:'cursive'}}>Cadastrar Tema</p>
                </Box>
              </Box>
              <Link to='./Login'>
              <Box>
              <Button color="inherit" style={{fontFamily:'cursive', textDecoration:'none', color:'white'}}>Logout</Button>
              </Box>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
