import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { LayoutContainer } from "../containers/layout"
import SEO from "../components/seo"
import { HeroSplit, BlockNote, CodeBlock, Containers } from "../components"

import * as S from "../styles/home/styled"
import quoteImage from "../assets/images/quote.jpg"
import DigitalBG from "../assets/images/digital.svg"
import DesignBG from "../assets/images/design.svg"
import DesignIcons from "../assets/images/design-icons.svg"

import { skills, interests, technology, currents } from "../fixtures"

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
                                    a decade and I am still excited to get up
                                    everyday and code, design and learn
                                    something new! Technology keeps progressing
                                    and I love being able to take part in this
                                    ever-changing movement.
                                </HeroSplit.Text>
                                <HeroSplit.Text className="pt-2 text-accent">
                                    Currently looking for the right organization
                                    to be a part of! While I do have clients, I
                                    am looking to be a part of a great team who
                                    is using our craft to make a positive
                                    difference in the world.
                                </HeroSplit.Text>
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
                                        <h4 className="font-bold text-xl">
                                            {skill.title}
                                        </h4>
                                    </div>
                                    <p className="p-2">{skill.body}</p>
                                </div>
                            ))}
                        </div>
                    </S.SkillsBlock>
                </Containers.Child>
                <Containers.Child className="bg-gradient relative overflow-hidden">
                    <DigitalBG className="absolute opacity-50" />

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
                <Containers.Child>
                    <S.DesignBlock className="h-full p-10 lg:p-16">
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
                    </S.DesignBlock>
                </Containers.Child>
                <Containers.Child className="overflow-hidden bg-gradient">
                    <BlockNote className="relative h-full left py-16 px-10 lg:py-20 lg:px-16 flex flex-col text-left">
                        <DesignBG className="absolute -mt-32 top-0 left-0 opacity-50" />
                        <DesignIcons className="absolute z-0 w-3/12 top-0 right-0 transform -translate-x-64 translate-y-10 opacity-50" />
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
                    <S.CurrentBlock className="h-full p-10 lg:p-16">
                        <header className="mb-6">
                            <h3 className="inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">
                                Current Challenges
                            </h3>
                        </header>
                        <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-4">
                            {currents.map((item, i) => (
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
                    </S.CurrentBlock>
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
