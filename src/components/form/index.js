import React from "react"
import { Container, Input, Label, Button, TextArea } from "./styles/form.js"

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Form.Input = function FormInput({ ...restProps }) {
    return <Input {...restProps} />
}
Form.Label = function FormLabel({ ...restProps }) {
    return <Label {...restProps} />
}
Form.TextArea = function FormTextArea({ ...restProps }) {
    return <TextArea {...restProps} />
}
Form.Button = function FormButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}
