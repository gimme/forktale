import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button, Container, Stack, TextField, Typography } from "@mui/material"

import strings from "@/assets/strings"

export default function LobbyPage() {
    const navigate = useNavigate()
    const [code, setCode] = useState<string>("")

    const onChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCode(event.target.value)
    }

    const handleJoin = () => {
        navigate(`/${code}`)
    }

    const handleCreate = () => {
        navigate("/create")
    }

    return (
        <>
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
                    <Typography component="h1" variant="h4" align="center">
                        {strings.app.name}
                    </Typography>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="code"
                        label={strings.common.code}
                        sx={{ textTransform: "capitalize" }}
                        value={code}
                        onChange={onChangeCode}
                    />
                    <Button
                        aria-label={"join"}
                        variant="outlined"
                        disabled={!code}
                        onClick={handleJoin}
                    >
                        {strings.common.join}
                    </Button>
                    <Button
                        aria-label={"create"}
                        variant="contained"
                        onClick={handleCreate}
                    >
                        {strings.common.create}
                    </Button>
                </Stack>
            </Container>
        </>
    )
}
