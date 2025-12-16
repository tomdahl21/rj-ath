import { mockUsers, User } from '../data/mockUsers';

export const mockLogin = (email: string, password: string) => {
  // Simple mock authentication
  const user = Object.values(mockUsers).find(
    u => u.email === email && u.password === password
  );
  
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, user, type: user.type };
  }
  
  return { success: false, error: 'Invalid credentials' };
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};