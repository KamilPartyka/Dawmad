import { useState } from 'react';

import MainTemplate from 'templates/MainTemplate';

import Konva from 'components/Konva/Konva';
import AddPhoto from 'components/AddPhoto/AddPhoto';

import { Title } from 'components/Title/Title';

function App() {
  const [items, setItems] = useState([]);

  return (
    <MainTemplate>
      <>
        <Title>Hello world</Title>
        <AddPhoto setItems={setItems} />
        <Konva items={items} setItems={setItems} />
      </>
    </MainTemplate>
  );
}

export default App;
