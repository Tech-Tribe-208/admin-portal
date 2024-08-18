import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import apiRequests from '../apiRequests';

const CleanersContainer = styled.div`
  margin: 20px;
`;

const CleanerCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ available }) => (available ? '#e0ffe0' : '#ffe0e0')};
`;

const CleanerInfo = styled.div`
  flex: 1;
`;

const CleanerName = styled.h3`
  margin: 0;
`;

const Availability = styled.p`
  margin: 5px 0;
  color: ${({ available }) => (available ? 'green' : 'red')};
`;

const BookButton = styled.button`
  background-color: Black;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: darkblue;
  }
`;

const CleanersPage = () => {
  const [cleaners, setCleaners] = useState([]);

  useEffect(() => {
    const fetchCleaners = async () => {
      const response = await apiRequests.getCleaners();
      if (response.status === 200) {
        console.log(response.data.cleaners);
        setCleaners(response.data.cleaners);
      } else {
        alert('Failed to fetch cleaners');
      }
    };
    fetchCleaners();
  }, []);

  const handleBookCleaner = async (cleanerId, bookingId) => {
    const response = await apiRequests.assignCleaner(bookingId, cleanerId);
    if (response.status === 200) {
      alert(`Cleaner with ID ${cleanerId} booked!`);
    }
    else {
      alert('Failed to book cleaner');
    }
  };

  return (
    <div>
      <Navbar />
      <CleanersContainer>
        <h2>Cleaners</h2>
        {cleaners.map((cleaner) => (
          <CleanerCard key={cleaner._id} available={cleaner.available}>
            <CleanerInfo>
              <CleanerName>{cleaner.fullName}</CleanerName>
              <Availability available={cleaner.available}>
                {cleaner.available ? 'Available' : 'Not Available'}
              </Availability>
            </CleanerInfo>
            <BookButton 
              onClick={() => handleBookCleaner(cleaner._id)}
              disabled={!cleaner.available}
            >
              {cleaner.available ? 'Book Cleaner' : 'Unavailable'}
            </BookButton>
          </CleanerCard>
        ))}
      </CleanersContainer>
    </div>
  );
};

export default CleanersPage;
