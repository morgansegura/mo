import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import DefaultLayout from "../shared/layouts/DefaultLayout"
import Card from "../shared/components/UIElements/Card"

export default ({ data }) => {
    return (
        <DefaultLayout>
            <div className="h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:p-6 mb-4">
                    {data.allMdx.nodes.map(
                        ({ id, excerpt, frontmatter, fields }) => (
                            <Card key={id} className="card p-4">
                                <Link to={fields.slug}>
                                    {!!frontmatter.cover ? (
                                        <Img
                                            fluid={
                                                frontmatter.cover
                                                    .childImageSharp.fluid
                                            }
                                        />
                                    ) : null}
                                    <h1>{frontmatter.title}</h1>
                                    <p>{frontmatter.date}</p>
                                    <p>{excerpt}</p>
                                </Link>
                            </Card>
                        )
                    )}
                </div>
            </div>
        </DefaultLayout>
    )
}

export const query = graphql`
    query SITE_INDEX_QUERY {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
                frontmatter: {
                    published: { eq: true }
                    templateKey: { eq: "blog" }
                }
            }
        ) {
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date(formatString: "YYYY MMMM Do")
                    cover {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 2000, traceSVG: { color: "#639" }) {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                }
                fields {
                    slug
                }
            }
        }
    }
`
