import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { LayoutContainer } from "../containers/layout"
import { HomeHeroContainer } from "../containers/home-hero"
import { DevGoalsContainer } from "../containers/dev-goals"
import { DesignGoalsContainer } from "../containers/design-goals"
import { ExpertiseContainer } from "../containers/areas-of-expertise"
import { DesignCreativeContainer } from "../containers/design-creative"
import { DevCreativeContainer } from "../containers/dev-creative"
import { LearningGoalsContainer } from "../containers/learning-goals"
import { PreferredTechContainer } from "../containers/preferred-tech"

import SEO from "../components/seo"
import { Containers } from "../components"

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
                title="The struggle is real"
                keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
            />
            <Containers>
                <Containers.Child>
                    <HomeHeroContainer />
                </Containers.Child>
                <Containers.Child>
                    <ExpertiseContainer className="pt-8" />
                </Containers.Child>
                <Containers.Child>
                    <DesignCreativeContainer className="overflow-hidden bg-gradient rounded-sm mt-8" />
                </Containers.Child>
                <Containers.Child className="flex flex-col justify-center">
                    <DesignGoalsContainer className="pt-8" />
                </Containers.Child>
                <Containers.Child>
                    <PreferredTechContainer className="pt-8" />
                </Containers.Child>
                <Containers.Child>
                    <DevCreativeContainer className="bg-gradient relative overflow-hidden rounded-sm mt-8" />
                </Containers.Child>
                <Containers.Child>
                    <DevGoalsContainer className="pt-8" />
                </Containers.Child>
                <Containers.Child>
                    <LearningGoalsContainer className="py-8" />
                </Containers.Child>
            </Containers>
        </LayoutContainer>
    )
}

export default IndexPage
