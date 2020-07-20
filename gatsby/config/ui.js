const {
  manifest: { theme_color },
} = require('../../site-settings')

module.exports = [
  'gatsby-plugin-fastclick',
  'gatsby-plugin-transition-link',
  {
    resolve: 'gatsby-plugin-nprogress',
    options: {
      // Setting a color is optional.
      color: theme_color,
      // Disable the loading spinner.
      showSpinner: false,
    },
  },
]
