import React from "react"
import { Block } from "../components"
import { BlockNote } from "../components"
import DesignBG from "../assets/images/design.svg"
import DesignIcons from "../assets/images/design-icons.svg"

export function DesignCreativeContainer({ className }) {
    return (
        <Block className={`h-full p-10 lg:p-16 ${className}`}>
            <BlockNote className="relative h-full left py-16 px-10 lg:py-20 lg:px-16 flex flex-col text-left">
                <DesignBG className="absolute -mt-32 top-0 left-0 opacity-50" />
                <DesignIcons className="absolute z-0 w-3/12 top-0 right-0 transform -translate-x-64 translate-y-10 opacity-50" />
                <BlockNote.Title>Design</BlockNote.Title>
                <BlockNote.Subtitle>
                    powerful interactive prototypes
                </BlockNote.Subtitle>
                <BlockNote.Text>
                    Seamlessly transform your static screen designs into fully
                    responsive, interactive, animated prototypes directly in
                    Sketch, Figma or Adobe XD.
                </BlockNote.Text>
            </BlockNote>
        </Block>
    )
}
