export default () => (
  <style jsx global>{`
    * {
      box-sizing: inherit;
      line-height: 1.5;
      transition: opacity 0.2s ease;
    }
    html {
      box-sizing: border-box;
      overflow-y: scroll;
    }
    body {
      margin: 0;
      overflow-x: hidden;
      background-color: #343747;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif;
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    strong {
      font-weight: bold;
    }
    h1,
    h2,
    h3,
    p,
    li {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      margin-bottom: 1rem;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      color: inherit;
      text-rendering: optimizeLegibility;
    }
    h1 {
      font-size: 1.75rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    @media (min-width: 1280px) {
      h1,
      h2,
      h3,
      p {
        letter-spacing: -1px;
      }
      h1 {
        letter-spacing: -1px;
      }
      h2 {
        letter-spacing: -0.75px;
      }
      h3 {
        letter-spacing: -0.5px;
        font-weight: normal;
      }
    }
  `}</style>
);
