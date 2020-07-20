module.exports = [
  {
    resolve: 'gatsby-plugin-recaptcha',
    options: {
      // async: false,
      // defer: false,
      // args: '?onload=onloadCallback&render=explicit',
    },
  },
  {
    resolve: 'gatsby-plugin-csp',
    options: {
      disableOnDev: true,
      // Changes Header to Content-Security-Policy-Report-Only for csp testing purposes
      reportOnly: false,
      mergeScriptHashes: true, // you can disable scripts sha256 hashes
      mergeStyleHashes: false, // you can disable styles sha256 hashes
      mergeDefaultDirectives: true,
      directives: {
        'script-src':
          "'self' 'unsafe-eval' 'unsafe-inline' data: www.google.com www.gstatic.com www.google-analytics.com www.googletagmanager.com maps.googleapis.com widget.clutch.co *.glassdoor.com",
        'style-src':
          "'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com *.glassdoor.com",
        'img-src':
          "'self' data: www.google-analytics.com maps.gstatic.com maps.googleapis.com *.glassdoor.com",
        'font-src': "'self' data: www.google-analytics.com fonts.googleapis.com fonts.gstatic.com",
        'frame-src': "'self' widget.clutch.co *.glassdoor.com",
        // you can add your directives or override defaults
      },
    },
  },
]
