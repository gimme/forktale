import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button, Container, Stack, TextField } from "@mui/material"

import strings from "@/assets/strings"

export default function RoomSettingsPage() {
    const navigate = useNavigate()
    const [code, setCode] = useState<string>("abcde")

    const handleStart = () => {
        navigate(`/${code}/1`)
    }

    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "100vh",
            }}
        >
            <Stack direction="column" spacing={2}>
                <TextField margin="normal" fullWidth id="code" value={code} />
                <Button
                    aria-label={"start"}
                    variant="contained"
                    disabled={!code}
                    onClick={handleStart}
                >
                    {strings.common.start}
                </Button>
            </Stack>
        </Container>
    )
}
