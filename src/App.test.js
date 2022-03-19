import { render } from '@testing-library/react';
import { Title } from 'App';

describe('Heading Component', () => {
  test('Renders children text', () => {
    const { getByText } = render(<Title>Hello</Title>);

    getByText('Hello');
  });
});
