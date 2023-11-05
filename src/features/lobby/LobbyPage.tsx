import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button, Stack, TextField, Typography } from "@mui/material"

import strings from "@/assets/strings"
import MainContainer from "@/components/MainContainer"
import { dateEntropy } from "@/utils/random"

export default function LobbyPage() {
    const navigate = useNavigate()
    const [joinCode, setJoinCode] = useState<string>("")

    const onChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setJoinCode(event.target.value)
    }

    const handleJoin = () => {
        navigate(`/${joinCode + dateEntropy(2)}`)
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
                        value={joinCode}
                        onChange={onChangeCode}
                    />
                    <Button
                        aria-label={"join"}
                        variant="contained"
                        disabled={!joinCode}
                        onClick={handleJoin}
                    >
                        {strings.common.join}
                    </Button>
                    <Button
                        aria-label={"create"}
                        variant="outlined"
                        onClick={handleCreate}
                    >
                        {strings.common.create}
                    </Button>
                </Stack>
            </MainContainer>
        </>
    )
}
