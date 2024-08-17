import React from 'react';
import Navbar from '../components/Navbar';
import { DashboardContainer, StatsCard } from '../styles';

const DashboardPage = () => {
  return (
    <div>
      <Navbar />
      <DashboardContainer>
        <StatsCard color="blue">Number of Bookings: 10</StatsCard>
        <StatsCard color="red">Number of Cleaners: 15</StatsCard>
        <StatsCard color="black">Number of Customers: 20</StatsCard>
      </DashboardContainer>
    </div>
  );
};

export default DashboardPage;
