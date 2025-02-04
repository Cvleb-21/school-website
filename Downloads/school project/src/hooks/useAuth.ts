import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        // Add your authentication check logic here
        const token = localStorage.getItem('authToken');
        if (token) {
          setIsAuthenticated(true);
          // Fetch user data
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };

    checkAuth();
  }, []);

  const requireAuth = (callback: () => void) => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: window.location.pathname } });
      return;
    }
    callback();
  };

  return {
    isAuthenticated,
    user,
    requireAuth,
  };
};

export default useAuth;