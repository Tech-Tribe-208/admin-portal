import React from 'react';
import Navbar from '../components/Navbar';
import { DashboardContainer, StatsCard } from '../styles';

const DashboardPage = () => {
  return (
    <div>
      <Navbar />
      <DashboardContainer>
        <StatsCard color="#D9CDAD">Number of Bookings: 10</StatsCard>
        <StatsCard color="#1C422D">Number of Cleaners: 15</StatsCard>
        <StatsCard color="#F7DB8D">Number of Customers: 20</StatsCard>
      </DashboardContainer>
    </div>
  );
};

export default DashboardPage;
