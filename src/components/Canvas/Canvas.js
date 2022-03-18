import PropTypes from 'prop-types';

function Canvas({ canvas }) {
  return (
    <div>
      <canvas
        ref={canvas}
        width={800}
        height={500}
        style={{ border: '1px solid black' }}
      />
    </div>
  );
}

Canvas.propTypes = {
  canvas: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(window.Element) }),
  ]).isRequired,
};

export default Canvas;
