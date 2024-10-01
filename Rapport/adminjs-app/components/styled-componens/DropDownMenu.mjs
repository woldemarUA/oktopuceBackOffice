import styled from 'styled-components';

export const DropdownContainer = styled.div`
  //   position: relative;
  //   width: auto; // Adjust based on your layout requirements
  //   min-width: 150px; // Minimum width of the dropdown
  position: absolute;
  top: 100%; // Positions the dropdown right below the parent element
  left: 0;
  z-index: 1000; // Ensure it's above other content
  width: auto; // Adjust based on your layout requirements
  min-width: 150px; // Minimum width of the dropdown
  background-color: white; // Set your desired background color
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); // Optional: adds shadow for better visibility
  //   border: 1px solid #ccc; // Optional: adds border
`;

export const StyledSelect = styled.select`
  display: block;
  width: 100%; // Takes the full width of the container
  padding: 0.5rem 0.75rem; // Bootstrap-like padding
  font-size: 1rem; // Standard font size
  font-weight: 400; // Normal font weight
  line-height: 1.5; // Adequate line spacing
  color: #495057; // Typical text color
  background-color: #fff; // White background
  background-clip: padding-box;
  border: 1px solid #ced4da; //  border color
  border-radius: 0.25rem; // Rounded borders
  appearance: none; // Removes default browser styling
  &:focus {
    border-color: #80bdff; // Focus border color
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); // Focus box shadow
  }
`;

export const Option = styled.option`
  padding: 0.5rem; // Padding for each option
  background: #fff; // Background color
  color: #495057; // Text color
`;

export const DropdownLink = styled.a`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #ffffff;
  background-color: black;

  &:hover {
    background-color: #f0f0f0; // Set hover background color
    color: black;
  }
`;
