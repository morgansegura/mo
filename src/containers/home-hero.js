import React from "react"
import { HeroSplit, AuthorCard } from "../components"
import quoteImage from "../assets/images/quote.jpg"
import avatarImage from "../assets/images/morgansegura-400x400.jpg"
import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si"

export function HomeHeroContainer() {
    return (
        <HeroSplit>
            <HeroSplit.ImageContainer className="relative">
                <HeroSplit.Image
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url(${quoteImage})`,
                    }}
                    alt=""
                />
            </HeroSplit.ImageContainer>

            <HeroSplit.Body className="py-12 px-10 lg:px-16 lg:py-18">
                <HeroSplit.TextSmall className="flex justify-between font-thin text-base font-sans tracking-normal">
                    <div>Creative Technologist</div>
                    <div className="flex">
                        <a
                            className="w-6 h-6 mr-3"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/morgansegura"
                        >
                            <SiGithub />
                        </a>
                        <a
                            className="w-6 h-6 mr-3"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/morgan-segura-4b08429/"
                        >
                            <SiLinkedin />
                        </a>
                        <a
                            className="w-6 h-6 mr-3"
                            target="_blank"
                            rel="noreferrer"
                            href="https://twitter.com/codestandard"
                        >
                            <SiTwitter />
                        </a>
                    </div>
                </HeroSplit.TextSmall>
                <HeroSplit.Title className="relative flex justify-between font-sans font-bold">
                    <div className="w-3/4 relative z-10">Morgan Segura</div>
                    <AuthorCard className="z-1 absolute right-0 self-center">
                        <AuthorCard.Image
                            className="ml-auto block rounded-full w-32 h-32"
                            src={avatarImage}
                            alt="Morgan Segura"
                        />
                    </AuthorCard>
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
                    className="mt-6 ml-auto text-center inline-flex lg:block py-3 px-6 rounded-md shadow-md font-semibold text-lg font-sans"
                    to={"/"}
                >
                    Download CV
                </HeroSplit.ButtonLink>
            </HeroSplit.Body>
        </HeroSplit>
    )
}
