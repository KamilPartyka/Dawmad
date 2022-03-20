import { useState } from 'react';

import MainTemplate from 'templates/MainTemplate';

import Konva from 'components/Konva/Konva';
import Navbar from 'components/Navbar/Navbar';

function App() {
  const [items, setItems] = useState([]);

  return (
    <MainTemplate>
      <>
        <Navbar setItems={setItems} />
        <Konva items={items} setItems={setItems} />
      </>
    </MainTemplate>
  );
}

export default App;
