module.exports = {
    siteMetadata: {
        title: `Morgan Segura 2020`,
        description: `This is the personal blog and portfolio site of Morgan Seugra. Welcome ^^`,
        author: `@codestandard`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                ],
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/posts`,
                name: `posts`,
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
