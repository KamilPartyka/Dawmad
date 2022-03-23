import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Input from './Input';

test('should upload the file', () => {
  const file = new window.File(['hello'], 'hello.png', { type: 'image/png' });
  const mockCallBack = jest.fn();
  const mockRef = jest.fn();

  const result = render(
    <ThemeProvider theme={theme}>
      <Input
        onChange={mockCallBack}
        inputRef={mockRef}
        id="file"
        color="tertiary"
      />
    </ThemeProvider>
  );

  const input = result.container.querySelector('#file');
  user.upload(input, file);

  expect(input.files[0]).toEqual(file);
  expect(input.files).toHaveLength(1);
});
