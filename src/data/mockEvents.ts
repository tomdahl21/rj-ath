export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  attendees: string[];
  recruiter?: string;
  coordinator?: string;
  zoomLink: string;
}

export const mockProspectEvents: Event[] = [
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

export const mockAdvisorEvents: Event[] = [
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

// Milestone data for prospect timeline
export const mockMilestones = [
  { id: 1, title: 'Advisor Info', status: 'not-started' },
  { id: 2, title: 'Home Office Visit', status: 'not-started' },
  { id: 3, title: 'Financial Benefits', status: 'not-started' },
  { id: 4, title: 'Offer Letter', status: 'not-started' },
  { id: 5, title: 'Commit', status: 'not-started' }
];

// Resources data
export const mockResources = [
  { id: 1, title: 'Raymond90 Sales Deck', type: 'sales' },
  { id: 2, title: 'Engagement scores kit', type: 'engagement' },
  { id: 3, title: 'Sales scores kit', type: 'sales' },
  { id: 4, title: 'Raymond90 Sales Deck', type: 'sales' },
  { id: 5, title: 'Engagement scores kit', type: 'engagement' },
  { id: 6, title: 'Sales scores kit', type: 'sales' }
];