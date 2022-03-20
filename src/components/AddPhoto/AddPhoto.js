import { useRef } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';

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
    <Input
      inputRef={inputField}
      onChange={inputToURL}
      id="file"
      color="tertiary"
    />
  );
}

AddPhoto.propTypes = {
  setItems: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(window.Element) }),
  ]).isRequired,
};

export default AddPhoto;
