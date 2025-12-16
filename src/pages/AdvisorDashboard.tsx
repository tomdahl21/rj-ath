import React, { useState } from 'react';
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
  TextField,
  LinearProgress,
  IconButton,
  Menu,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import {
  Dashboard,
  Assignment,
  History,
  Search,
  MoreVert,
  VideoCall,
} from '@mui/icons-material';
import { mockAdvisorTasks } from '../data/mockTasks';
import { mockAdvisorEvents } from '../data/mockEvents';

const AdvisorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const handleTaskClick = (taskId: string) => {
    navigate(`/advisor/task/${taskId}`);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, taskId: string) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setSelectedTask(taskId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTask(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const filteredTasks = mockAdvisorTasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.assignedTo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'overdue': return 'error';
      case 'due-today': return 'warning';
      case 'in-progress': return 'info';
      case 'complete': return 'success';
      default: return 'default';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'overdue': return 'Overdue';
      case 'due-today': return 'Due Today';
      case 'in-progress': return 'In Progress';
      case 'complete': return 'Complete';
      case 'not-started': return 'Not Started';
      default: return status;
    }
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
                    Your Transition Form is ready to review. Complete it to kick-off the next step in the process.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#003768',
                      '&:hover': { backgroundColor: '#002855' },
                    }}
                  >
                    Start Transition Form
                  </Button>
                </CardContent>
              </Card>

              {/* Transition Support Team */}
              <Card sx={{ mb: 4 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Raymond James Transition Support Team
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

              {/* Tasks Section */}
              <Card sx={{ mb: 4 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Tasks
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      25 Tasks
                    </Typography>
                  </Box>

                  {/* Overall Progress */}
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Overall Progress
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        20% (10 of 50 Tasks)
                      </Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={20} sx={{ height: 8, borderRadius: 4 }} />
                  </Box>

                  {/* Search Bar */}
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Find"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ mb: 3 }}
                  />

                  {/* Task Table */}
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                          <TableCell>Status</TableCell>
                          <TableCell>Due Date</TableCell>
                          <TableCell>Task Title</TableCell>
                          <TableCell>Assigned To</TableCell>
                          <TableCell>Owner</TableCell>
                          <TableCell>Category</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {filteredTasks.map((task) => (
                          <TableRow
                            key={task.id}
                            hover
                            sx={{ cursor: 'pointer' }}
                            onClick={() => handleTaskClick(task.id)}
                          >
                            <TableCell>
                              <Chip
                                label={getStatusLabel(task.status)}
                                color={getStatusColor(task.status) as any}
                                size="small"
                              />
                            </TableCell>
                            <TableCell>{task.dueDate}</TableCell>
                            <TableCell>
                              <Typography
                                variant="body2"
                                sx={{ color: '#003768', textDecoration: 'none', fontWeight: 500 }}
                              >
                                {task.title}
                              </Typography>
                            </TableCell>
                            <TableCell>{task.assignedTo}</TableCell>
                            <TableCell>{task.owner}</TableCell>
                            <TableCell>{task.category}</TableCell>
                            <TableCell>
                              <IconButton
                                size="small"
                                onClick={(e) => handleMenuOpen(e, task.id)}
                              >
                                <MoreVert />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
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
                  {mockAdvisorEvents.map((event) => (
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
                        {event.coordinator}
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

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>View Details</MenuItem>
        <MenuItem onClick={handleMenuClose}>Edit Task</MenuItem>
        <MenuItem onClick={handleMenuClose}>Mark Complete</MenuItem>
        <MenuItem onClick={handleMenuClose}>Reassign</MenuItem>
      </Menu>
    </Box>
  );
};

export default AdvisorDashboard;