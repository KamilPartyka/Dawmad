import { useRef } from 'react';
import styled from 'styled-components/macro';
import MainTemplate from 'templates/MainTemplate';
import Canvas from 'components/Canvas/Canvas';
import AddPhoto from 'components/AddPhoto/AddPhoto';

const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 2rem;
`;

function App() {
  const canvas = useRef(null);

  return (
    <MainTemplate>
      <>
        <Title>Hello world</Title>
        <AddPhoto canvas={canvas} />
        <Canvas canvas={canvas} />
      </>
    </MainTemplate>
  );
}

export default App;
