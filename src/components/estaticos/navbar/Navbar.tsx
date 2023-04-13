import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <>
    {/* O que é sx={{ flexGrow: 1 }*/}
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.2 }}>
            BlogPessoal
          </Typography>
          {/* Porquê está em component="div"?*/}
          <Box component="div" sx={{ flexGrow: 0.1 }}>
            <p>Home</p>
          </Box>
          <Box component="div" sx={{ flexGrow: 0.1 }}>
            <p>Postagens</p>
          </Box>
          <Box component="div" sx={{ flexGrow: 0.1 }}>
            <p>Temas</p>
          </Box>
          <Box component="div" sx={{ flexGrow: 2 }}>
            <p>Cadastrar Tema</p>
          </Box>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default Navbar;
