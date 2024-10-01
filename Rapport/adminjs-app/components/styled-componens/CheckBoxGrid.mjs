import styled from 'styled-components';
import { space, layout } from 'styled-system';

// Styled grid container
const CheckboxGrid = styled.div`
  display: grid;
  background-color: ${(props) =>
    props.bgColor || 'none'}; // Corrected syntax and default color
  grid-template-columns: repeat(
    ${(props) => props.columns || 2},
    // Corrected property name
    1fr
  ); // Dynamically sets the number of columns, defaults to 2
  grid-gap: 16px; // Adds space between the grid items
  @media (max-width: 768px) {
    grid-template-columns: 1fr; // One column when the screen is less than 768px
  }
  ${space} ${layout} // Allows space and layout props from styled-system
`;

const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: ${(props) => props.spacing || 'space-between'};
  @media (max-width: 768px) {
    flex-direction: column;
  }
  ${space}
`;

const Label = styled.label`
  display: flex; // Changes display to flex to use flexbox properties

  align-items: center; // Vertically centers the children
  // justify-content: space-between; // Spreads the children out across the label's width
  cursor: pointer;
  ${space}
`;

const Input = styled.input`
  ${space} ${layout}
`;

const StyledTextArea = styled.textarea`
  width: 100%; // Corresponds to width={1}
  margin-top: 40px; // my={10} assumes 4 is the base unit for margins
  margin-bottom: 40px; // my={10}
  background-color: white; // bg='white'

  &:focus {
    outline: none;
    border-color: #4a90e2; // Example focus style
  }
`;
export { Label, CheckboxGrid, Box, StyledTextArea };
