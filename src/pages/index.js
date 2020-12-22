import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { LayoutContainer } from "../containers/layout"
import { HomeHeroContainer } from "../containers/home-hero"
import { DesignCreativeContainer } from "../containers/design-creative"
import { DevCreativeContainer } from "../containers/dev-creative"
import { SEO } from "../components"

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
        <LayoutContainer>
            <SEO
                title="I make interactive web applications to help make your experience better."
                keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
            />
            <HomeHeroContainer />

        </LayoutContainer>
    )
}

export default IndexPage
