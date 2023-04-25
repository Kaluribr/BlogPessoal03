import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import Postagem  from '../../../models/Postagem';
import useLocalStorage from 'react-use-localstorage';
import { Link, useNavigate } from 'react-router-dom';
import { getAll } from '../../../service/Service';



function ListaPostagens() {

  const[postagens, setPostagens] = useState<Postagem[]>([])
  const[token, setToken] = useLocalStorage('token')
  const history = useNavigate()

  async function getAllPostagens(){
    await getAll('/postagens', setPostagens, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(()=> {
    getAllPostagens()
  }, [postagens.length])

  useEffect(() =>{
    if(token === ''){
      alert('Você precisa estar logado')
      history('/login')
    }
  })


  return (
    <>
    {postagens.map((postagem) => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="h5" component="h2">
                  {postagem.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {postagem.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {postagem.tema?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/editarPostagem/${postagem.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagens;