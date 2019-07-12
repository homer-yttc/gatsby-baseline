module.exports = [
  {
    resolve: `gatsby-plugin-recaptcha`,
    options: {
      // async: false,
      // defer: false,
      // args: `?onload=onloadCallback&render=explicit`,
    },
  },
  {
    resolve: `gatsby-plugin-csp`,
    options: {
      disableOnDev: true,
      // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
      reportOnly: false,
      mergeScriptHashes: true, // you can disable scripts sha256 hashes
      mergeStyleHashes: true, // you can disable styles sha256 hashes
      mergeDefaultDirectives: true,
      directives: {
        "script-src": `'self' www.google-analytics.com`,
        "style-src": `'self' 'unsafe-inline'`,
        "img-src": `'self' data: www.google-analytics.com`,
        // you can add your directives or override defaults
      },
    },
  },
]
