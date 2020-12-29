import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import DefaultLayout from "../shared/layouts/DefaultLayout"
import SEO from "../shared/components/ConfigElements/SEO"

const IndexPage = () => {
    // const data = useStaticQuery(graphql`
    //     query HomePageQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)
    return (
        <DefaultLayout>
            <SEO
                title="I make interactive web applications to help make your experience better."
                keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
            />
            Home Page
        </DefaultLayout>
    )
}

export default IndexPage
