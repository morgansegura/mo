import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "../shared/components/ConfigElements/SEO"
import DefaultLayout from "../shared/layouts/DefaultLayout"
import CodeBlock from "../shared/components/UIElements/CodeBlock"
import { useSiteMetadata } from "../shared/hooks/site-metadata"

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
        <DefaultLayout>
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
            <div className="pt-32 pb-20 px-10 lg:px-16 lg:pt-20">
                <h1 className="font-bold text-2xl">{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
                {previous === false ? null : (
                    <React.Fragment>
                        {previous && (
                            <Link to={previous.fields.slug}>
                                <p>{previous.frontmatter.title}</p>
                            </Link>
                        )}
                    </React.Fragment>
                )}
                {next === false ? null : (
                    <React.Fragment>
                        {next && (
                            <Link to={next.fields.slug}>
                                <p>{next.frontmatter.title}</p>
                            </Link>
                        )}
                    </React.Fragment>
                )}
            </div>
        </DefaultLayout>
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
