import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button, Stack, TextField } from "@mui/material"

import strings from "@/assets/strings"
import MainContainer from "@/components/MainContainer"
import { encode } from "@/utils/numberEncode"
import { dateEntropy } from "@/utils/random"

export default function RoomSettingsPage() {
    const navigate = useNavigate()
    const [joinCode, setJoinCode] = useState<string>("")

    useEffect(() => {
        setJoinCode(encode(Math.floor(Math.random() * Math.pow(32, 2))))
    }, [])

    const handleStart = () => {
        navigate(`/${joinCode + dateEntropy(2)}`)
    }

    return (
        <MainContainer>
            <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
                <TextField
                    margin="normal"
                    fullWidth
                    id="code"
                    label={strings.common.code}
                    value={joinCode}
                />
                <Button
                    aria-label={"start"}
                    variant="contained"
                    disabled={!joinCode}
                    onClick={handleStart}
                >
                    {strings.common.start}
                </Button>
            </Stack>
        </MainContainer>
    )
}
