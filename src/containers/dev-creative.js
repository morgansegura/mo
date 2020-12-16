import React from "react"
import { Block } from "../components"
import { BlockNote, CodeBlock } from "../components"
import DigitalBG from "../assets/images/digital.svg"

export function DevCreativeContainer({ className }) {
    return (
        <Block className={`relative h-full px-10 py-20 lg:px-16 ${className}`}>
            <DigitalBG className="absolute opacity-50" />
            <BlockNote className="h-full relative flex flex-col">
                <div className="flex flex-col xxl:flex-row justify-between">
                    <div className="w-full order-2 mt-4 xl:mt-0 xxl:w-1/2 self-center">
                        <CodeBlock browser={true} className="with--label">
                            <CodeBlock.Label>Javascript</CodeBlock.Label>
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
                    <div className="w-full order-1 xxl:order-2 bg-transparent flex flex-col xxl:w-1/2">
                        <BlockNote.Title className="text-white text-center xl:text-right">
                            Code
                        </BlockNote.Title>
                        <BlockNote.Subtitle className="text-white text-center xl:text-right xl:pl-12">
                            Over 10 years of{" "}
                            <strong className="font-bold">
                                professional experience
                            </strong>{" "}
                        </BlockNote.Subtitle>
                        <BlockNote.Text className="text-white text-center xl:self-end xl:text-right">
                            I've been in the weeds, worked countless hours and
                            put in over ten years designing and devloping
                            professional code for clients and employers.
                        </BlockNote.Text>
                    </div>
                </div>
            </BlockNote>
        </Block>
    )
}
