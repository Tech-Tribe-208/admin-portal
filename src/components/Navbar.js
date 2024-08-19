import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Picture1.png'; // Import the logo image

const NavbarContainer = styled.nav`
  background-color: darkgrey;
  color: white;
  padding: 15px;
  padding-left: 35px;
  padding-right: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  /* Adds a subtle shadow for depth */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;  /* Adjust the height to fit your design */
  margin-right: 10px; /* Space between the logo and text */
`;

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #F7DB8D; /* Light yellow text for contrast */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: black; /* Light beige color for the links */
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #F7DB8D;  /* Hover effect to change color */
  }
`;


const Navbar = () => {
  return (
    <NavbarContainer>
    <LogoContainer>
      <LogoImage src={logo} alt="Logo" />
      <LogoText>Dashboard</LogoText>
    </LogoContainer>
    <NavLinks>
      <NavLink href="/dashboard">Home</NavLink>
      <NavLink href="/bookings">Bookings</NavLink>
      <NavLink href="/cleaners">Cleaners</NavLink>
      <NavLink href="/logout">Logout</NavLink>
    </NavLinks>
  </NavbarContainer>
  );
}

export default Navbar;
