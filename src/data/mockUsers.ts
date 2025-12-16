// Mock users for authentication demo
export const mockUsers = {
  prospect: {
    id: '1',
    email: 'prospect@test.com',
    password: 'ProspectDemo2024!',
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
    password: 'AdvisorDemo2024!',
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
} as const;

export type UserType = 'prospect' | 'advisor';

export interface User {
  id: string;
  email: string;
  password: string;
  type: UserType;
  profile: any;
}