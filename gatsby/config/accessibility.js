const plugins = []

// Only execute during development.
if (process.env === 'development') {
  plugins.push({
    resolve: 'gatsby-plugin-accessibilityjs',
    options: {
      injectStyles: `
        .accessibility-error {
          box-shadow: 0 0 3px 1px #f00;
          background-color: rgba(255, 0, 0, 0.25);
          position: relative;
        }
        .accessibility-error:before {
          content: "A11Y";
          position: absolute;
          top: 0;
          left: 0;
          color: #fff;
          font-size: 10px;
          background-color: rgba(255, 0, 0, 0.5);
          transform: translateY(-100%);
        }
      `,
      errorClassName: 'accessibility-error',
      // onError: (error) => {
      //   // do something with the error
      // },
    },
  })
}

module.exports = plugins
