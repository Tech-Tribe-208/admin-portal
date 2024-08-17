import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const BookingsContainer = styled.div`
  margin: 20px;
`;

const BookingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: black;
  color: white;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Example of fetching data from an API or local storage
    const fetchedBookings = [
      {
        id: 1,
        user: 'John Doe',
        bookingMade: '2024-08-10 14:30',
        bookingDate: '2024-08-15 10:00',
      },
      {
        id: 2,
        user: 'Jane Smith',
        bookingMade: '2024-08-11 09:15',
        bookingDate: '2024-08-16 14:00',
      },
      // Add more booking data as needed
    ];
    setBookings(fetchedBookings);
  }, []);

  return (
    <div>
      <Navbar />
      <BookingsContainer>
        <h2>Bookings</h2>
        <BookingTable>
          <thead>
            <tr>
              <TableHeader>User</TableHeader>
              <TableHeader>Booking Made</TableHeader>
              <TableHeader>Booking Date</TableHeader>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableData>{booking.user}</TableData>
                <TableData>{booking.bookingMade}</TableData>
                <TableData>{booking.bookingDate}</TableData>
              </TableRow>
            ))}
          </tbody>
        </BookingTable>
      </BookingsContainer>
    </div>
  );
};

export default BookingsPage;
