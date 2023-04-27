import React, { ChangeEvent, useEffect, useState } from "react";
import "./CadastroUsuario.css";
import Usuario from "../../models/Usuario";
import { cadastroUsuario } from "../../service/Service";
import { Box, Button, Grid, TextField } from "@material-ui/core";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CadastroUsuario() {
  let history = useNavigate();

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  const [usuarioResult, setUsuarioResult] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (confirmarSenha === usuario.senha) {
      try {
        await cadastroUsuario("/usuarios/cadastrar", usuario, setUsuarioResult);
        toast.success('Usuário cadastrado com sucesso', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
        })
      } catch (error) {
        toast.error('Por favor, verifique os campos', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
        })
      }
    } else {
      alert("Dados inconsistentes. Favor verificar as informações de cadastro");
      setConfirmarSenha("");
      setUsuario({
        ...usuario,
        senha: "",
      });
    }
  }


  useEffect(() => {
    if (usuarioResult.id !== 0) {
      history("/login");
    }
  }, [usuarioResult]);

  function back() {
    history("/login");
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              /* gutterBottom é uma Margin inferior */
              fontWeight="bold"
            >
              Cadastrar
            </Typography>
            <TextField
              id="nome"
              variant="outlined"
              name="nome"
              value={usuario.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              label="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              id="usuario"
              name="usuario"
              variant="outlined"
              value={usuario.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              label="usuario"
              margin="normal"
              required
              type="email"
              fullWidth
            />
            <TextField
              variant="outlined"
              name="foto"
              value={usuario.foto}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              label="Foto (URL)"
              margin="normal"
              fullWidth
            />
            <TextField
              type='password'
              id="senha"
              name='senha'
              value={usuario.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
              variant="outlined"
              label="senha"
              margin="normal"
              fullWidth
            />
            <TextField
              id="confirmarSenha"
              type='password'
              name='confirmarSenha'
              value={confirmarSenha}
              onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)}
              variant="outlined"
              label="confirmarSenha"
              margin="normal"
              fullWidth
            />
            <Box
              marginY={2}
              style={{ display: "flex", justifyContent: "center" }}
            >
                <Button
                  size="large"
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                  className="btnCadastrar"
                >
                  Cadastrar
                </Button>
                <Link
                to="/login"
                style={{ textDecoration: "none" }}
                >
                <Button
                  size="large"
                  fullWidth
                  variant="contained"
                  color="secondary"
                >
                  Cancelar
                </Button>
              </Link>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
