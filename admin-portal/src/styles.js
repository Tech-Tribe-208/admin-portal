import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

export const StatsCard = styled.div`
  padding: 20px;
  background-color: ${props => props.color};
  color: white;
  border-radius: 5px;
  text-align: center;
  width: 200px;
`;


export const Nav = styled.nav`
  background-color: black;
  color: white;
  padding: 10px;
  text-align: center;
`;
