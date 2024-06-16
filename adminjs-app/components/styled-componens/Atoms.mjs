import styled from 'styled-components';
import { space, layout } from 'styled-system';

export const colors = {
  bg: '#000000', // Black background
  primary: '#39FF14', // Neon Green
  approval: '#39FF14', // Neon Green
  danger: '#DC143C', // Crimson Red
  grey100: '#CCCCCC', // Light Grey
  grey80: '#333333', // Dark Grey
  white: '#FFFFFF', // White
};

export const Section = styled.section`
  //   background-color: #f0f0f0;
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  ${space} ${layout} // Allows space and layout props from styled-system
`;

export const Heading = styled.h6`
  color: green;
  font-style: italic;
  margin-bottom: 10px;
  ${space} ${layout} // Allows space and layout props from styled-system
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column; /* default mobile view */
  justify-content: space-between;

  @media (min-width: 768px) {
    /* example breakpoint */
    flex-direction: row;
  }
  ${space} ${layout} // Allows space and layout props from styled-system
`;

export const Cell = styled.div`
  flex-grow: 1;
  margin-bottom: 0.1rem;
  margin-right: 0.5rem;
  width: auto;
  min-width: fit-content;
  ${space} ${layout} // Allows space and layout props from styled-system
`;

export const CellFlex = styled.div`
  display: flex;
  ${space} ${layout} // Allows space and layout props from styled-system
`;

export const Select = styled.select`
  border: 2px solid #ccc;
  padding: 8px 12px;
  border-radius: 10px;
  margin-bottom: 20px;
  width: auto;
  min-width: 150px;
  ${space} ${layout} // Allows space and layout props from styled-system
`;

export const Input = styled.input`
  border: 2px solid #ccc;
  padding: 8px 12px;
  border-radius: 10px;
  margin-bottom: 20px;
  width: auto;
  min-width: 150px;
  ${space} ${layout} // Allows space and layout props from styled-system
`;

export const TextField = styled.textarea`
  border: 2px solid #ccc;
  padding: 8px 12px;
  border-radius: 10px;
  margin-bottom: 20px;
  width: auto;
  min-width: 150px;
  resize: vertical; // Allows the user to resize the textarea vertically
  ${space} ${layout} // Allows space and layout props from styled-system
`;

export const Paragraph = styled.p`
  font-style: ${(props) => props.fontStyle || 'normal'};
  color: ${(props) => props.fontColor || 'none'} ${space} ${layout}; // Allows space and layout props from styled-system
`;

export const ColoredSpan = styled.span`
  font-style: ${(props) => props.fontStyle || 'normal'};
  color: ${(props) => (props.fontColor ? colors[props.fontColor] : 'inherit')};
  ${space}
  ${layout}
`;

export const AHref = styled.a`
  ${space} ${layout} // Allows space and layout props from styled-system
`;
