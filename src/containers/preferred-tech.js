import React from "react"
import { Block, Card } from "../components"
import { technology } from "../fixtures"

export function PreferredTechContainer({ className }) {
    return (
        <Block className={className}>
            <Block.Header>
                <Block.Title className="block-title inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">
                    Preferred Tech
                </Block.Title>
            </Block.Header>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {technology.map((tech, i) => (
                    <Card
                        key={i}
                        className="small-card relative col-span-1 rounded-sm flex justify-center py-8 px-8"
                        href={tech.url}
                    >
                        <div className="bg-offset rounded-full p-2">
                            {tech.icon}
                        </div>
                        <p className="bg-label shadow-lg absolute flex h-6 pl-2 pr-3 items-center text-sm font-headline bg-gray-200 rounded-tl-full rounded-tr-full rounded-br-full">
                            {tech.caption}
                        </p>
                    </Card>
                ))}
            </div>
        </Block>
    )
}
