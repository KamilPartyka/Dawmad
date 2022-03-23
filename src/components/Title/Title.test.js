import { render } from '@testing-library/react';
import Title from 'components/Title';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

describe('Title Component', () => {
  test('Renders children text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Title>Hello</Title>
      </ThemeProvider>
    );

    getByText('Hello');
  });
});
