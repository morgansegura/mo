import React from "react"
import { Block, Card } from "../components"
import { interests } from "../fixtures"

export function LearningGoalsContainer({ className }) {
    return (
        <Block className={className}>
            <Block.Header>
                <Block.Title className="block-title inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">
                    Interested in Learning
                </Block.Title>
            </Block.Header>
            <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-6">
                {interests.map((item, i) => (
                    <Card key={i} className="card p-4 rounded-sm">
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
