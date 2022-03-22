import PropTypes from 'prop-types';
import { StyledInput, StyledInputLabel } from './styles';

function Input({ inputRef, onChange, id, color }) {
  return (
    <>
      <StyledInput
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg"
        onChange={onChange}
        id={id}
      />
      <StyledInputLabel htmlFor="file" color={color}>
        add file
      </StyledInputLabel>
    </>
  );
}

Input.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(window.Element) }),
  ]).isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Input;
