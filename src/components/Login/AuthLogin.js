// AuthLogin.jsx

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link as RouterLink } from 'react-router-dom';
import { Divider, FormControlLabel, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Stack, Typography, Checkbox } from '@mui/material';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Formik } from 'formik';

const AuthLogin = ({ onLogin }) => {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
        try {
          const dummyUsers = [
            { username: 'admin', password: 'admin123', role: 'Admin' },
            { username: 'testengineer', password: 'test123', role: 'Test Engineer' },
            { username: 'oemengineer', password: 'oem123', role: 'OEM Test Engineer' },
            { username: 'cxo', password: 'cxo123', role: 'Cxo' },
          ];

          const user = dummyUsers.find((u) => u.username === values.username && u.password === values.password);

          if (user) {
            onLogin(user.role);
          } else {
            setStatus({ success: false });
            setErrors({ submit: 'Invalid credentials' });
          }

          setSubmitting(false);
        } catch (err) {
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="username-login">Username</InputLabel>
                <OutlinedInput
                  id="username-login"
                  type="text"
                  value={values.username}
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter username"
                  fullWidth
                  error={Boolean(touched.username && errors.username)}
                />
                {touched.username && errors.username && (
                  <FormHelperText error id="standard-weight-helper-text-username-login">
                    {errors.username}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="password-login">Password</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  id="password-login"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Enter password"
                />
                {touched.password && errors.password && (
                  <FormHelperText error id="standard-weight-helper-text-password-login">
                    {errors.password}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>

            <Grid item xs={12} sx={{ mt: -1 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="primary"
                      size="small"
                    />
                  }
                  label={<Typography variant="h6">Keep me sign in</Typography>}
                />
                <Link variant="h6" component={RouterLink} to="" color="text.primary">
                  Forgot Password?
                </Link>
              </Stack>
            </Grid>
            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Grid>
            {/* <Grid item xs={12}>
              <Divider>
                <Typography variant="caption"> Login with</Typography>
              </Divider>
            </Grid> */}
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default AuthLogin;
