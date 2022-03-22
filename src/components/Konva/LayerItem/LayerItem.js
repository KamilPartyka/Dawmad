import { useRef, useEffect, useState } from 'react';
import { Transformer, Image, Group, Text } from 'react-konva';
import useImage from 'use-image';
import PropTypes from 'prop-types';

function ImageHandler({
  src,
  imageProps,
  isSelected,
  onSelect,
  onChange,
  onDelete,
}) {
  const imageRef = useRef();
  const trRef = useRef();

  const [isDragging, setIsDragging] = useState(false);

  const [image] = useImage(src);

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([imageRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const handleDragEnd = (e) => {
    onChange({
      ...imageProps,
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  const handleOnTransformEnd = () => {
    // transformer is changing scale of the node and NOT its width or height but in the store we have only width and height to match the data better we will reset scale on transform end
    const node = imageRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    // reset it back
    node.scaleX(1);
    node.scaleY(1);
    onChange({
      ...imageProps,
      x: node.x(),
      y: node.y(),
      // set minimal value
      width: Math.max(5, node.width() * scaleX),
      height: Math.max(node.height() * scaleY),
    });
  };

  const handleOnMouseEnter = (e) => {
    const container = e.target.getStage().container();
    container.style.cursor = 'pointer';
  };

  const handleOnMouseLeave = (e) => {
    const container = e.target.getStage().container();
    container.style.cursor = 'default';
  };

  const boundBoxFunc = (oldBox, newBox) => {
    // limit resize
    if (newBox.width < 30 || newBox.height < 30) {
      return oldBox;
    }
    return newBox;
  };

  return (
    <Group
      draggable
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
    >
      <Image
        image={image}
        onClick={onSelect}
        onTap={onSelect}
        ref={imageRef}
        {...imageProps}
        draggable
        onDragEnd={(e) => handleDragEnd(e)}
        onTransformEnd={handleOnTransformEnd}
      />
      {isSelected && (
        <>
          <Transformer ref={trRef} boundBoxFunc={boundBoxFunc} />
          {!isDragging && (
            <Text
              onClick={onDelete}
              text="remove"
              fontSize={15}
              fontStyle="bold"
              width={60}
              height={25}
              x={imageProps.x + 10}
              y={imageProps.y - 20}
              onMouseEnter={(e) => handleOnMouseEnter(e)}
              onMouseLeave={(e) => handleOnMouseLeave(e)}
            />
          )}
        </>
      )}
    </Group>
  );
}

ImageHandler.propTypes = {
  src: PropTypes.string.isRequired,
  imageProps: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ImageHandler;
