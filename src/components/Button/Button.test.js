import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Button component', () => {
  test('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow(
      <Button color="primary" onClick={mockCallBack}>
        Ok!
      </Button>
    );
    button.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
