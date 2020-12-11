import React from "react"
import { Block } from "../components"
import { interests } from "../fixtures"

export function LearningGoalsContainer({ className }) {
    return (
        <Block className={`h-full p-10 lg:p-16 ${className}`}>
            <header className="mb-6">
                <h3 className="inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">
                    Interested in Learning
                </h3>
            </header>
            <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-4">
                {interests.map((item, i) => (
                    <div key={i} className="card p-4 rounded-md shadow-lg">
                        <div className="flex items-center mb-1">
                            {item.icon}
                            <h4 className="font-semibold text-lg">
                                {item.title}
                            </h4>
                        </div>
                        <p className="p-2">{item.body}</p>
                    </div>
                ))}
            </div>
        </Block>
    )
}
