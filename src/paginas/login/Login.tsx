import React, { useState, useEffect, ChangeEvent } from "react";
import { login } from "../../service/Service";
import "./Login.css";
import { Grid, Box, TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link, useNavigate, Navigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";

function Login() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token != "") {
      dispatch(addToken(token))
      history("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login("/usuarios/logar", usuarioLogin, setToken);
      alert("Usuário logado com sucesso!");
    } catch (error) {
      alert("Dados do usuário inconsistentes. Erro ao logar!");
    }
  }

  return (
    <>
      <Grid container alignItems={"center"} className="bc">
        <Grid item xs={12} justifyContent="center">
          <Box display="flex" justifyContent={"center"}>
            <Grid item xs={3} className="formu">
              <form onSubmit={onSubmit} className="formu">
                <Typography
                  variant="h3"
                  align="center"
                  gutterBottom
                  /* gutterBottom é uma Margin inferior */
                  fontWeight="bold"
                >
                  Entrar
                </Typography>
                <TextField
                  defaultValue={usuarioLogin.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                  name="usuario"
                  variant="outlined"
                  label="Usuário"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  defaultValue={usuarioLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                  type="password"
                  name="senha"
                  variant="outlined"
                  label="Senha"
                  margin="normal"
                  fullWidth
                />
                <Box marginY={2}>
                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    fullWidth
                    className="btnlogar"
                  >
                    Logar
                  </Button>
                </Box>
              </form>
              <hr />
              <Typography marginTop={2} align="center" variant="body1">
                Ainda não tem uma conta?
                <Link to="/CadastroUsuario" className="linkLogin">
                  Cadastre-se aqui
                </Link>
              </Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid xs={6} className="imagemLogin"></Grid>
      </Grid>
    </>
  );
}

export default Login;
