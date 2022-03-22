import PropTypes from 'prop-types';
import { StyledButton } from './styles';

function Button({ children, color, ...props }) {
  return (
    <StyledButton {...props} color={color}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
