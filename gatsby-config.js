module.exports = {
    siteMetadata: {
        title: `Morgan Segura 2020`,
        siteUrl: `https://morgansegura.com`,
        description: `This is the personal blog and portfolio site of Morgan Seugra. Welcome ^^`,
        author: `@codestandard`,
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-transformer-yaml`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        "gatsby-plugin-twitter",
        "gatsby-plugin-sitemap",
        // "gatsby-plugin-preact",
        // "gatsby-plugin-loadable-components-ssr",
        // Plugin MDX for Blog
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                defaultLayouts: {
                    posts: require.resolve("./src/templates/blog-post.js"),
                    default: require.resolve("./src/templates/blog-post.js"),
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-transformer-remark`,
                        options: {
                            plugins: [
                                {
                                    resolve: "gatsby-remark-relative-images-v2",
                                },
                                {
                                    resolve: "gatsby-remark-related-posts",
                                    options: {
                                        posts_dir: `${__dirname}/content/posts`,
                                    },
                                },
                                {
                                    resolve: `gatsby-plugin-netlify-cms-paths`,
                                    options: {
                                        cmsConfig: `/static/admin/config.yml`,
                                    },
                                },
                                {
                                    resolve: `gatsby-remark-images`,
                                    options: {
                                        maxWidth: 1000,
                                    },
                                },
                                {
                                    resolve: `gatsby-remark-prismjs`,
                                    options: {
                                        classPrefix: "language-",
                                        inlineCodeMarker: null,
                                    },
                                },
                                "gatsby-remark-autolink-headers",
                                {
                                    resolve: `gatsby-remark-copy-linked-files`,
                                },
                                {
                                    resolve: `gatsby-remark-smartypants`,
                                },
                            ],
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
                    {
                        resolve: "gatsby-background-image-es5",
                        options: {
                            // add your own characters to escape, replacing the default ':/'
                            specialChars: "/:",
                        },
                    },
                ],
            },
        },
        // Filesystem
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
                path: `${__dirname}/src/components`,
                name: `components`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/posts`,
                name: `posts`,
            },
        },
        // Styled Components
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        // SVGs
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets\/images\/.*\.svg/,
                },
            },
        },
        // Google Fonts
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
        // Feed
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                    {
                    site {
                        siteMetadata {
                            title
                            description
                            siteUrl
                        }
                    }
                    }
                `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMdx } }) => {
                            return allMdx.edges.map(edge => {
                                return Object.assign(
                                    {},
                                    edge.node.frontmatter,
                                    {
                                        description: edge.node.excerpt,
                                        data: edge.node.frontmatter.date,
                                        url:
                                            site.siteMetadata.siteUrl +
                                            edge.node.fields.slug,
                                        guid:
                                            site.siteMetadata.siteUrl +
                                            edge.node.fields.slug,
                                        custom_elements: [
                                            {
                                                "content:encoded":
                                                    edge.node.html,
                                            },
                                        ],
                                    }
                                )
                            })
                        },
                        /* if you want to filter for only published posts, you can do
                         * something like this:
                         * filter: { frontmatter: { published: { ne: false } } }
                         * just make sure to add a published frontmatter field to all posts,
                         * otherwise gatsby will complain
                         **/
                        query: ` {
                            allMdx(
                            limit: 1000,
                            sort: { order: DESC, fields: [frontmatter___date] },
                            ) {
                                edges {
                                    node {
                                        fields { slug }
                                        frontmatter {
                                            title
                                            date
                                        }
                                        body
                                    }
                                }
                            }
                        }`,
                        output: "/rss.xml",
                        title: "Morgan Segura RSS feed",
                    },
                ],
            },
        },
        // Manifest
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `morgan-segura`,
                short_name: `segura`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/segura-icon-light.svg`,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
}
