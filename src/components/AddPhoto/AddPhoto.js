import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function AddPhoto({ canvas }) {
  const inputField = useRef(null);

  let fr;
  let img;

  const imageLoaded = () => {
    const ctx = canvas.current.getContext('2d');
    ctx.drawImage(img, 20, 20, 400, 400);
  };

  const createImage = () => {
    img = new window.Image();
    img.onload = imageLoaded;
    img.src = fr.result;
  };

  const newFile = () => {
    const filed = inputField.current;
    const file = filed.files[0];
    fr = new window.FileReader();
    fr.onload = createImage;
    fr.readAsDataURL(file);
  };

  return (
    <div>
      <input ref={inputField} type="file" accept="image/png, image/jpeg" />
      <button type="button" onClick={newFile}>
        Draw
      </button>
    </div>
  );
}

AddPhoto.propTypes = {
  canvas: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(window.Element) }),
  ]).isRequired,
};

export default AddPhoto;
