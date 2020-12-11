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

import * as S from "../styles/home/styled"

import { technology, interests } from "../fixtures"

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
                    <ExpertiseContainer />
                </Containers.Child>
                <Containers.Child className="overflow-hidden bg-gradient">
                    <DesignCreativeContainer />
                </Containers.Child>
                <Containers.Child>
                    <DesignGoalsContainer />
                </Containers.Child>
                <Containers.Child className="bg-gradient relative overflow-hidden">
                    <DevCreativeContainer />
                </Containers.Child>
                <Containers.Child>
                    <DevGoalsContainer />
                </Containers.Child>

                <Containers.Child>
                    <PreferredTechContainer />
                </Containers.Child>
                <Containers.Child>
                    <LearningGoalsContainer />
                </Containers.Child>
            </Containers>
        </LayoutContainer>
    )
}

export default IndexPage
