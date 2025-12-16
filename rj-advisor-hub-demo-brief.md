# Raymond James Advisor Transition Hub - Demo Application
## Technical Brief (Simplified Scope)

---

## Project Overview

**Objective**: Build a streamlined demo application showcasing two distinct user journeys through the Raymond James Advisor Transition Hub - one for prospective advisors signing up, and one for existing advisors managing their transition tasks.

**Scope**: 6 screens total (1 shared login, 5 unique screens)
**Timeline**: 2-3 days for full implementation
**Purpose**: Client demonstration and stakeholder presentation

---

## User Flows

### Flow 1: Prospective Advisor Journey
**User Type**: New prospect exploring Raymond James

1. **Login/Signup Page** - Landing page with login form + "Sign Up" CTA
2. **Prospect Signup Form** - Multi-step information gathering form (Advisor Information Request)
3. **Prospect Dashboard** - Initial welcome dashboard with tasks and resources

### Flow 2: Existing Advisor Journey  
**User Type**: Advisor in active transition process

1. **Login Page** - Same page as Flow 1, but user logs in instead of signing up
2. **Advisor Dashboard** - Task management dashboard showing transition progress
3. **Task Detail View** - Detailed view of individual task with actions and history

---

## Screen Specifications

### Screen 1: Login/Signup (Shared)
**File**: `rj01-signin-signup.png`

**Components**:
- Raymond James header with "Advisor Onboarding" title
- Centered login form with:
  - Email input (placeholder: "victor.irwyn@gmail.com")
  - Password input (masked)
  - "Forgot Username?" link
  - "Remember Username" checkbox
  - "Forgot Password?" link
  - "Sign In Help" link
  - reCAPTCHA widget
  - "SIGN IN" button
- **NEW REQUIREMENT**: Add "Don't have an account? Sign Up" CTA below login form

