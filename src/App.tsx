import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Login from './pages/Login';
import ProspectSignup from './pages/ProspectSignup';
import ProspectDashboard from './pages/ProspectDashboard';
import AdvisorDashboard from './pages/AdvisorDashboard';
import TaskDetail from './pages/TaskDetail';

// Raymond James theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#003768', // Raymond James navy blue
    },
    secondary: {
      main: '#0066cc', // Raymond James blue
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Helvetica Neue", Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/prospect/signup" element={<ProspectSignup />} />
          <Route path="/prospect/dashboard" element={<ProspectDashboard />} />
          <Route path="/advisor/dashboard" element={<AdvisorDashboard />} />
          <Route path="/advisor/task/:id" element={<TaskDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;