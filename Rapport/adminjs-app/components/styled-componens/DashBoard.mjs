import styled from 'styled-components';
import { space, layout } from 'styled-system'; // Define the inline styles
import { colors } from './Atoms.mjs';

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${space} ${layout}
`;

export const DashboardCardContainer = styled.div`
  width: 300px; // Adjust width as needed
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: black;
  text-align: center;
  border-radius: 8px;
  ${space} ${layout}
`;

export const DashboardLogo = styled.img`
  width: 100px; // Adjust size as needed
  height: auto;
  margin-bottom: 20px;
  ${space} ${layout}
`;
