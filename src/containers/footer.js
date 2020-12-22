import React from "react"
import { Footer } from "../components"

export function FooterContainer({ children }) {
    return (
        <Footer className="font-semibold text-sm font-headline flex items-center">
            <Footer.Container className="flex-1 flex justify-end">
                {children}
            </Footer.Container>
        </Footer>
    )
}
