import React from "react"
import { Block, Card } from "../components"
import { skills } from "../fixtures"

export function ExpertiseContainer({ className }) {
    return (
        <Block className={className}>
            <Block.Header>
                <Block.Title className="inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">
                    Areas of expertise
                </Block.Title>
            </Block.Header>
            <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, i) => (
                    <Card key={i} className="card p-4 rounded-md shadow-lg">
                        <div className="flex items-center mb-1">
                            {skill.icon}
                            <h3 className="font-semibold text-lg">
                                {skill.title}
                            </h3>
                        </div>
                        <p className="p-2">{skill.body}</p>
                    </Card>
                ))}
            </div>
        </Block>
    )
}
