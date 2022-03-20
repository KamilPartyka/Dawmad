import styled from 'styled-components/macro';

export const StyledWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};

  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  height: 5rem;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;

  div:last-of-type button {
    margin-left: 1rem;
  }
`;
