import React from "react"
import { Block } from "../components"
import { BlockNote, CodeBlock } from "../components"
import DigitalBG from "../assets/images/digital.svg"

export function DevCreativeContainer({ className }) {
    return (
        <Block className={`h-full p-10 lg:p-16 ${className}`}>
            <DigitalBG className="absolute opacity-50" />

            <BlockNote className="h-full relative flex flex-col py-16 px-10 lg:py-20 lg:px-16">
                <div className="flex justify-between">
                    <div className="w-1/2 self-center">
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
                    <div className="w-1/2 h-full bg-transparent flex flex-col text-right">
                        <BlockNote.Title className="">Code</BlockNote.Title>
                        <BlockNote.Subtitle className="pl-12">
                            Over 10 years of{" "}
                            <strong className="font-bold">
                                professional experience
                            </strong>{" "}
                        </BlockNote.Subtitle>
                    </div>
                </div>
                <BlockNote.Text className="self-end text-right w-2/3">
                    I've been in the weeds, worked countless hours and put in
                    over ten years designing and devloping professional code for
                    clients and employers. My favorite part of my professional
                </BlockNote.Text>
            </BlockNote>
        </Block>
    )
}
