import { Container, TextField, Typography } from "@mui/material";

function CadastroPostagem(){
    return(
        <Container maxWidth='sm' className="topo">
            <form>
                <Typography variant="h3" color="textSecondary" component='h1' align="center" >Formulario</Typography>
                <TextField value='' id="titulo" label='titulo' variant="outlined" name="titulo"></TextField>
            </form>
        </Container>
    )
}