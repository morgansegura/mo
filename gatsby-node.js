const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require("gatsby-remark-relative-images-v2")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve("src/templates/blog-post.js")
    const projectPostTemplate = path.resolve("src/templates/project-post.js")

    return graphql(`
        {
            allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { frontmatter: { published: { eq: true } } }
            ) {
                nodes {
                    fields {
                        slug
                    }
                    frontmatter {
                        templateKey
                        title
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            throw result.errors
        }

        const posts = result.data.allMdx.nodes

        // create page for each mdx node
        posts.forEach((post, index) => {
            const previous =
                index === posts.length - 1 ? null : posts[index + 1]
            const next = index === 0 ? null : posts[index - 1]

            let template
            const templateKey = post.frontmatter.templateKey

            if (templateKey === "blog") {
                template = blogPostTemplate
            } else if (templateKey === "projects") {
                template = projectPostTemplate
            }

            createPage({
                path: post.fields.slug,
                component: template,
                context: {
                    slug: post.fields.slug,
                    previous,
                    next,
                },
            })
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    fmImagesToRelative(node)
    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
