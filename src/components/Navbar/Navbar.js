import PropTypes from 'prop-types';
import AddPhoto from 'components/AddPhoto';
import Title from 'components/Title';
import Button from 'components/Button';
import { StyledWrapper } from './styles';

function Navbar({ setItems }) {
  return (
    <StyledWrapper>
      <div>
        <Title>Drawmad</Title>
      </div>
      <div>
        <AddPhoto setItems={setItems} />
        <Button color="secondary" onClick={() => setItems([])}>
          Reset
        </Button>
      </div>
    </StyledWrapper>
  );
}

Navbar.propTypes = {
  setItems: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(window.Element) }),
  ]).isRequired,
};

export default Navbar;