**Design Notes**:
- Clean, professional financial services aesthetic
- Navy blue header (#003768)
- Light gray background
- Centered white card with form
- Conservative, trust-building design language

**Routing Logic** (Mock):
```javascript
// On Sign In button click:
if (email === 'prospect@test.com') {
  navigate('/prospect/dashboard')
} else if (email === 'advisor@test.com') {
  navigate('/advisor/dashboard')
}

// On Sign Up CTA click:
navigate('/prospect/signup')
```

---

### Screen 2: Prospect Signup Form
**File**: `rj02-prospect-signup.png`

**Components**:

**Header**: 
- "Advisor Information Request - ICD" title
- Progress stepper showing 5 steps:
  - General Information (active/current)
  - Business Mix
  - Lending
  - Review and Attestation
  - Complete

**Form Sections**:

1. **Recruiter Selection**
   - Dropdown: "Sofia Drakotor" (pre-selected)

2. **Team Information**
   - Radio buttons: "Are you part of a team?" (Yes/No)
   - Conditional fields: "# of Financial Advisors", "Team Name"

3. **Personal Information**
   - FA First Name*
   - FA Last Name*
   - FA Personal Email
   - CRD Number* (with "BrokerCheck by FINRA" button)

4. **Employment History**
   - Current Firm*
   - How many years have you been with your current firm?*
   - How many years have you been in the industry?*

5. **Location**
   - City*
   - State* (dropdown)
   - Zip Code*

**Footer Actions**:
- "Cancel" button (left)
- "Save" button (bottom right)
- "Next" button (bottom right, primary)

**Design Notes**:
- Multi-step form with clear progress indication
- Required fields marked with asterisk
- Clean field layout with logical grouping
- Validate before allowing "Next"

**Data to Collect** (for demo purposes):
```javascript
const formData = {
  recruiter: 'Sofia Drakotor',
  isTeam: false,
  firstName: '',
  lastName: '',
  email: '',
  crdNumber: '',
  currentFirm: '',
  yearsAtFirm: '',
  yearsInIndustry: '',
  city: '',
  state: '',
  zipCode: ''
}
```

**Routing**:
- "Next" → Navigate to `/prospect/dashboard` (for demo, assume form is complete)
- "Save" → Show toast "Progress saved", stay on page
- "Cancel" → Navigate back to `/login`

---

### Screen 3: Prospect Dashboard
**File**: `rj03-prospect-home.png`

**Layout**: Three-column layout with left sidebar navigation

**Left Sidebar** (200px width):
- User profile card:
  - Avatar image
  - "Victor Irwyn"
  - "victor.irwyn@gmail.com"
  - Target Join Date: 5/1/25
- Navigation:
  - Dashboard (active)
  - My Tasks
  - History

**Main Content Area** (Center):

1. **Welcome Banner**
   - "Welcome, Victor!"
   - Message: "Your Advisor Info Request is ready to complete. Complete it to kick-off the next step in the process."
   - Button: "Start Advisor Info Request"

2. **Recruitment Support Team Card**
   - Contact info for Sofia Drakotor
   - Email: sofia.dra...@raymondjames.com
   - Phone: 555-555-5555

3. **Tasks Section**
   - Timeline showing 5 milestones:
     - Advisor Info (Not Started)
     - Home Office Visit (Not Started)
     - Financial Benefits (Not Started)
     - Offer Letter (Not Started)
     - Commit (Not Started)

4. **Checklist**
   - Table with columns: Task | Suggested Due Date | Next Steps | Assigned To | Actions
   - Sample tasks:
     - "Some Text" items (generic placeholders)
     - "Advisor Info Request Form" with "Start" button
   - All assigned to "Victor Irwyn, Greg Robinson"
   - Due dates: 06/01/2025

5. **Links & Resources / Training Related Content**
   - Grid of resource cards (6 cards total)
   - Each showing: "Raymond90 Sales Deck", "Engagement scores kit", "Sales scores kit"

**Right Sidebar** (300px width):

1. **What's Trending**
   - Featured advisor profiles with quotes
   - Social media links (Facebook)
   - Raymond James promotional content

2. **Calendar Widget**
   - March 2025 calendar
   - Highlighted date: March 8, 2025
   - Upcoming event: "Virtual Home Office Visit"
     - Attendees: Victor Irwyn, Greg Robinson
     - Time: 8:00 - 9:00 AM
     - Join Zoom link

**Design Notes**:
- Professional dashboard layout
- Clear information hierarchy
- Task-oriented design with actionable CTAs
- Calendar integration for upcoming milestones

---

### Screen 4: Advisor Dashboard (Post-Transition)
**File**: `rj04-advisor-home.png`

**Layout**: Same three-column structure as Screen 3

**Key Differences from Prospect Dashboard**:

1. **Welcome Banner**
   - "Welcome, Victor!"
   - Message: "Your Transition Form is ready to review. Complete it to kick-off the next step in the process."
   - Button: "Start Transition Form"

2. **Contact Card**
   - "Raymond James Transition Support Team"
   - Sofia Drakotor
   - Email: sofia.dra...@raymondjames.com
   - Phone: 555-555-5555

3. **Tasks Section - Enhanced View**
   - Progress bar: "Overall Progress" - 20% (10 of 50 Tasks)
   - Search bar: "Find"
   - Task count: "25 Tasks"
   
   **Task Table** with columns:
   - Status (color-coded badges):
     - "Overdue" (red)
     - "Due Today" (orange)
   - Suggested Due Date
   - Task Title (clickable links): "Review & Approve U4"
   - Assigned To: "Tommy Marsh"
   - Owner: "Transition Consultant"
   - Category: "Initial Engagement"
   - Actions (3-dot menu)

4. **Calendar**
   - Shows "Transitions Meeting" on March 8, 2025
   - Attendees: Victor Irwyn, Greg Robinson
   - Time: 8:00 - 9:00 AM
   - Coordinator: Abby Arnoldis | Transitions Coordinator
   - Join Zoom link

**Design Notes**:
- More data-dense than prospect view
- Status indicators for task urgency
- Searchable/filterable task list
- Team collaboration emphasis

---

### Screen 5: Task Detail View
**File**: `rj04-advisor-task.png`

**Layout**: Full-width detail view with right sidebar

**Header**:
- "Advisor Transition Hub" title
- Search bar (top right)
- Help icon
- Settings icon

**Task Header Bar**:
- Task title: "Task: Obtain U4 from Firm"
- Close button (X, top right)

**Metadata Row**:
- Status: "Not Started" (gray badge)
- Priority: "High" (orange badge)
- Task ID: "123456789" (clickable link)
- Due Date: 10/01/2025
- Assigned To: Tommy Marsh
- Category: Person Set Up
- Task Owner: HO Team
- Transition Type: RJ-FS - New Branch
- Phase: Pre-Join

**Main Content Area** (Three columns):

**Left Sidebar - Actions** (200px):

*Communication & Collaboration*:
- Nudge Advisor
- Schedule Appointment
- Log a Call or Meeting
- Set Reminder

*Miscellaneous*:
- Set Override
- Set Special Circumstance
- Reassign Task
- Mark as Complete

**Center Content**:

1. **Task Description**
   - Explanation: "This task requires you to obtain a U4 form as part of the advisor transition process. The form is regulatory document used to register individuals with FINRA and other regulatory bodies. It collects personal, employment, and disciplinary history information for financial professionals. Completing this form is a critical step in the advisor transition process to ensure compliance and proper registration with the firm and relevant authorities."

2. **Instructions**
   - Numbered steps:
     1. Download the required form using the link below.
     2. Fill out the form with necessary information
     3. Attach the form and send by pressing "Send Form"
     4. Wait for the advisor to sign and send the form back.

3. **Send form to Advisor**
   - Form Name input field
   - Display: "Form U4 - Uniform Application for Securities Industry Registration or Transfer"
   - Buttons: "View Form" | "Attach File"
   - "Send Form" button (disabled state)

**Right Sidebar** (300px):

1. **Task History and Notes**
   - "New Comment" text area
   - "Add" button
   - History log (empty in this view)

2. **Reminders & Alerts**
   - "View All" link
   - List of reminders:
     - "Follow up with Advisor - Transition #1" (07/09)
     - (Multiple similar entries)
   - X button to dismiss each

3. **Links and Resources**
   - "View All" link
   - Empty state/placeholder area

**Design Notes**:
- Comprehensive task management view
- Clear action items in left sidebar
- Structured instructions for completion
- Form attachment and submission workflow
- Communication history tracking
- Reminder system integration

---

## Technical Implementation

### Tech Stack Recommendation

**Frontend**:
- React 18+ with TypeScript
- React Router v6 for navigation
- Tailwind CSS for styling (or Material-UI for faster component development)
- React Hook Form for form validation

**Mock Data & State**:
- React Context or simple useState for global state
- No backend required - all data hardcoded
- LocalStorage for persisting "logged in" state during demo

**Build Tool**:
- Vite for fast development and building

### Project Structure

```
advisor-hub-demo/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TaskCard.tsx
│   │   └── Calendar.tsx
│   ├── pages/               # Page components
│   │   ├── Login.tsx
│   │   ├── ProspectSignup.tsx
│   │   ├── ProspectDashboard.tsx
│   │   ├── AdvisorDashboard.tsx
│   │   └── TaskDetail.tsx
│   ├── data/                # Mock data
│   │   ├── mockTasks.ts
│   │   ├── mockUsers.ts
│   │   └── mockEvents.ts
│   ├── styles/              # Global styles
│   │   └── index.css
│   ├── types/               # TypeScript types
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── public/                  # Static assets
│   └── images/
└── package.json
```

### Mock Data Examples

```typescript
// src/data/mockUsers.ts
export const mockUsers = {
  prospect: {
    id: '1',
    email: 'prospect@test.com',
    password: 'password',
    type: 'prospect',
    profile: {
      firstName: 'Victor',
      lastName: 'Irwyn',
      email: 'victor.irwyn@gmail.com',
      targetJoinDate: '5/1/25',
      recruiter: 'Sofia Drakotor',
      recruiterEmail: 'sofia.dra...@raymondjames.com',
      recruiterPhone: '555-555-5555'
    }
  },
  advisor: {
    id: '2',
    email: 'advisor@test.com',
    password: 'password',
    type: 'advisor',
    profile: {
      firstName: 'Victor',
      lastName: 'Irwyn',
      email: 'victor.irwyn@gmail.com',
      targetJoinDate: '5/1/25',
      transitionCoordinator: 'Sofia Drakotor',
      coordinatorEmail: 'sofia.dra...@raymondjames.com',
      coordinatorPhone: '555-555-5555',
      transitionProgress: 20,
      tasksCompleted: 10,
      totalTasks: 50
    }
  }
};

// src/data/mockTasks.ts
export const mockProspectTasks = [
  {
    id: 'task-1',
    title: 'Some Text',
    dueDate: '06/01/2025',
    nextSteps: 'Advisor to Complete',
    assignedTo: 'Victor Irwyn, Greg Robinson',
    status: 'not-started'
  },
  {
    id: 'task-5',
    title: 'Advisor Info Request Form',
    dueDate: '06/01/2025',
    nextSteps: 'RJ Contact to Review',
    assignedTo: 'Victor Irwyn, Greg Robinson',
    status: 'not-started',
    hasAction: true
  }
];

export const mockAdvisorTasks = [
  {
    id: 'task-101',
    title: 'Review & Approve U4',
    dueDate: '06/01/2025',
    assignedTo: 'Tommy Marsh',
    owner: 'Transition Consultant',
    category: 'Initial Engagement',
    status: 'overdue',
    priority: 'high'
  },
  {
    id: 'task-102',
    title: 'Review & Approve U4',
    dueDate: '07/09/2025',
    assignedTo: 'Tommy Marsh',
    owner: 'Transition Consultant',
    category: 'Initial Engagement',
    status: 'due-today',
    priority: 'high'
  }
  // ... more tasks
];

export const mockTaskDetail = {
  id: '123456789',
  title: 'Obtain U4 from Firm',
  status: 'Not Started',
  priority: 'High',
  dueDate: '10/01/2025',
  assignedTo: 'Tommy Marsh',
  category: 'Person Set Up',
  taskOwner: 'HO Team',
  transitionType: 'RJ-FS - New Branch',
  phase: 'Pre-Join',
  description: 'This task requires you to obtain a U4 form as part of the advisor transition process...',
  instructions: [
    'Download the required form using the link below.',
    'Fill out the form with necessary information',
    'Attach the form and send by pressing "Send Form"',
    'Wait for the advisor to sign and send the form back.'
  ],
  form: {
    name: 'Form U4 - Uniform Application for Securities Industry Registration or Transfer',
    url: '#'
  },
  history: [],
  reminders: [
    {
      id: 'r1',
      text: 'Follow up with Advisor - Transition #1',
      date: '07/09'
    },
    {
      id: 'r2',
      text: 'Follow up with Advisor - Transition #1',
      date: '07/09'
    }
  ]
};

// src/data/mockEvents.ts
export const mockProspectEvents = [
  {
    id: 'event-1',
    title: 'Virtual Home Office Visit',
    date: '2025-03-08',
    time: '8:00 - 9:00 AM',
    attendees: ['Victor Irwyn', 'Greg Robinson'],
    recruiter: 'Abby Arnoldis | Recruiter',
    zoomLink: 'https://zoom.us/j/123456789'
  }
];

export const mockAdvisorEvents = [
  {
    id: 'event-2',
    title: 'Transitions Meeting',
    date: '2025-03-08',
    time: '8:00 - 9:00 AM',
    attendees: ['Victor Irwyn', 'Greg Robinson'],
    coordinator: 'Abby Arnoldis | Transitions Coordinator',
    zoomLink: 'https://zoom.us/j/123456789'
  }
];
```

### Routing Configuration

```typescript
// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ProspectSignup from './pages/ProspectSignup';
import ProspectDashboard from './pages/ProspectDashboard';
import AdvisorDashboard from './pages/AdvisorDashboard';
import TaskDetail from './pages/TaskDetail';

function App() {
  return (
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
  );
}

export default App;
```

### Authentication Mock Logic

```typescript
// src/utils/auth.ts
import { mockUsers } from '../data/mockUsers';

export const mockLogin = (email: string, password: string) => {
  // Simple mock authentication
  const user = Object.values(mockUsers).find(
    u => u.email === email && u.password === password
  );
  
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, user };
  }
  
  return { success: false, error: 'Invalid credentials' };
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};
```

---

## Design System

### Colors (Raymond James Brand)

```css
:root {
  /* Primary Colors */
  --rj-navy: #003768;
  --rj-teal: #00A9CE;
  
  /* Neutrals */
  --rj-gray-50: #F9FAFB;
  --rj-gray-100: #F3F4F6;
  --rj-gray-200: #E5E7EB;
  --rj-gray-300: #D1D5DB;
  --rj-gray-500: #6B7280;
  --rj-gray-700: #374151;
  --rj-gray-900: #111827;
  
  /* Status Colors */
  --status-overdue: #DC2626;
  --status-due-today: #F59E0B;
  --status-not-started: #6B7280;
  --status-complete: #059669;
  
  /* Priority Colors */
  --priority-high: #F59E0B;
  --priority-medium: #3B82F6;
  --priority-low: #6B7280;
}
```

### Typography

```css
/* Headings */
.heading-1 { font-size: 2.25rem; font-weight: 600; line-height: 2.5rem; }
.heading-2 { font-size: 1.875rem; font-weight: 600; line-height: 2.25rem; }
.heading-3 { font-size: 1.5rem; font-weight: 600; line-height: 2rem; }
.heading-4 { font-size: 1.25rem; font-weight: 600; line-height: 1.75rem; }
.heading-5 { font-size: 1.125rem; font-weight: 600; line-height: 1.75rem; }

/* Body */
.body-large { font-size: 1rem; line-height: 1.5rem; }
.body { font-size: 0.875rem; line-height: 1.25rem; }
.body-small { font-size: 0.75rem; line-height: 1rem; }

/* Use Open Sans or similar professional sans-serif font */
font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Component Patterns

**Status Badge**:
```tsx
interface StatusBadgeProps {
  status: 'overdue' | 'due-today' | 'not-started' | 'complete';
}

const statusConfig = {
  'overdue': { color: 'red', label: 'Overdue' },
  'due-today': { color: 'orange', label: 'Due Today' },
  'not-started': { color: 'gray', label: 'Not Started' },
  'complete': { color: 'green', label: 'Complete' }
};
```

**Task Card**:
- Hover state with subtle elevation
- Clear visual hierarchy
- Clickable with pointer cursor
- Status indicator on left edge

**Form Inputs**:
- Light blue background (#F0F9FF)
- Clear focus state with blue border
- Error state with red border and message
- Label above input with asterisk for required

---

## Key Interactions

### Login Flow
1. User enters email and password
2. On "Sign In" click:
   - If `prospect@test.com` → Navigate to `/prospect/dashboard`
   - If `advisor@test.com` → Navigate to `/advisor/dashboard`
   - Invalid credentials → Show error message
3. On "Sign Up" click → Navigate to `/prospect/signup`

### Prospect Signup Flow
1. User fills out form fields
2. On "Next" click:
   - Validate all required fields
   - If valid → Navigate to `/prospect/dashboard`
   - If invalid → Show field-level errors
3. On "Save" click:
   - Show success toast "Progress saved"
   - Stay on page

### Task Interaction (Advisor Dashboard)
1. User clicks task title → Navigate to `/advisor/task/:id`
2. User clicks 3-dot menu → Show action dropdown
3. User clicks "Start" button → Navigate to appropriate form/page

### Task Detail Actions
1. User clicks action in left sidebar → Show appropriate modal/form
2. User adds comment → Append to history log
3. User clicks "Mark as Complete" → Show confirmation modal
4. User uploads form → Enable "Send Form" button

---

## Development Phases

### Phase 1: Setup & Structure (2-4 hours)
- Initialize React + TypeScript + Vite project
- Install dependencies (React Router, Tailwind/MUI, React Hook Form)
- Set up project structure
- Create mock data files
- Implement routing

### Phase 2: Login & Navigation (2-3 hours)
- Build Login page component
- Add "Sign Up" CTA
- Implement mock authentication
- Test navigation between flows

### Phase 3: Prospect Flow (4-6 hours)
- Build ProspectSignup form with validation
- Build ProspectDashboard with all widgets
- Implement milestone timeline
- Add task checklist
- Build calendar widget

### Phase 4: Advisor Flow (4-6 hours)
- Build AdvisorDashboard with task table
- Implement search/filter functionality
- Add progress indicators
- Build TaskDetail view
- Implement action sidebar

### Phase 5: Polish & Testing (2-3 hours)
- Responsive design refinements
- Add transitions/animations
- Cross-browser testing
- Demo walkthrough preparation

**Total Estimated Time**: 14-22 hours (2-3 days)

---

## Demo Script

### Scenario 1: New Prospect Journey
**Persona**: Sarah Miller, financial advisor at Wells Fargo considering move to Raymond James

1. **Login Screen**: "Sarah receives an invitation email and clicks the link to create her account"
   - Show "Sign Up" CTA
   - Click to navigate to signup

2. **Signup Form**: "She begins the Advisor Information Request process"
   - Fill out personal information
   - Demonstrate form validation
   - Click "Next" to progress

3. **Prospect Dashboard**: "After completing her initial information, Sarah sees her personalized dashboard"
   - Highlight milestone timeline
   - Point out upcoming Home Office Visit
   - Show training resources
   - Explain task assignments

### Scenario 2: Active Advisor Journey
**Persona**: Victor Irwyn, advisor in active transition process

1. **Login Screen**: "Victor logs into his transition portal"
   - Enter credentials
   - Click "Sign In"

2. **Advisor Dashboard**: "Victor sees his transition is 20% complete with 10 of 50 tasks done"
   - Highlight progress bar
   - Show overdue tasks requiring attention
   - Filter by status
   - Explain color coding system

3. **Task Detail**: "Victor clicks on 'Obtain U4 from Firm' to see what's needed"
   - Review task description and instructions
   - Show action sidebar options
   - Demonstrate form attachment workflow
   - Add a comment to task history

---

## Testing Checklist

### Functional Testing
- [ ] Login with prospect credentials navigates to prospect dashboard
- [ ] Login with advisor credentials navigates to advisor dashboard
- [ ] Sign Up button navigates to prospect signup form
- [ ] Form validation prevents submission with invalid data
- [ ] All navigation links work correctly
- [ ] Task list filters work properly
- [ ] Calendar displays correct events
- [ ] Mock data displays correctly in all views

### Visual Testing
- [ ] Raymond James brand colors applied consistently
- [ ] Typography hierarchy is clear
- [ ] Responsive design works on tablet/desktop
- [ ] Hover states work on interactive elements
- [ ] Status badges display correct colors
- [ ] All images and icons load properly

### Browser Testing
- [ ] Chrome
- [ ] Firefox  
- [ ] Safari
- [ ] Edge

---

## Deployment

### Build Command
```bash
npm run build
```

### Hosting Options
1. **Vercel** (Recommended for demos)
   - Connect GitHub repo
   - Auto-deploys on push
   - Free tier sufficient

2. **Netlify**
   - Drag-and-drop build folder
   - Custom domain support

3. **GitHub Pages**
   - Free hosting
   - Deploy from `/dist` folder

### Environment Setup
No environment variables needed - all data is mocked

---

## Deliverables

1. **Source Code**: GitHub repository with complete codebase
2. **Live Demo URL**: Deployed application URL
3. **Demo Credentials**: 
   - Prospect: `prospect@test.com` / `password`
   - Advisor: `advisor@test.com` / `password`
4. **Demo Script**: Step-by-step walkthrough guide
5. **README**: Setup and run instructions

---

## Future Enhancements (Out of Scope for Demo)

- Real authentication system
- Backend API integration
- Database persistence
- Email notifications
- Document upload functionality
- Real-time collaboration
- Mobile responsive design
- Accessibility improvements (WCAG 2.1 AA)
- Multi-language support

---

## Questions & Clarifications

1. Should the signup form collect all fields shown or just the first page?
2. Are there specific branding assets (logo files, fonts) we should use?
3. Should we add any micro-interactions or animations?
4. Is there a specific browser/device we're optimizing for demo?
5. Do you want the ability to add/edit tasks in the demo or just view?

---

This focused technical brief scopes out exactly what's needed for a clean, professional demo that can be built in 2-3 days and effectively showcases the two distinct user journeys through the Raymond James Advisor Transition Hub.
