import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar (){
    return (
        <>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{cursor:'pointer'}}>
            BlogPessoal
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{cursor:'pointer'}}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{cursor:'pointer'}}>
            postagens
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{cursor:'pointer'}}>
            Temas
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{cursor:'pointer'}}>
            Cadastrar tema
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{cursor:'pointer'}}>
            Logout
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </>
    )
}

export default Navbar;