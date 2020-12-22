import React from "react"
import { Block, Card } from "../components"
import { designGoals } from "../fixtures"

export function DesignGoalsContainer({ className }) {
    return (
        <Block className={className}>
            <Block.Header className="mb-6">
                <Block.Title className="block-title inline-flex items-center uppercase tracking-wide shadow-lg px-4 py-2 font-headline font-semibold text-lg">
                    {new Date().getFullYear() + 1} Design Goals
                </Block.Title>
            </Block.Header>
            <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-6">
                {designGoals.map((item, i) => (
                    <Card key={i} className="card p-4">
                        <div className="flex items-center mb-1">
                            {item.icon}
                            <h3 className="font-semibold text-lg">
                                {item.title}
                            </h3>
                        </div>
                        <p className="p-2">{item.body}</p>
                    </Card>
                ))}
            </div>
        </Block>
    )
}
