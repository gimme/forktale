import React from "react"

import { Container } from "@mui/material"

type Props = {
    children: React.ReactNode
}

/**
 * The base container for all pages. Centers the content.
 */
export default function MainContainer(props: Props) {
    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }}
        >
            {props.children}
        </Container>
    )
}
