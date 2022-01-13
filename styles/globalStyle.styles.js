import { css, Global } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap');

      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
          Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
          Helvetica Neue, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }

      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h5 {
        margin: 0;
      }
    `}
  />
);
