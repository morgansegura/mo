import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import SEO from "../components/seo"
import { LayoutContainer } from "../containers/layout"
import { Article, CodeBlock } from "../components"
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

    const shortcodes = { CodeBlock }
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
            <Article className="pt-32 pb-20 px-10 lg:px-16 lg:pt-20">
                <Article.Title className="font-bold text-2xl">
                    {frontmatter.title}
                </Article.Title>
                <Article.Text>{frontmatter.date}</Article.Text>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
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
            </Article>
        </LayoutContainer>
    )
}

export const query = graphql`
    query ProjectBySlug($slug: String!) {
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