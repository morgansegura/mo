import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import SEO from "../components/seo"
import { LayoutContainer } from "../containers/layout"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export default ({ data, pageContext }) => {
    const {
        image,
        siteUrl,
        siteLanguage,
        siteLocale,
        twitterUsername,
        authorName,
    } = useSiteMetadata()
    const { frontmatter, body, fields, excerpt } = data.mdx
    const { title, date, cover } = frontmatter
    const { previous, next } = pageContext
    return (
        <LayoutContainer>
            <SEO
                title={title}
                description={excerpt}
                image={
                    cover === null
                        ? `${siteUrl}${image}`
                        : `${siteUrl}${cover.publicURL}`
                }
                pathname={`${siteUrl}${fields.slug}`}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
                author={authorName}
                article={true}
                publishedDate={date}
                modifiedDate={new Date(Date.now()).toISOString()}
            />
            <div className="p-16 lg:p-20 h-full bg-blue-200">
                <h1 className="font-bold text-2xl">{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <MDXRenderer>{body}</MDXRenderer>
                {previous === false ? null : (
                    <>
                        {previous && (
                            <Link to={previous.fields.slug}>
                                <p>{previous.frontmatter.title}</p>
                            </Link>
                        )}
                    </>
                )}
                {next === false ? null : (
                    <>
                        {next && (
                            <Link to={next.fields.slug}>
                                <p>{next.frontmatter.title}</p>
                            </Link>
                        )}
                    </>
                )}
            </div>
        </LayoutContainer>
    )
}

export const query = graphql`
    query PostBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
                cover {
                    publicURL
                }
            }
            body
            excerpt
            fields {
                slug
            }
        }
    }
`
