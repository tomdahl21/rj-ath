import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Alert,
  Container,
  Grid,
} from '@mui/material';
import { mockLogin } from '../utils/auth';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberUsername: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rememberUsername' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = mockLogin(formData.email, formData.password);
      
      if (result.success) {
        // Navigate based on user type
        if (result.type === 'prospect') {
          navigate('/prospect/dashboard');
        } else if (result.type === 'advisor') {
          navigate('/advisor/dashboard');
        }
      } else {
        setError(result.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    navigate('/prospect/signup');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: '#003768',
          color: 'white',
          py: 2,
          px: 3,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <img
              src="/images/Raymond_James_Financial-Logo-WHT.png"
              alt="Raymond James"
              style={{ height: '21px' }}
            />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Advisor Onboarding
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="sm" sx={{ flex: 1, display: 'flex', alignItems: 'center', py: 4 }}>
        <Paper
          elevation={2}
          sx={{
            width: '100%',
            p: 4,
            borderRadius: 2,
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', fontWeight: 600 }}>
              Sign In
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="victor.irwyn@gmail.com"
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="rememberUsername"
                      checked={formData.rememberUsername}
                      onChange={handleChange}
                    />
                  }
                  label="Remember Username"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{
                    backgroundColor: '#003768',
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#002855',
                    },
                  }}
                >
                  {loading ? 'Signing In...' : 'SIGN IN'}
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    <Link href="#" sx={{ color: '#003768', textDecoration: 'none' }}>
                      Forgot Username?
                    </Link>
                    {' | '}
                    <Link href="#" sx={{ color: '#003768', textDecoration: 'none' }}>
                      Forgot Password?
                    </Link>
                    {' | '}
                    <Link href="#" sx={{ color: '#003768', textDecoration: 'none' }}>
                      Sign In Help
                    </Link>
                  </Typography>
                </Box>
              </Grid>

              {/* reCAPTCHA placeholder */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    border: '1px solid #ddd',
                    borderRadius: 1,
                    p: 2,
                    backgroundColor: '#f9f9f9',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    reCAPTCHA (Demo Mode)
                  </Typography>
                </Box>
              </Grid>

              {/* Sign Up CTA */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    textAlign: 'center',
                    mt: 3,
                    pt: 3,
                    borderTop: '1px solid #e0e0e0',
                  }}
                >
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Don't have an account?
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={handleSignUp}
                    sx={{
                      borderColor: '#003768',
                      color: '#003768',
                      '&:hover': {
                        borderColor: '#002855',
                        backgroundColor: 'rgba(0, 55, 104, 0.04)',
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Demo Credentials Helper */}
          <Box
            sx={{
              mt: 4,
              p: 2,
              backgroundColor: '#f0f9ff',
              borderRadius: 1,
              border: '1px solid #bfdbfe',
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Demo Credentials:
            </Typography>
            <Typography variant="body2">
              Prospect: prospect@test.com / ProspectDemo2024!
            </Typography>
            <Typography variant="body2">
              Advisor: advisor@test.com / AdvisorDemo2024!
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;