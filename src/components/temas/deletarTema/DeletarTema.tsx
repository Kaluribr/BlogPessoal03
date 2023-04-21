import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import './DeletarTema.css'

function DeletarTema(){
    <>
    <Box>
        <Card variant='outlined'>
            <CardContent>
                <Box justifyContent="center">
                    <Typography color='textSecondary' gutterBottom>
                        Deseja deletar o Tema:
                    </Typography>
                    <Typography>
                        Descricao do tema
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Box display='flex' justifyContent='start' ml={1.0} mb={2}>
                    <Box mx={2}>
                        <Button variant="contained" className="marginLeft" size="large" color="primary">
                            sim
                        </Button>
                    </Box>
                    <Box mx={2}>
                        <Button variant="contained" size="large" color="secondary">
                            Nao
                        </Button>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    </Box>
    </>
}

export default DeletarTema;