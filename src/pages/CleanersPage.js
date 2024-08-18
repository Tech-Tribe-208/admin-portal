import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

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
   
    const fetchedCleaners = [
      { id: 1, name: 'Alice Johnson', available: true },
      { id: 2, name: 'Bob Smith', available: false },
      { id: 3, name: 'Catherine Lee', available: true },
      { id: 4, name: 'David Brown', available: false },
      { id: 5, name: 'Emma Davis', available: true },
      { id: 6, name: 'Frank Wilson', available: false },
      { id: 7, name: 'Grace Taylor', available: true },
      { id: 8, name: 'Harry Martinez', available: true },
      { id: 9, name: 'Isabella Moore', available: false },
      { id: 10, name: 'Jack White', available: true },
      { id: 11, name: 'Kelly Harris', available: true },
      { id: 12, name: 'Liam Thompson', available: false },
      { id: 13, name: 'Mia Lewis', available: true },
      { id: 14, name: 'Noah Clark', available: false },
      { id: 15, name: 'Olivia Walker', available: true },
    ];
    setCleaners(fetchedCleaners);
  }, []);

  const handleBookCleaner = (cleanerId) => {
    alert(`Cleaner with ID ${cleanerId} booked!`);
  };

  return (
    <div>
      <Navbar />
      <CleanersContainer>
        <h2>Cleaners</h2>
        {cleaners.map((cleaner) => (
          <CleanerCard key={cleaner.id} available={cleaner.available}>
            <CleanerInfo>
              <CleanerName>{cleaner.name}</CleanerName>
              <Availability available={cleaner.available}>
                {cleaner.available ? 'Available' : 'Not Available'}
              </Availability>
            </CleanerInfo>
            <BookButton 
              onClick={() => handleBookCleaner(cleaner.id)}
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
