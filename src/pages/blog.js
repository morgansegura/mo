import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { LayoutContainer } from "../containers/layout"
import { Card } from "../components"

// const IndexWrapper = styled.main``

// const PostWrapper = styled.div``

const Image = styled(Img)`
    border-radius: 5px;
`

export default ({ data }) => {
    return (
        <LayoutContainer>
            <div className="h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:p-6 mb-4">
                    {data.allMdx.nodes.map(
                        ({ id, excerpt, frontmatter, fields }) => (
                            <Card key={id} className="card p-4 rounded-sm">
                                <Link to={fields.slug}>
                                    {!!frontmatter.cover ? (
                                        <Image
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
        </LayoutContainer>
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
