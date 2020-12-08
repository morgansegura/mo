import React from "react"
import { Footer } from "../components"

export function FooterContainer({ children }) {
    return (
        <Footer className="font-semibold text-sm font-headline py-4 flex items-center justify-end">
            <Footer.Container className="flex-1 flex justify-end mr-4">
                {children}
            </Footer.Container>
        </Footer>
    )
}
