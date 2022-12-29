import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Button = styled.button`
  font-size: 14px;

  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 5px;

  user-select: none;
  cursor: pointer;

  transition: 200ms ease;
  transition-property: background-color, border-color, color;

  :hover,
  :focus,
  :active {
    background-color: #ff6b08;
    border-color: #ff6b08;
    color: white;
  }
`;
