import { useState } from 'react';

import MainTemplate from 'templates/MainTemplate';

import Konva from 'components/Konva';
import Navbar from 'components/Navbar';

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
