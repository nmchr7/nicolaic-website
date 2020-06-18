export default () => (
  <div>
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
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
          sans-serif;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      a {
        text-decoration: underline;
        color: #fff;
      }
      a:hover {
        opacity: 0.5;
      }
      img {
        max-width: 100%;
      }
      strong {
        font-weight: bold;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      li {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
          sans-serif;
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
      h3,
      h4 {
        font-size: 1.25rem;
      }
      code,
      .code {
        border: 1px solid #94959e;
        border-radius: 4px;
        font-size: 0.9rem;
        padding: 0.1rem 0.2rem;
        background-color: #3f4052;
        color: #8bcc57;
      }
      @media (min-width: 1280px) {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
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
  </div>
);
