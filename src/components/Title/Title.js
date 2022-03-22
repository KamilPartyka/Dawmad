import styled from 'styled-components/macro';

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0;
  color: ${({ theme }) => theme.white};
`;

export default Title;
