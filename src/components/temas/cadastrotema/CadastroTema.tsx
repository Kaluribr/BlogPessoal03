import React from 'react'
import { Container, TextField, Typography } from '@material-ui/core';
import './CadastroTema.css'
import { Button } from '@mui/material';



function CadastroTema() {
    return(
        <Container maxWidth='sm' className='topo'>
            <form>
                <Typography variant='h3' color='textSecondary' component='h1' align='center'>Formulario</Typography>
                <TextField value='' id='descricao' label="descricao" variant='outlined' name='descricao'/>
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;