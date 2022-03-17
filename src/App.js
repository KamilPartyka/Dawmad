import styled from 'styled-components/macro';
import MainTemplate from 'templates/MainTemplate';

const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 2rem;
`;

function App() {
  return (
    <MainTemplate>
      <Title>Hello world</Title>
    </MainTemplate>
  );
}

export default App;
