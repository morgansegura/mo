module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets\/images\/.*\.svg/,
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts-v2`,
            options: {
                fonts: [
                    {
                        family: "Open Sans",
                        weights: ["300", "400", "600", "700"],
                    },
                    {
                        family: "Cairo",
                        weights: ["400", "600", "700"],
                    },
                    {
                        family: "Roboto Slab",
                        weights: ["400", "700"],
                    },
                ],
            },
        },
        `gatsby-plugin-postcss`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/segura-icon-light.svg`,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
