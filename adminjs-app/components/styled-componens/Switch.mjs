import styled, { css } from 'styled-components';
import { space, layout, color, system } from 'styled-system';

// Styled label
const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 56px; // Tailwind's w-14 is 3.5rem or 56px
  height: 32px; // Tailwind's h-8 is 2rem or 32px
  background-color: #e5e7eb; // Tailwind's bg-gray-200
  border-radius: 9999px; // Tailwind's rounded-full
  cursor: pointer;
  ${space} ${layout} ${color}
`;

// Styled input (checkbox)
const ToggleInput = styled.input.attrs((props) => ({
  type: 'checkbox',
}))`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  ${space}
`;

// Styled toggle indicator
const ToggleIndicator = styled.span`
  position: absolute;
  left: 4px; // Tailwind's left-1 is 0.25rem or 4px
  top: 4px; // Tailwind's top-1 is 0.25rem or 4px
  width: 24px; // Tailwind's w-6 is 1.5rem or 24px
  height: 24px; // Tailwind's h-6 is 1.5rem or 24px
  border-radius: 9999px;
  background-color: ${({ checked }) =>
    checked ? '#065f46' : '#b91c1c'}; // Tailwind's bg-teal-600 and bg-red-600
  transform: ${({ checked }) =>
    checked ? 'translateX(24px)' : 'translateX(0px)'};
  transition: transform 0.2s;
  ${system({
    bg: {
      property: 'backgroundColor',
      scale: 'colors',
    },
  })}
`;

export { ToggleLabel, ToggleInput, ToggleIndicator };
