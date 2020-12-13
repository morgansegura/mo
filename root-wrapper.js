import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { CodeBlock } from "./src/components"
import theme from "prism-react-renderer/themes/nightOwl"
import React from "react"

const components = {
    pre: props => {
        const className = props.children.props.className || ""
        const matches = className.match(/language-(?<lang>.*)/)

        return (
            <CodeBlock browser="true">
                <Highlight
                    {...defaultProps}
                    code={props.children.props.children.trim()}
                    language={
                        matches && matches.groups && matches.groups.lang
                            ? matches.groups.lang
                            : ""
                    }
                    theme={theme}
                >
                    {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                    }) => (
                        <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span
                                            {...getTokenProps({ token, key })}
                                        />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </CodeBlock>
        )
    },
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>{element}</MDXProvider>
)
