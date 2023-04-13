import React from 'react'
import "./Login.css"
import { Grid, Box, TextField, Button} from '@mui/material'
import Typography from '@mui/material/Typography';

function Login() {
  return (
    <Grid container alignItems='center'>
        <Grid xs={6} justifyContent='center'>
            <Box display='flex' justifyContent='center'>
                <form>
                    <Typography>Entrar</Typography>
                    <TextField variant='outlined' label='usuario'fullWidth/>
                    <TextField variant='outlined' label='senha'fullWidth/>
                    <Button variant='contained' color='primary'>Logar</Button>
                </form>
            </Box>
        </Grid>
        <Grid xs={6} className='imagemLogin'></Grid>
    </Grid>
  )
}

export default Login