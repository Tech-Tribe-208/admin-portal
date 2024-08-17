import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    localStorage.removeItem('authToken'); 

    
    navigate('/');
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>You have been logged out</h2>
      <p>Redirecting to login page...</p>
    </div>
  );
};

export default LogoutPage;
