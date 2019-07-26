const { srcPaths } = require(`../../site-settings`)

module.exports = [
  `gatsby-plugin-fastclick`,
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      includePaths: [srcPaths.styles],
      useResolveUrlLoader: {
        options: {
          sourceMap: true, //default is false
        },
      },
    },
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Oswald`,
          subsets: [`latin`],
        },
        {
          family: `Open Sans`,
          variants: [`400`, `700`],
        },
      ],
    },
  },
  `gatsby-plugin-transition-link`,
  {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      // Setting a color is optional.
      color: `tomato`,
      // Disable the loading spinner.
      showSpinner: false,
    },
  },
]
