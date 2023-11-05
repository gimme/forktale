import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button, Stack, TextField } from "@mui/material"

import strings from "@/assets/strings"
import MainContainer from "@/components/MainContainer"

export default function RoomSettingsPage() {
    const navigate = useNavigate()
    const [code, setCode] = useState<string>("abcde")

    const handleStart = () => {
        navigate(`/${code}/1`)
    }

    return (
        <MainContainer>
            <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
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
        </MainContainer>
    )
}
