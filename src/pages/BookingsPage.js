import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import apiRequests from '../apiRequests';

const BookingsContainer = styled.div`
  margin: 20px;
`;

const BookingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color:lightgrey;
  color: Black;
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
    const fetchBookings = async () => {
      const response = await apiRequests.getBookings();
      if (response.status === 200) {
        setBookings(response.data.bookings);
      } else {
        alert('Failed to fetch bookings');
      }
    }
    fetchBookings();
  }, []);

  return (
    <div>
      <Navbar />
      <BookingsContainer>
        <h2>Bookings</h2>
        <BookingTable>
          <thead>
            <tr>
              <TableHeader>Customer Name</TableHeader>
              <TableHeader>Booking Creation Date</TableHeader>
              <TableHeader>Service Delivery Date</TableHeader>
              <TableHeader>Intended Duration (hours)</TableHeader>
              <TableHeader>Status</TableHeader>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableData>{booking.customerId.fullName}</TableData>
                <TableData>{booking.date}</TableData>
                <TableData>{booking.intendedDate}</TableData>
                <TableData>{booking.duration}</TableData>
                <TableData>{booking.bookingStatus}</TableData>
              </TableRow>
            ))}
          </tbody>
        </BookingTable>
      </BookingsContainer>
    </div>
  );
};

export default BookingsPage;
