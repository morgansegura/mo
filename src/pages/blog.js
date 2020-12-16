import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { LayoutContainer } from "../containers/layout"
import { Containers, Card } from "../components"

const IndexWrapper = styled.main``

const PostWrapper = styled.div``

const Image = styled(Img)`
    border-radius: 5px;
`

export default ({ data }) => {
    return (
        <LayoutContainer>
            <Containers className="h-full p-4 lg:p-6">
                <Card className="card p-4 rounded-sm">
                    <div className="">
                        {data.allMdx.nodes.length}
                        {/* <Dump data={data}></Dump> */}
                        {data.allMdx.nodes.map(
                            ({ id, excerpt, frontmatter, fields }) => (
                                <PostWrapper key={id}>
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
                                </PostWrapper>
                            )
                        )}
                    </div>
                </Card>
            </Containers>
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
