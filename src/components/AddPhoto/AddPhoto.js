import React, { useRef } from 'react';

import PropTypes from 'prop-types';
import { StyledInput, StyledInputLabel } from './styles';

function AddPhoto({ setItems }) {
  const inputField = useRef(null);

  const idGenerator = () => `_${Math.random().toString(36).substr(2, 9)}`;

  const inputToURL = () => {
    const filed = inputField.current;
    const file = filed.files[0];

    const reader = new window.FileReader();
    reader.onloadend = () => {
      setItems((prevState) => [
        ...prevState,
        {
          x: Math.floor(Math.random() * 400) + 1,
          y: Math.floor(Math.random() * 200) + 1,
          src: reader.result,
          id: idGenerator(),
        },
      ]);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <StyledInput
        ref={inputField}
        type="file"
        accept="image/png, image/jpeg"
        onChange={inputToURL}
        id="file"
      />
      <StyledInputLabel htmlFor="file">Select file</StyledInputLabel>
    </>
  );
}

AddPhoto.propTypes = {
  setItems: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(window.Element) }),
  ]).isRequired,
};

export default AddPhoto;
