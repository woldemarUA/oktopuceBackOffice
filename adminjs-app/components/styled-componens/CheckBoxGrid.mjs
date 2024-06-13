import styled from 'styled-components';
import { space, layout } from 'styled-system';

// Styled grid container
const CheckboxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Creates 2 columns
  grid-gap: 16px; // Adds space between the grid items
  @media (max-width: 768px) {
    grid-template-columns: 1fr; // One column when the screen is less than 768px
  }
  ${space} ${layout} // Allows space and layout props from styled-system
`;

// const CheckboxGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(
//     3,
//     1fr
//   ); // Flexible columns based on content size
//   grid-gap: 16px; // Adds space between the grid items
//   ${space} ${layout} // Allows space and layout props from styled-system

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr; // One column when the screen is less than 768px
//   }
// `;

// Optionally, style your Box and Label if needed
const Box = styled.div`
  display: flex;
  flex-direction: column;
  ${space}
`;

const Label = styled.label`
  display: flex; // Changes display to flex to use flexbox properties
  align-items: center; // Vertically centers the children
  justify-content: space-between; // Spreads the children out across the label's width
  cursor: pointer;
  ${space}
`;

const Input = styled.input`
  ${space} ${layout}
`;

export { Label, CheckboxGrid, Box };
