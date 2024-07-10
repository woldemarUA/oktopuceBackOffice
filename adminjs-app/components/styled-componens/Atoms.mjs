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

export const Button = styled.button`
  background-color: ${(props) => colors[props.bgColor] || 'none'};
  color: ${colors.white}; // Assuming you want the text color to contrast the background
  padding: 8px 16px; // Example padding, adjust as needed
  border: none; // Assuming no border is needed
  border-radius: ${(props) =>
    props.radius || '4px'}; // Giving the button rounded corners
  cursor: pointer; // Changes the cursor to a pointer on hover

  &:hover {
    background-color: ${(props) =>
      colors[props.hoverColor] ||
      colors.approval}; // Optional: change color on hover
  }

  ${space} ${layout}
`;
export const Section = styled.section`
  //   background-color: #f0f0f0;
  border: ${(props) => props.borderW || '2px'} solid #ccc;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  ${space} ${layout} // Allows space and layout props from styled-system
`;

export const Heading = styled.h4`
  color: ${(props) => colors[props.color] || colors.white};
  font-style: ${(props) => props.fontStyle || 'italic'};
  margin-bottom: 10px;
  ${space} ${layout} // Allows space and layout props from styled-system
`;

export const Row = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction || 'column'}; /* default mobile view */
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
  flex-direction: column; /* default mobile view */
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
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 5px;
  margin-bottom: 20px;
  width: auto;
  min-width: 150px;
  ${space} ${layout} // Allows space and layout props from styled-system
`;

export const Image = styled.img`
  border: 1px solid #ccc;

  border-radius: 5px;

  width: auto;
  min-width: 150px;
  ${space} ${layout}
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

export const Label = styled.label`
  display: flex; // Changes display to flex to use flexbox properties

  align-items: center; // Vertically centers the children
  justify-content: space-between; // Spreads the children out across the label's width
  cursor: pointer;
  ${space}
`;

export const InputAtom = styled.input`
  border: 2px solid #ccc;
  border-radius: 10px;
  ${space} ${layout}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  ${space}
`;

export const CanvasContainer = styled.div`
  // background-color: ${colors.grey100};
  // border-radius: 10px;
  // border: 2px solid ${colors.grey100};
  display: flex;
  justify-content: center;
  align-items: center;
  // overflow: hidden; // Ensures no overflow of the canvas edges
  // width: 100%; // Takes full width of the container
  // height: auto; // Default height, can be adjusted or made responsive

  // @media (min-width: 768px) {
  //   height: 500px; // Larger height for larger screens
  // }

  ${space} ${layout} // Incorporates space and layout for padding, margin adjustments
`;
