import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { LayoutContainer } from "../containers/layout"

const IndexWrapper = styled.main``

const PostWrapper = styled.div`

`

const Image = styled(Img)`
    border-radius: 5px;
`

export default ({ data }) => {
    return (
        <LayoutContainer>
            <IndexWrapper className="px-8 pb-8">
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols gap-8 ${data.all}`}>
                    {data.allMdx.nodes.map(
                        ({ id, excerpt, frontmatter, fields }) => (
                            <PostWrapper key={id} className="bg-gray-200">
                                <Link to={fields.slug} className="height: 100%; width: 100%;">
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
                            </PostWrapper>
                        )
                    )}
                </div>
            </IndexWrapper>
        </LayoutContainer>
    )
}

export const query = graphql`
    query SITE_PROJECT_QUERY {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
                frontmatter: {
                    published: { eq: true }
                    templateKey: { eq: "projects" }
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
