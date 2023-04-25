import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import  Tema  from '../../../models/Tema';
import { buscaId, post, put } from '../../../service/Service';

function CadastroTema() {
    const history = useNavigate();
    const [token, setToken] = useLocalStorage('token');
  
    const {id} = useParams<{id: string}>()
  
    const [tema, setTema] = useState<Tema>({
      id: 0,
      descricao: '',
    });
  
    function updateModel(event: ChangeEvent<HTMLInputElement>) {
      setTema({
        ...tema,
        [event.target.name]: event.target.value,
      });
    }
  
    async function getTemaById(id: string) {
      await buscaId(`/temas/${id}`, setTema, {
        headers: {
          Authorization: token
        }
      })
    }
  
    useEffect(() => {
      if (id !== undefined){
        getTemaById(id)
      }
    })
  
    useEffect(() => {
      if (token === '') {
        alert('Sem token não né meu bom');
        history('/login');
      } 
    }, []);
  
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
      event.preventDefault();
  
      if(id !== undefined){
        try {
          await put('/temas', tema, setTema, {
            headers: {
              Authorization: token,
            },
          });
          alert('Tema atualizado com sucesso');
          history('/temas')
        } catch (error) {
          alert('Deu ruim');
        }
      } else {
        try {
          await post('/temas', tema, setTema, {
            headers: {
              Authorization: token,
            },
          });
          alert('Tema cadastrado com sucesso');
          history('/temas')
        } catch (error) {
          alert('Deu ruim');
        }
      }
    }
  
    
  
    return (
      <>
        <Grid container justifyContent={'center'} mt={4}>
          <Grid item xs={6}>
            <Typography
              align="center"
              variant="h3"
              gutterBottom
              fontWeight={'bold'}
            >
              {/* if ternário */}
              {tema.id !== 0 ? 'Editar tema' : 'Cadastrar tema'}
            </Typography>
            <form onSubmit={onSubmit}>
              <Box display="flex" flexDirection={'column'} gap={2}>
                <TextField
                  label="Descrição do tema"
                  name="descricao"
                  value={tema.descricao}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                  }
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={tema.descricao.length < 3}
                >
                  Cadastrar
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </>
    );
  }

export default CadastroTema;