import theme from './theme';

export default () => (
  <style jsx global>{`
    * {
      box-sizing: inherit;
      line-height: 1.5;
    }
    html {
      box-sizing: border-box;
      overflow-y: scroll;
    }
    body {
      margin: 0;
      padding: 0 20px;
      overflow-x: hidden;
      background-color: ${theme.color.background};
      font-family: ${theme.font.family};
      font-size: ${theme.font.family};
      color: ${theme.color.primary};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    h1,
    h2,
    p {
      font-family: ${theme.font.family};
      margin: 0;
      margin-bottom: 1rem;
      padding: 0;
      color: inherit;
    }
    h1 {
      font-size: 1.25rem;
    }
    h2 {
      font-size: 1rem;
    }
  `}</style>
);
