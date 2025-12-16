import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Container,
  Divider,
  Link,
} from '@mui/material';
import {
  Dashboard,
  Assignment,
  History,
  Facebook,
  VideoCall,
} from '@mui/icons-material';
import { mockProspectEvents, mockMilestones, mockResources } from '../data/mockEvents';
import { mockProspectTasks } from '../data/mockTasks';

const ProspectDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleStartAdvisorInfo = () => {
    navigate('/prospect/signup');
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: '#003768',
          color: 'white',
          py: 2,
          px: 3,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <img
                src="/images/Raymond_James_Financial-Logo.wine.png"
                alt="Raymond James"
                style={{ height: '32px' }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Advisor Transition Hub
              </Typography>
            </Box>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 0 }}>
        <Grid container spacing={0} sx={{ minHeight: 'calc(100vh - 80px)' }}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                backgroundColor: 'white',
                height: '100%',
                borderRight: '1px solid #e0e0e0',
                p: 3,
              }}
            >
              {/* User Profile Card */}
              <Card sx={{ mb: 3, boxShadow: 1 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: '#003768',
                      mx: 'auto',
                      mb: 2,
                      fontSize: '1.5rem',
                    }}
                  >
                    VI
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Victor Irwyn
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    victor.irwyn@gmail.com
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Target Join Date: 5/1/25
                  </Typography>
                </CardContent>
              </Card>

              {/* Navigation */}
              <List>
                <ListItemButton selected sx={{ borderRadius: 1, mb: 1 }}>
                  <Dashboard sx={{ mr: 2, color: '#003768' }} />
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
                <ListItemButton sx={{ borderRadius: 1, mb: 1 }}>
                  <Assignment sx={{ mr: 2 }} />
                  <ListItemText primary="My Tasks" />
                </ListItemButton>
                <ListItemButton sx={{ borderRadius: 1 }}>
                  <History sx={{ mr: 2 }} />
                  <ListItemText primary="History" />
                </ListItemButton>
              </List>
            </Box>
          </Grid>

          {/* Main Content Area */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, backgroundColor: 'white', height: '100%', overflow: 'auto' }}>
              {/* Welcome Banner */}
              <Card sx={{ mb: 4, bgcolor: '#e3f2fd', borderLeft: '4px solid #003768' }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#003768' }}>
                    Welcome, Victor!
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Your Advisor Info Request is ready to complete. Complete it to kick-off the next step in the process.
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={handleStartAdvisorInfo}
                    sx={{
                      backgroundColor: '#003768',
                      '&:hover': { backgroundColor: '#002855' },
                    }}
                  >
                    Start Advisor Info Request
                  </Button>
                </CardContent>
              </Card>

              {/* Recruitment Support Team */}
              <Card sx={{ mb: 4 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Recruitment Support Team
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: '#003768' }}>SD</Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Sofia Drakotor
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        sofia.dra...@raymondjames.com
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        555-555-5555
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* Milestone Timeline */}
              <Card sx={{ mb: 4 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                    Tasks
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {mockMilestones.map((milestone, index) => (
                      <Box key={milestone.id} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: milestone.status === 'complete' ? '#4caf50' : '#e0e0e0',
                            mr: 2,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: milestone.status === 'complete' ? '#4caf50' : '#666',
                            fontWeight: milestone.status === 'complete' ? 600 : 400,
                          }}
                        >
                          {milestone.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 'auto' }}>
                          {milestone.status === 'complete' ? 'Complete' : 'Not Started'}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>

              {/* Checklist Table */}
              <Card sx={{ mb: 4 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                    Checklist
                  </Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                          <TableCell>Task</TableCell>
                          <TableCell>Suggested Due Date</TableCell>
                          <TableCell>Next Steps</TableCell>
                          <TableCell>Assigned To</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {mockProspectTasks.map((task) => (
                          <TableRow key={task.id}>
                            <TableCell>{task.title}</TableCell>
                            <TableCell>{task.dueDate}</TableCell>
                            <TableCell>{task.nextSteps}</TableCell>
                            <TableCell>{task.assignedTo}</TableCell>
                            <TableCell>
                              {task.hasAction && (
                                <Button
                                  size="small"
                                  variant="contained"
                                  onClick={handleStartAdvisorInfo}
                                  sx={{
                                    backgroundColor: '#003768',
                                    fontSize: '0.75rem',
                                  }}
                                >
                                  Start
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>

              {/* Resources Grid */}
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                    Links & Resources / Training Related Content
                  </Typography>
                  <Grid container spacing={2}>
                    {mockResources.map((resource) => (
                      <Grid item xs={12} sm={6} md={4} key={resource.id}>
                        <Card variant="outlined" sx={{ textAlign: 'center', p: 2 }}>
                          <Typography variant="body2">{resource.title}</Typography>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                backgroundColor: 'white',
                height: '100%',
                borderLeft: '1px solid #e0e0e0',
                p: 3,
              }}
            >
              {/* What's Trending */}
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    What's Trending
                  </Typography>
                  
                  {/* Featured Advisor Profile */}
                  <Box sx={{ mb: 3, p: 2, backgroundColor: '#f8f9fa', borderRadius: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ width: 40, height: 40, mr: 2, bgcolor: '#003768' }}>
                        JD
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          John Doe
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Senior Advisor
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                      "Raymond James has provided me with the resources and support to grow my practice exponentially."
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Facebook sx={{ color: '#1877f2', fontSize: 20 }} />
                    <Link href="#" sx={{ textDecoration: 'none', fontSize: '0.875rem' }}>
                      Follow us on Facebook
                    </Link>
                  </Box>

                  <Typography variant="body2" color="text.secondary">
                    Stay connected for the latest Raymond James news and updates
                  </Typography>
                </CardContent>
              </Card>

              {/* Calendar Widget */}
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Calendar
                  </Typography>
                  
                  {/* Simple Calendar Header */}
                  <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 2, fontWeight: 600 }}>
                    March 2025
                  </Typography>
                  
                  {/* Highlighted Date */}
                  <Box
                    sx={{
                      p: 2,
                      backgroundColor: '#e3f2fd',
                      borderRadius: 1,
                      border: '1px solid #2196f3',
                      mb: 2,
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1976d2' }}>
                      March 8, 2025
                    </Typography>
                  </Box>

                  {/* Upcoming Event */}
                  {mockProspectEvents.map((event) => (
                    <Box key={event.id} sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        {event.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Attendees: {event.attendees.join(', ')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Time: {event.time}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {event.recruiter}
                      </Typography>
                      <Button
                        size="small"
                        startIcon={<VideoCall />}
                        sx={{ color: '#003768' }}
                      >
                        Join Zoom
                      </Button>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProspectDashboard;