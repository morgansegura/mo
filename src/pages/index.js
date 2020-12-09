import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { LayoutContainer } from "../containers/layout"
import SEO from "../components/seo"
import { HeroSplit, BlockNote, CodeBlock, Containers } from "../components"

import * as S from "../styles/home/styled"
import quoteImage from "../assets/images/quote.jpg"

import { skills, interests, technology } from "../data"
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
                    <HeroSplit>
                        <HeroSplit.ImageContainer>
                            <HeroSplit.Image
                                className="w-full h-full"
                                style={{
                                    backgroundImage: `url(${quoteImage})`,
                                }}
                                alt=""
                            />
                        </HeroSplit.ImageContainer>

                        <HeroSplit.Body className="py-12 px-10 lg:px-16 lg:py-18">
                            <HeroSplit.TextSmall className="block font-thin text-base font-sans tracking-normal">
                                Creative Technologist
                            </HeroSplit.TextSmall>
                            <HeroSplit.Title className="font-sans font-bold">
                                Morgan Segura
                            </HeroSplit.Title>
                            <HeroSplit.TextContainer className="font-sans text-base leading-loose">
                                <HeroSplit.Text className="mb-3 pt-2">
                                    I have been working in the industry for over
                                    a decade I am still excited to get up
                                    everyday and code, design and learn
                                    something new!
                                </HeroSplit.Text>
                                <HeroSplit.Text className="pt-2"></HeroSplit.Text>
                            </HeroSplit.TextContainer>
                            <HeroSplit.ButtonLink
                                className="mt-6 ml-auto text-center inline-flex lg:block py-3 px-6 rounded-md shadow-md font-semibold text-lg font-sans"
                                to={"/"}
                            >
                                Download CV
                            </HeroSplit.ButtonLink>
                        </HeroSplit.Body>
                    </HeroSplit>
                </Containers.Child>
                <Containers.Child>
                    <S.SkillsBlock className="h-full p-10 lg:p-16">
                        <header className="mb-6">
                            <h3 className="inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">
                                Areas of expertise
                            </h3>
                        </header>
                        <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-4">
                            {skills.map((skill, i) => (
                                <div
                                    key={i}
                                    className="card p-4 rounded-md shadow-lg"
                                >
                                    <div className="flex items-center mb-1">
                                        {skill.icon}
                                        <h4 className="font-semibold text-lg">
                                            {skill.title}
                                        </h4>
                                    </div>
                                    <p className="p-2">{skill.body}</p>
                                </div>
                            ))}
                        </div>
                    </S.SkillsBlock>
                </Containers.Child>
                <Containers.Child>
                    <BlockNote className="h-full relative flex flex-col py-16 px-10 lg:py-20 lg:px-16">
                        <div className="flex justify-between">
                            <div className="w-1/2 self-center">
                                <CodeBlock
                                    browser={true}
                                    className="with--label"
                                >
                                    <CodeBlock.Label>
                                        Javascript
                                    </CodeBlock.Label>
                                    <CodeBlock.Row>
                                        <span className="const">const </span>
                                        <span className="">happyFun </span>
                                        <span className="punct"> = </span>
                                        <span className="key"> 'goodness'</span>
                                        <span className="punct">; </span>
                                    </CodeBlock.Row>
                                    <CodeBlock.Row className="typewriter">
                                        <span className="rule">{`<span>`}</span>
                                        <span className="string">
                                            {" "}
                                            You bet your ass{" "}
                                        </span>
                                        <span className="rule">{`</span>`}</span>
                                    </CodeBlock.Row>
                                </CodeBlock>
                            </div>
                            <div className="w-1/2 h-full bg-transparent flex flex-col text-right">
                                <BlockNote.Title className="">
                                    Code
                                </BlockNote.Title>
                                <BlockNote.Subtitle className="pl-12">
                                    Over 10 years of{" "}
                                    <strong className="font-bold">
                                        professional experience
                                    </strong>{" "}
                                </BlockNote.Subtitle>
                            </div>
                        </div>
                        <BlockNote.Text className="self-end text-right w-2/3">
                            I've been in the weeds, worked countless hours and
                            put in over ten years designing and devloping
                            professional code for clients and employers. My
                            favorite part of my professional
                        </BlockNote.Text>
                    </BlockNote>
                </Containers.Child>
                <Containers.Child>
                    <S.StackBlock className="h-full p-10 lg:p-16">
                        <header className="mb-6">
                            <h3 className="inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">
                                Preferred Tech
                            </h3>
                        </header>

                        <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
                            {technology.map((tech, i) => (
                                <a
                                    key={i}
                                    className="card relative col-span-1 flex justify-center py-8 px-8"
                                    href={tech.url}
                                >
                                    <div className="icon-container rounded-full p-2">
                                        {tech.icon}
                                    </div>
                                    <p className="absolute z-10 right-0 -mr-4 xl:mr-8 flex h-6 pl-2 pr-3 items-center text-sm font-headline pl-2 bg-gray-200 rounded-tl-full rounded-tr-full rounded-br-full">
                                        {tech.caption}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </S.StackBlock>
                </Containers.Child>
                <Containers.Child>Some Designs</Containers.Child>
                <Containers.Child>
                    <BlockNote className="h-full left py-16 px-10 lg:py-20 lg:px-16 flex flex-col text-left">
                        <BlockNote.Title>Design</BlockNote.Title>
                        <BlockNote.Subtitle>
                            powerful interactive prototypes
                        </BlockNote.Subtitle>
                        <BlockNote.Text>
                            Seamlessly transform your static screen designs into
                            fully responsive, interactive, animated prototypes
                            directly in Sketch, Figma or Adobe XD.
                        </BlockNote.Text>
                    </BlockNote>
                </Containers.Child>
                <Containers.Child>
                    <S.TestimonialBlock className="h-full p-10 lg:p-16">
                        <header className="mb-6">
                            <h3 className="inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">
                                My Network
                            </h3>
                        </header>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6">
                            <div className="relative mb-20 max-w-lg mr-auto">
                                <div className="card p-4 font-sans text-sm flex rounded-md shadow-lg">
                                    <p>
                                        Dallas cowboys roseanne barr keds game
                                        boy color. Once you pop you can’t stop
                                        pearl jam flip flops tommy hilfiger
                                        chillax renting movies at a store, acid
                                        wash the simpsons push pencils nirvana.
                                        Pop punk dawg destiny’s child dial-up
                                        minesweeper cut-off jean shorts. Visor
                                        blockbuster video skidz and zubas your
                                        mom.
                                    </p>
                                </div>
                                <img
                                    className="avatar -mt-2 lg:-ml-8 w-20 h-20 rounded-full absolute"
                                    src="https://uifaces.co/our-content/donated/s9W6Vk2d.jpg"
                                    alt="Jose Jimenez"
                                />
                                <div className="absolute label mt-2 ml-24 xl:ml-16 flex flex-col font-sans rounded-tr-full rounded-br-full rounded-bl-full py-2 px-10">
                                    <span className="text-base font-semibold -mb-2">
                                        Jose Jimenez
                                    </span>
                                    <span className="text-sm">
                                        Locost Accessories
                                    </span>
                                </div>
                            </div>
                            <div className="relative mb-20 max-w-lg ml-auto">
                                <div className="card font-sans p-4 text-sm flex rounded-md shadow-lg">
                                    <p>
                                        Fargo gatorade courtney love flat tops
                                        scrunchies, toy story dennis rodman big
                                        lebowski kicks. Generation Y skifree
                                        push pencils alternative rock,
                                        goosebumps baywatch madonna desert storm
                                        magic johnson. Tupac shakur warheads sup
                                        gak, kazaa velcro sneakers berry lips
                                        steve urkel. Hush puppies pizza bagels
                                        apollo 13 julia roberts g-shocks keepin’
                                        it real.
                                    </p>
                                </div>
                                <img
                                    className="avatar -mt-2 lg:-ml-8 w-20 h-20 rounded-full absolute"
                                    src="https://images.generated.photos/qmdENySIv23bkva-PxTHsoxVbZQdB1Wka0ZPcH5shHY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzMDE4MzAuanBn.jpg"
                                    alt="Jose Jimenez"
                                />
                                <div className="absolute label mt-2 ml-24 xl:ml-16 flex flex-col font-sans rounded-tr-full rounded-br-full rounded-bl-full py-2 px-10">
                                    <span className="text-base font-semibold -mb-2">
                                        Mia Johnson
                                    </span>
                                    <span className="text-sm">
                                        Locost Accessories
                                    </span>
                                </div>
                            </div>
                        </div>
                    </S.TestimonialBlock>
                </Containers.Child>
                <Containers.Child>
                    <S.StudyBlock className="h-full p-10 lg:p-16">
                        <header className="mb-6">
                            <h3 className="inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">
                                Interested in Learning
                            </h3>
                        </header>
                        <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-4">
                            {interests.map((item, i) => (
                                <div
                                    key={i}
                                    className="card p-4 rounded-md shadow-lg"
                                >
                                    <div className="flex items-center mb-1">
                                        {item.icon}
                                        <h4 className="font-semibold text-lg">
                                            {item.title}
                                        </h4>
                                    </div>
                                    <p className="p-2">{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </S.StudyBlock>
                </Containers.Child>
            </Containers>
        </LayoutContainer>
    )
}

export default IndexPage
