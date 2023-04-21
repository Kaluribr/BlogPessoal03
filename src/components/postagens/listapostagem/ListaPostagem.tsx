import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Postagem } from '../../../models/Postagem';
import useLocalStorage from 'react-use-localstorage';
import { Link, useNavigate } from 'react-router-dom';
import { getAll } from '../../../service/Service';



function ListaPostagens() {

  const[postagem, setPostagem] = useState<Postagem[]>([])
  const[token, setToken] = useLocalStorage('token')
  const history = useNavigate()

  async function getAllPostagem(){
    await getAll('/postagem', setPostagem, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(()=> {
    getAllPostagem()
  }, [postagem.length])

  useEffect(() =>{
    if(token === ''){
      alert('Você precisa estar logado')
      history('/login')
    }
  })


  return (
    <>
    {postagem.map((postagem) => (
      <Box m={4}>
        <Card >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Titulo da postagem:
              {postagem.texto}
            </Typography>
            <Typography variant="h5" component="h2">
              texto da postagem
              {postagem.texto}
            </Typography>
            <Typography variant="body1" component="p">
              Tema da postagem
              {postagem.tema?.descricao}
            </Typography>
            
          </CardContent>
          <CardActions>
            <Link to={`/formularioPostagem/${postagem.id}`}>
            <Button color='primary' variant='contained' size="small">Editar</Button>
            </Link>
            <Link to={`/deletarPostagem/${postagem.id}`}>
            <Button color='secondary' variant='contained' size="small">Deletar</Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
      ))}
    </>
  )
}

export default ListaPostagens