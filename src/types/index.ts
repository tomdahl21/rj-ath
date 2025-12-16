// Form data interface for prospect signup
export interface ProspectFormData {
  recruiter: string;
  isTeam: boolean;
  teamMembersCount?: string;
  teamName?: string;
  firstName: string;
  lastName: string;
  email: string;
  crdNumber: string;
  currentFirm: string;
  yearsAtFirm: string;
  yearsInIndustry: string;
  city: string;
  state: string;
  zipCode: string;
}

// Status types
export type TaskStatus = 'not-started' | 'overdue' | 'due-today' | 'in-progress' | 'complete';
export type Priority = 'high' | 'medium' | 'low';
export type MilestoneStatus = 'not-started' | 'in-progress' | 'complete';

// Component prop types
export interface StatusBadgeProps {
  status: TaskStatus;
}

export interface PriorityBadgeProps {
  priority: Priority;
}

// Navigation types
export type UserFlow = 'prospect' | 'advisor';

export interface RouteProps {
  children: React.ReactNode;
}