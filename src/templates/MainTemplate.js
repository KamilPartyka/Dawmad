import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyles';

function MainTemplate({ children }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Drawmad</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Rock+Salt&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </HelmetProvider>
  );
}
MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
