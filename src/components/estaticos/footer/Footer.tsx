import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function Footer() {

  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );

  var footerComponent;

  if(token !== ''){
      footerComponent = <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display={"flex"}
        alignItems="center"
        style={{ backgroundColor: "#3f51b5", height: "120px" }}
        width={"100%"}
        justifyContent={"space-around"}
      >
        <Box>
          <Box
            paddingTop={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              style={{ color: "white" }}
            >
              Siga-nos nas redes sociais
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <a
              href="https://www.facebook.com/"
              target="_blank"
            >
              <FacebookIcon style={{ fontSize: 60, color: "white" }} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
            >
              <InstagramIcon style={{ fontSize: 60, color: "white" }} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
            </a>
          </Box>
        </Box>
        <Box>
          <Box paddingTop={1}>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              style={{ color: "white" }}
              component={"span"}
            >
              © 2023 Copyright Danilo Moraes
            </Typography>

            <a target="_blank" href="https://brasil.generation.org">
              <Typography
                variant="h5"
                gutterBottom
                style={{ color: "white" }}
                align="center"
                component={"span"}
              >
              </Typography>
            </a>
          </Box>
        </Box>
      </Box>
    </Grid>
  }

  return (
    <>
      {footerComponent}
    </>
  );
}

export default Footer;
