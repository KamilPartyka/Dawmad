import styled from 'styled-components/macro';

export const StyledInput = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`;

export const StyledInputLabel = styled.label`
  display: inline-block;
  position: relative;
  padding: 7px 5rem;
  border-radius: 25px;
  background: ${({ theme }) => theme.secondary};
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.tertiary};
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.s};
  cursor: pointer;
`;
