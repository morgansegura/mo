import React from "react"
import { Block } from "../components"
import { BlockNote } from "../components"
import DesignBG from "../assets/images/design.svg"
import DesignIcons from "../assets/images/design-icons.svg"

export function DesignCreativeContainer({ className }) {
    return (
        <Block className={`relative h-full px-10 py-20 lg:px-16 ${className}`}>
            <BlockNote className="relative h-full flex flex-col">
                <BlockNote.Title className="text-white text-center md:text-left">
                    Design
                </BlockNote.Title>
                <BlockNote.Subtitle className="text-white text-center md:text-left">
                    powerful interactive prototypes
                </BlockNote.Subtitle>
                <BlockNote.Text className="text-white text-center md:text-left md:w-2/3">
                    Seamlessly transform your static screen designs into fully
                    responsive, interactive, animated prototypes directly in
                    Sketch, Figma or Adobe XD.
                </BlockNote.Text>
            </BlockNote>
            <DesignIcons className="hidden md:block absolute z-0 w-3/12 top-0 right-0 transform -translate-x-32 translate-y-10 opacity-75" />
            <DesignBG className="absolute bottom-0 left-0 opacity-25" />
        </Block>
    )
}
