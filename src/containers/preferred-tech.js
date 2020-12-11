import React from "react"
import { Block } from "../components"
import { technology } from "../fixtures"

export function PreferredTechContainer() {
    return (
        <Block className="block2 h-full p-10 lg:p-16">
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
        </Block>
    )
}
