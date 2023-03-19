import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.2rem;
  background-color: #ccc;
  color: #fff;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #333;
  }
`;

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset' | undefined;
}

const Button: React.FC<Partial<ButtonProps>> = ({
  children,
  onClick,
  type = 'button',
}) => (
  <StyledButton type={type} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
