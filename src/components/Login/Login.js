import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Stack, Typography } from '@mui/material';
import AuthLogin from './AuthLogin';

const Login = () => {
  const handleLogin = (role) => {
    // Simulate login logic
    console.log('logged with the role', role);
    localStorage.setItem('Role', role);

    // Simulate redirection based on role
    switch (role) {
      case 'Admin':
        window.location.href = '/admin';
        break;
      case 'Test Engineer':
        window.location.href = '/test-engineer';
        break;
      case 'OEM Test Engineer':
        window.location.href = '/oem-test-engineer';
        break;
      case 'Cxo':
        window.location.href = '/cxo';
        break;
      default:
        break;
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Login</Typography>
          <Typography component={RouterLink} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
            Don&apos;t have an account?
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <AuthLogin onLogin={handleLogin} />
      </Grid>
    </Grid>
  );
};

export default Login;
