import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import apiRequests from '../apiRequests';

const PageWrapper = styled.div`
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  background-color: #fff; 
`;

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 20px; 
  margin: 40px 20px; 
  padding: 20px; 
  background-color: #f5f5f5;
  border-radius: 8px; 
  flex: 1; 
  align-items: center; 
`;

const StatsCard = styled.div`
  padding: 30px; 
  background-color: ${props => props.color}; 
  color: white;
  border-radius: 10px; 
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s; 

  display: flex;
  flex-direction: column;
  justify-content: center; 
  height: 150px; 

  &:hover {
    transform: translateY(-5px); 
  }

  h3 {
    margin-bottom: 10px; 
    font-size: 24px; 
  }

  p {
    font-size: 18px; 
    margin: 0;
  }
`;

const Footer = styled.footer`
  margin-top: auto;
  background-color: #1C422D;
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 14px;
`;

const DashboardPage = () => {
  const [stats, setStats] = useState({
    numberOfBookings: 0,
    numberOfCleaners: 0,
    numberOfCustomers: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      const response = await apiRequests.getStatistics();
      if (response.status === 200) {
        const { numberOfBookings, numberOfCleaners, numberOfCustomers } = response.data.responseData;
        setStats({ numberOfBookings, numberOfCleaners, numberOfCustomers });
      } else {
        alert('Failed to fetch statistics');
      }
      console.log(response);
    };
    fetchStats();
  }, []);

  return (
    <PageWrapper>
    <Navbar />
    <DashboardContainer>
      <StatsCard color="#D9CDAD">
        <h3>Bookings</h3>
        <p>{stats.numberOfBookings}</p>
      </StatsCard>
      <StatsCard color="#1C422D">
        <h3>Cleaners</h3>
        <p>{stats.numberOfCleaners}</p>
      </StatsCard>
      <StatsCard color="#F7DB8D">
        <h3>Customers</h3>
        <p>{stats.numberOfCustomers}</p>
      </StatsCard>
    </DashboardContainer>
    <Footer>&copy; 2024 Sacred Addae Cleaning Services</Footer>
  </PageWrapper>
  );
};

export default DashboardPage;
