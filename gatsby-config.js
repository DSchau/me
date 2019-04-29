module.exports = {
  siteMetadata: {
    title: 'Kyle Gill | Developer & Designer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-favicon',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Kyle Gill | Developer & Designer',
        short_name: 'Kyle Gill',
        start_url: '/',
        background_color: '#E6F1FF',
        theme_color: '#5390F0',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@kyle.robert.gill`,
        limit: 200,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato'],
        },
      },
    },
  ],
}
