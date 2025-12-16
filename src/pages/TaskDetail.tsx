import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Container,
  Chip,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Paper,
} from '@mui/material';
import {
  Close,
  AttachFile,
  Visibility,
  Settings,
  Search,
  Help,
} from '@mui/icons-material';
import { mockTaskDetail } from '../data/mockTasks';

const TaskDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const [formName, setFormName] = useState(mockTaskDetail.form.name);

  const handleClose = () => {
    navigate('/advisor/dashboard');
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      // In a real app, this would add to the task history
      setComment('');
      alert('Comment added successfully');
    }
  };

  const handleAction = (action: string) => {
    alert(`${action} action triggered (demo mode)`);
  };

  const actionButtons = [
    { label: 'Nudge Advisor', category: 'Communication & Collaboration' },
    { label: 'Schedule Appointment', category: 'Communication & Collaboration' },
    { label: 'Log a Call or Meeting', category: 'Communication & Collaboration' },
    { label: 'Set Reminder', category: 'Communication & Collaboration' },
    { label: 'Set Override', category: 'Miscellaneous' },
    { label: 'Set Special Circumstance', category: 'Miscellaneous' },
    { label: 'Reassign Task', category: 'Miscellaneous' },
    { label: 'Mark as Complete', category: 'Miscellaneous' },
  ];

  const communicationActions = actionButtons.filter(a => a.category === 'Communication & Collaboration');
  const miscActions = actionButtons.filter(a => a.category === 'Miscellaneous');

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
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Advisor Transition Hub
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <TextField
                size="small"
                placeholder="Search..."
                InputProps={{
                  startAdornment: <Search sx={{ color: 'white', mr: 1 }} />,
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                  },
                }}
              />
              <IconButton color="inherit">
                <Help />
              </IconButton>
              <IconButton color="inherit">
                <Settings />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Task Header Bar */}
      <Box sx={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0', py: 2, px: 3 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Task: {mockTaskDetail.title}
            </Typography>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Metadata Row */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 2, px: 3, borderBottom: '1px solid #e0e0e0' }}>
        <Container maxWidth="xl">
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Chip label={mockTaskDetail.status} color="default" size="small" />
            </Grid>
            <Grid item>
              <Chip label={mockTaskDetail.priority} color="warning" size="small" />
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Task ID: <strong>{mockTaskDetail.id}</strong>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Due Date: <strong>{mockTaskDetail.dueDate}</strong>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Assigned To: <strong>{mockTaskDetail.assignedTo}</strong>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Category: <strong>{mockTaskDetail.category}</strong>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Task Owner: <strong>{mockTaskDetail.taskOwner}</strong>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Transition Type: <strong>{mockTaskDetail.transitionType}</strong>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Phase: <strong>{mockTaskDetail.phase}</strong>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Grid container spacing={3}>
          {/* Left Sidebar - Actions */}
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Communication & Collaboration
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {communicationActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      size="small"
                      onClick={() => handleAction(action.label)}
                      sx={{ justifyContent: 'flex-start' }}
                    >
                      {action.label}
                    </Button>
                  ))}
                </Box>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Miscellaneous
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {miscActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      size="small"
                      onClick={() => handleAction(action.label)}
                      sx={{ justifyContent: 'flex-start' }}
                    >
                      {action.label}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Center Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Task Description */}
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Task Description
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {mockTaskDetail.description}
                  </Typography>
                </CardContent>
              </Card>

              {/* Instructions */}
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Instructions
                  </Typography>
                  <Box component="ol" sx={{ pl: 2 }}>
                    {mockTaskDetail.instructions.map((instruction, index) => (
                      <Typography key={index} component="li" variant="body1" paragraph>
                        {instruction}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>

              {/* Send Form to Advisor */}
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Send form to Advisor
                  </Typography>
                  
                  <TextField
                    fullWidth
                    label="Form Name"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    sx={{ mb: 2 }}
                  />

                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Button
                      variant="outlined"
                      startIcon={<Visibility />}
                      onClick={() => handleAction('View Form')}
                    >
                      View Form
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<AttachFile />}
                      onClick={() => handleAction('Attach File')}
                    >
                      Attach File
                    </Button>
                  </Box>

                  <Button
                    variant="contained"
                    disabled
                    sx={{ backgroundColor: '#ccc' }}
                  >
                    Send Form
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Task History and Notes */}
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Task History and Notes
                  </Typography>
                  
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    placeholder="New Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleAddComment}
                    sx={{ backgroundColor: '#003768', mb: 2 }}
                  >
                    Add
                  </Button>

                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    No history entries yet.
                  </Typography>
                </CardContent>
              </Card>

              {/* Reminders & Alerts */}
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Reminders & Alerts
                    </Typography>
                    <Button size="small" sx={{ color: '#003768' }}>
                      View All
                    </Button>
                  </Box>
                  
                  <List dense>
                    {mockTaskDetail.reminders.map((reminder) => (
                      <ListItem
                        key={reminder.id}
                        sx={{ px: 0 }}
                        secondaryAction={
                          <IconButton size="small">
                            <Close fontSize="small" />
                          </IconButton>
                        }
                      >
                        <ListItemText
                          primary={reminder.text}
                          secondary={reminder.date}
                          primaryTypographyProps={{ variant: 'body2' }}
                          secondaryTypographyProps={{ variant: 'caption' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>

              {/* Links and Resources */}
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Links and Resources
                    </Typography>
                    <Button size="small" sx={{ color: '#003768' }}>
                      View All
                    </Button>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    No resources available.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TaskDetail;