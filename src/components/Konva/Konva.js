import { useState } from 'react';
import { Stage, Layer } from 'react-konva';
import PropTypes from 'prop-types';
import LayerItem from 'components/Konva/LayerItem';

function Konva({ items, setItems }) {
  const [selectedId, setSelectedId] = useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectedId(null);
    }
  };

  const handleOnDelete = (i) => {
    const newImages = [...items];
    newImages.splice(i, 1);
    setItems(newImages);
  };

  const handleOnChange = (newAttrs, i) => {
    const img = items.slice();
    img[i] = newAttrs;
    setItems(img);
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        {items &&
          items.map((item, i) => (
            <LayerItem
              key={item.id}
              src={item.src}
              imageProps={item}
              isSelected={item.id === selectedId}
              onChange={(newAttrs) => handleOnChange(newAttrs, i)}
              onDelete={() => handleOnDelete(i)}
              onSelect={() => setSelectedId(item.id)}
            />
          ))}
      </Layer>
    </Stage>
  );
}

Konva.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
      src: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  setItems: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(window.Element) }),
  ]).isRequired,
};

export default Konva;
