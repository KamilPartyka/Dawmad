import PropTypes from 'prop-types';
import { StyedButton } from './styles';

function Button({ children, color, ...props }) {
  return (
    <StyedButton {...props} color={color}>
      {children}
    </StyedButton>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  color: PropTypes.string.isRequired,
};
Button.defaultProps = {};

export default Button;
