import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { DashboardContainer, StatsCard } from '../styles';
import { useState } from 'react';
import apiRequests from '../apiRequests';

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
    <div>
      <Navbar />
      <DashboardContainer>
        <StatsCard color="#D9CDAD">Number of Bookings: {stats.numberOfBookings}</StatsCard>
        <StatsCard color="#1C422D">Number of Cleaners: {stats.numberOfCleaners}</StatsCard>
        <StatsCard color="#F7DB8D">Number of Customers: {stats.numberOfCustomers}</StatsCard>
      </DashboardContainer>
    </div>
  );
};

export default DashboardPage;
