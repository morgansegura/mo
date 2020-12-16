import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { HeroSplit, AuthorCard } from "../components"
// import avatarImage from "../assets/images/morgansegura-400x400.jpg"
import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si"

export function HomeHeroContainer() {
    const data = useStaticQuery(
        graphql`
            query {
                heroImage: file(relativePath: { eq: "quote.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                avatar: file(relativePath: { eq: "morgansegura-400x400.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )
    const heroImage = data.heroImage.childImageSharp.fluid
    const avatar = data.avatar.childImageSharp.fluid

    return (
        <HeroSplit>
            <HeroSplit.ImageContainer className="relative">
                <BackgroundImage
                    Tag="div"
                    className="bg-image w-full"
                    fluid={heroImage}
                ></BackgroundImage>
            </HeroSplit.ImageContainer>

            <HeroSplit.Body className="py-12 px-10 lg:px-16">
                <HeroSplit.TextSmall className="flex justify-between font-light text-base font-sans tracking-normal">
                    <div className="mini-title">Creative Technologist</div>
                    <div className="flex justify-end items-center">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/morgansegura"
                        >
                            <SiGithub className="w-4 h-4 mr-3" />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/morgan-segura-4b08429/"
                        >
                            <SiLinkedin className="w-4 h-4 mr-3" />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://twitter.com/codestandard"
                        >
                            <SiTwitter className="w-4 h-4" />
                        </a>
                    </div>
                </HeroSplit.TextSmall>
                <HeroSplit.Title className="relative flex items-center font-sans font-bold">
                    <div className="relative">Morgan Segura</div>
                </HeroSplit.Title>
                <HeroSplit.TextContainer className="font-sans text-base leading-loose">
                    <HeroSplit.Text className="mb-3 pt-2">
                        I have been working in the industry for over a decade
                        and I am still excited to get up everyday and code,
                        design and learn something new! Technology keeps
                        progressing and I love being able to take part in this
                        ever-changing movement.
                    </HeroSplit.Text>
                    <HeroSplit.Text className="pt-2 text-accent">
                        Currently looking for the right organization to be a
                        part of! While I do have clients, I am looking to be a
                        part of a great team who is using our craft to make a
                        positive difference in the world.
                    </HeroSplit.Text>
                </HeroSplit.TextContainer>
                <HeroSplit.ButtonLink
                    className="mt-6 ml-auto text-center block py-3 px-6 rounded-md shadow-md font-semibold text-lg font-sans"
                    to={"/"}
                >
                    Download CV
                </HeroSplit.ButtonLink>
            </HeroSplit.Body>
        </HeroSplit>
    )
}
