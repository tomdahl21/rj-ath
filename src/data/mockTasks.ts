export interface Task {
  id: string;
  title: string;
  dueDate: string;
  nextSteps?: string;
  assignedTo: string;
  owner?: string;
  category?: string;
  status: 'not-started' | 'overdue' | 'due-today' | 'in-progress' | 'complete';
  priority?: 'high' | 'medium' | 'low';
  hasAction?: boolean;
}

export const mockProspectTasks: Task[] = [
  {
    id: 'task-1',
    title: 'Some Text',
    dueDate: '06/01/2025',
    nextSteps: 'Advisor to Complete',
    assignedTo: 'Victor Irwyn, Greg Robinson',
    status: 'not-started'
  },
  {
    id: 'task-2',
    title: 'Some Text',
    dueDate: '06/01/2025',
    nextSteps: 'Advisor to Complete',
    assignedTo: 'Victor Irwyn, Greg Robinson',
    status: 'not-started'
  },
  {
    id: 'task-3',
    title: 'Some Text',
    dueDate: '06/01/2025',
    nextSteps: 'RJ Contact to Review',
    assignedTo: 'Victor Irwyn, Greg Robinson',
    status: 'not-started'
  },
  {
    id: 'task-4',
    title: 'Some Text',
    dueDate: '06/01/2025',
    nextSteps: 'RJ Contact to Review',
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

export const mockAdvisorTasks: Task[] = [
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
    dueDate: '12/16/2025',
    assignedTo: 'Tommy Marsh',
    owner: 'Transition Consultant',
    category: 'Initial Engagement',
    status: 'due-today',
    priority: 'high'
  },
  {
    id: 'task-103',
    title: 'Complete Client Documentation',
    dueDate: '12/20/2025',
    assignedTo: 'Tommy Marsh',
    owner: 'Transition Consultant',
    category: 'Documentation',
    status: 'in-progress',
    priority: 'medium'
  },
  {
    id: 'task-104',
    title: 'Schedule Home Office Visit',
    dueDate: '12/25/2025',
    assignedTo: 'Tommy Marsh',
    owner: 'Transition Consultant',
    category: 'Initial Engagement',
    status: 'not-started',
    priority: 'medium'
  },
  {
    id: 'task-105',
    title: 'Submit Compliance Forms',
    dueDate: '12/30/2025',
    assignedTo: 'Tommy Marsh',
    owner: 'Compliance Team',
    category: 'Compliance',
    status: 'not-started',
    priority: 'low'
  }
];

export interface TaskDetail {
  id: string;
  title: string;
  status: string;
  priority: string;
  dueDate: string;
  assignedTo: string;
  category: string;
  taskOwner: string;
  transitionType: string;
  phase: string;
  description: string;
  instructions: string[];
  form: {
    name: string;
    url: string;
  };
  history: any[];
  reminders: Array<{
    id: string;
    text: string;
    date: string;
  }>;
}

export const mockTaskDetail: TaskDetail = {
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
  description: 'This task requires you to obtain a U4 form as part of the advisor transition process. The form is regulatory document used to register individuals with FINRA and other regulatory bodies. It collects personal, employment, and disciplinary history information for financial professionals. Completing this form is a critical step in the advisor transition process to ensure compliance and proper registration with the firm and relevant authorities.',
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
    },
    {
      id: 'r3',
      text: 'Follow up with Advisor - Transition #1',
      date: '07/09'
    }
  ]
};