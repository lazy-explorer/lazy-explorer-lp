const autoprefixer = require("autoprefixer");

module.exports = {
  siteMetadata: {
    title: "Gromsby Demo"
  },
  pathPrefix: "/gatsby-starter-grommet",
  plugins: [
    {
      resolve: "custom-sass-loader",
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ["last 2 versions"]
          })
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111504724-1",
        anonymize: true
      }
    }
  ]
};
