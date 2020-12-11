import React from "react"
import {
    Container,
    Input,
    Label,
    Button,
    TextArea,
    Title,
    Subtitle,
    Text,
} from "./styles/form.js"

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Form.Input = function FormInput({ ...restProps }) {
    return <Input {...restProps} />
}
Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Form.Subtitle = function FormSubtitle({ children, ...restProps }) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}
Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
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
