import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import Logo from '../components/Logo';
// sections
import { LoginForm } from '../sections/auth/login';
import AuthSocial from '../sections/auth/AuthSocial';
import { images } from '../constants';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
   
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '520px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  // padding: theme.spacing(12, 0),
  padding:"20px 0px"
  
}));

// ----------------------------------------------------------------------

export default function Login() {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (

    <Page title="Login">
      <RootStyle>
        {/* <HeaderStyle> */}
          {/* <Logo /> */}

          {/* {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              Don’t have an account? {''}
              <Link variant="subtitle2" component={RouterLink} to="/register">
                Get started
              </Link>
            </Typography>
          )} */}
        {/* </HeaderStyle> */}

        {/* {mdUp && (
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/static/illustrations/illustration_login.png" alt="login" />
          </SectionStyle>
        )} */}

        <Container maxWidth="sm" >
        <Card sx={{mt:1 , boxShadow: '0 3px 5px 2px rgba(40,79,73, .5)',border:"1px solid #DFE5E4 "}} >
          <ContentStyle >
            <img src={images.furnishiLogo} alt="" height={120} width={120} style={{margin:'auto' ,borderRadius:20}} />
            <Typography variant="h3" gutterBottom sx={{textAlign:'center', fontSize:14 ,mt:1}}>
              Sign in to Furnishi Services
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 2, textAlign:'center',fontSize:12 }}>Enter your details below.</Typography>

           

            <LoginForm />
             
            <AuthSocial />
            {/* {!smUp && ( */}
              <Typography  align="center" sx={{ mt: 1 ,fontSize:12 }}>
                Don’t have an account?{' '}
                <Link sx={{fontSize:12}} component={RouterLink} to="/register">
                  Get started
                </Link>
              </Typography>
            {/* )} */}
          </ContentStyle>
          </Card>
        </Container>
      </RootStyle>
    </Page>
  );
}
