import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button, Stack, TextField, Typography } from "@mui/material"

import strings from "@/assets/strings"
import MainContainer from "@/components/MainContainer"

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
            <MainContainer>
                <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
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
            </MainContainer>
        </>
    )
}
