import styled from 'styled-components/macro';

export const StyedButton = styled.button`
  background: ${({ theme, color }) => theme[color]};
  border-radius: 5rem;
  padding: 7px 3rem;

  border: none;
  cursor: pointer;

  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.tertiary};
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
`;
