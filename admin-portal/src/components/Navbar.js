import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Picture1.png'; // Import the logo image

const NavbarContainer = styled.nav`
  background-color: lightgrey;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;  // Adjust the height to fit your design
  margin-right: 10px; // Space between the logo and text
`;

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: Black;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImage src={logo} alt="Logo" />
        <LogoText> Dashboard</LogoText>
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
