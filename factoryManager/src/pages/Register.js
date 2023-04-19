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
import { RegisterForm } from '../sections/auth/register';
import AuthSocial from '../sections/auth/AuthSocial';

import {images} from '../constants';
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
  padding:"20px 0px",
}));


// ----------------------------------------------------------------------

export default function Register() {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Register">
      <RootStyle>
        {/* <HeaderStyle>
          <Logo /> */}
          {/* {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              Already have an account? {''}
              <Link variant="subtitle2" component={RouterLink} to="/login">
                Login
              </Link>
            </Typography>
          )} */}
        {/* </HeaderStyle> */}

        {/* {mdUp && (
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Manage the job more effectively with Furnishi
            </Typography>
            <img alt="register" src="/static/illustrations/illustration_register.png" />
          </SectionStyle>
        )} */}

        <Container minWidth="sm" >
        <Card sx={{ mt :"5px !important", boxShadow: '0 3px 5px 2px rgba(40,79,73, .5)',border:"1px solid #DFE5E4 "
        , width:"550px",margin:'auto',height:"98vh"
        }}>
          <ContentStyle>
        
          <img src={images.furnishiLogo} alt="" height={120} width={120} style={{margin:'auto',borderRadius:20}} />
            <Typography variant="h4" gutterBottom sx={{textAlign:'center'}}>
              Get started.
            </Typography>

          

            <RegisterForm />
            <AuthSocial />
            <Typography align="center" sx={{ color: 'text.secondary', mt: 1 ,fontSize:12 }}>
              By registering, I agree to Furnishi&nbsp;
              <Link underline="always" color="text.primary" href="#" sx={{fontSize:12}}>
                Terms of Service&nbsp;
              </Link>
              {''}and{''}&nbsp;
              <Link underline="always" color="text.primary" href="#" sx={{fontSize:12}}>
                Privacy Policy
              </Link>
              .
            </Typography>

            {/* {!smUp && ( */}
              <Typography  sx={{ mt: 1, textAlign: 'center' ,fontSize:12 }}>
                Already have an account?{' '}
                <Link  to="/login" component={RouterLink}  sx={{fontSize:12}}>
                  Login
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
