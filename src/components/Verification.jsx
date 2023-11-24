import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { confirmCode } from '../api';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import {useLocation} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Verification(state) {
  const location = useLocation();
  const navigate = useNavigate();
  const loginData = location.state;
    console.log(location.state);
  if(!state)
  {
    return(<Container>
              <Typography variant='h1'>
                Ingrese los datos correctamente
              </Typography>
          </Container>);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    const userData = {email: loginData.email,
    password: loginData.password, verificationCode: data.get('verification_code')}
    console.log(userData);
    const response = async () =>{const res = await confirmCode(userData);
      console.log(res);
      if(res.login) {
        console.log("Se a iniciado sesion");
        let state = userData;
        navigate('/profile',
        {state})
      }}
    response()
    
  };

  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              iniciar sesion
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="verification_code"
                label="verification_code"
                type="password"
                id="verification_code"
                autoComplete="current-password"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar sesion
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Verification