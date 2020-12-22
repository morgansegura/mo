import React from "react"
import { Block, Card } from "../components"
import { skills } from "../fixtures"

export function ExpertiseContainer({ className }) {
    return (
        <Block className={className}>
            <Block.Header>
                <Block.Title className="block-title inline-flex items-center uppercase tracking-wide shadow-xl px-4 py-2 font-headline font-semibold text-lg">
                    Areas of expertise
                </Block.Title>
            </Block.Header>
            <div className="font-sans grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-1 gap-6">
                {skills.map((skill, i) => (
                    <Card key={i} className="card p-4">
                        <div className="flex items-center mb-1">
                            {skill.icon}
                            <h3>{skill.title}</h3>
                        </div>
                        <p className="p-2">{skill.body}</p>
                    </Card>
                ))}
            </div>
        </Block>
    )
}
