import React from "react"
import { Form } from "../components"

export function ContactFormContainer({ children }) {
    return (
        <Form className="flex flex-col p-8">
            <Form.Title className="mb-4 font-semibold text-xl text-center">
                Let's connect
            </Form.Title>
            <Form.Input
                className="mb-4 p-3 rounded-sm"
                placeholder="Full Name"
            />
            <Form.Input
                className="mb-4 p-3 rounded-sm"
                placeholder="Email Address"
            />
            <Form.TextArea
                className="mb-4 p-3 rounded-sm"
                placeholder="Leave a message"
            />
            <Form.Button className="rounded-md shadow-md mt-3 py-3 font-semibold">
                Submit this form
            </Form.Button>
        </Form>
    )
}
