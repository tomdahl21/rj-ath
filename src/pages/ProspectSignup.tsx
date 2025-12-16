import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  InputLabel,
  Stepper,
  Step,
  StepLabel,
  Container,
  Grid,
  Divider,
} from '@mui/material';
import { ProspectFormData } from '../types';

const steps = [
  'General Information',
  'Business Mix',
  'Lending',
  'Review and Attestation',
  'Complete'
];

const stateOptions = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const ProspectSignup: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep] = useState(0); // Always show first step for demo
  const [formData, setFormData] = useState<ProspectFormData>({
    recruiter: 'Sofia Drakotor',
    isTeam: false,
    teamMembersCount: '',
    teamName: '',
    firstName: '',
    lastName: '',
    email: '',
    crdNumber: '',
    currentFirm: '',
    yearsAtFirm: '',
    yearsInIndustry: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value === 'true',
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    // For demo purposes, navigate to prospect dashboard
    navigate('/prospect/dashboard');
  };

  const handleSave = () => {
    // Show success message (for demo)
    alert('Progress saved successfully!');
  };

  const handleCancel = () => {
    navigate('/login');
  };

  const handleBrokerCheck = () => {
    window.open('https://brokercheck.finra.org/', '_blank');
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
              src="/images/Raymond_James_Financial-Logo.wine.png"
              alt="Raymond James"
              style={{ height: '32px' }}
            />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Advisor Information Request - ICD
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Progress Stepper */}
      <Box sx={{ backgroundColor: 'white', py: 3, px: 3, borderBottom: '1px solid #e0e0e0' }}>
        <Container maxWidth="lg">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <Paper elevation={2} sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, color: '#003768' }}>
            General Information
          </Typography>

          <Grid container spacing={4}>
            {/* Recruiter Selection */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Recruiter Selection
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Select Recruiter</InputLabel>
                <Select
                  value={formData.recruiter}
                  label="Select Recruiter"
                  onChange={(e) => handleSelectChange('recruiter', e.target.value)}
                >
                  <MenuItem value="Sofia Drakotor">Sofia Drakotor</MenuItem>
                  <MenuItem value="Greg Robinson">Greg Robinson</MenuItem>
                  <MenuItem value="Tommy Marsh">Tommy Marsh</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
            </Grid>

            {/* Team Information */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Team Information
              </Typography>
              <FormControl component="fieldset" sx={{ mb: 3 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Are you part of a team?
                </Typography>
                <RadioGroup
                  row
                  name="isTeam"
                  value={formData.isTeam.toString()}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>

              {formData.isTeam && (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="# of Financial Advisors"
                      name="teamMembersCount"
                      value={formData.teamMembersCount}
                      onChange={handleChange}
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Team Name"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              )}
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
            </Grid>

            {/* Personal Information */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Personal Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="FA First Name *"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="FA Last Name *"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="FA Personal Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                    <TextField
                      fullWidth
                      label="CRD Number *"
                      name="crdNumber"
                      value={formData.crdNumber}
                      onChange={handleChange}
                    />
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleBrokerCheck}
                      sx={{ 
                        borderColor: '#003768', 
                        color: '#003768',
                        whiteSpace: 'nowrap',
                        mb: 0.5
                      }}
                    >
                      BrokerCheck by FINRA
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
            </Grid>

            {/* Employment History */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Employment History
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Current Firm *"
                    name="currentFirm"
                    value={formData.currentFirm}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="How many years have you been with your current firm? *"
                    name="yearsAtFirm"
                    value={formData.yearsAtFirm}
                    onChange={handleChange}
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="How many years have you been in the industry? *"
                    name="yearsInIndustry"
                    value={formData.yearsInIndustry}
                    onChange={handleChange}
                    type="number"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
            </Grid>

            {/* Location */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Location
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="City *"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel>State *</InputLabel>
                    <Select
                      value={formData.state}
                      label="State *"
                      onChange={(e) => handleSelectChange('state', e.target.value)}
                    >
                      {stateOptions.map((state) => (
                        <MenuItem key={state} value={state}>{state}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Zip Code *"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Footer Actions */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 4,
              pt: 3,
              borderTop: '1px solid #e0e0e0',
            }}
          >
            <Button
              variant="outlined"
              onClick={handleCancel}
              sx={{ borderColor: '#666', color: '#666' }}
            >
              Cancel
            </Button>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                onClick={handleSave}
                sx={{ borderColor: '#003768', color: '#003768' }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  backgroundColor: '#003768',
                  '&:hover': { backgroundColor: '#002855' },
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ProspectSignup;