import { Grid, Box, Typography, Button, } from "@material-ui/core";
import "./Home.css";
import TabPostagens from "../../components/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modelPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Home() {

  let history = useNavigate();
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );

  useEffect(() => {
    if(token == ""){
      toast.info('Voce precisa estar logado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      })
      history('/login')
    }
  }, [token])

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography variant="h3" gutterBottom color="textPrimary" component='h3' align="center" className="titulo">Seja bem vindo (a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component='h3' align="center" className="titulo">expresse aqui os seus pensamentos e opniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
              <Box marginRight={1}>
              <ModalPostagem/>
              </Box>
              <Link to='/postagem'>
              <Button variant="outlined" className="botao">Ver Postagens</Button>
              </Link>
          </Box>
        </Grid>
        <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
          <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px"/>
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagens/>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
