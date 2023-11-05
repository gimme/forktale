import { useNavigate, useParams } from "react-router-dom"

import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined"
import { Button, Stack, Typography } from "@mui/material"

import strings from "@/assets/strings"
import MainContainer from "@/components/MainContainer"

export default function SeatingPage() {
    const navigate = useNavigate()
    const { roomCode } = useParams()

    const handleSelectSeat = (seat: number) => {
        navigate(`/${roomCode}/${seat}`)
    }

    return (
        <MainContainer>
            <Typography component="h1" variant="h4" align="center">
                {strings.room.selectSeat}
            </Typography>
            <Stack direction="column" spacing={5} sx={{ width: "100%", my: 5 }}>
                {[1, 2, 3, 4, 5].map((seat) => (
                    <Button
                        key={seat}
                        aria-label={`seat-${seat}`}
                        variant="outlined"
                        size="large"
                        onClick={() => handleSelectSeat(seat)}
                    >
                        {seat}
                    </Button>
                ))}
            </Stack>
            <Stack direction={"row"} color="text.secondary" spacing={1}>
                <WarningAmberOutlinedIcon />
                <Typography component="p" align="center">
                    {strings.room.uniqueSeat}
                </Typography>
            </Stack>
        </MainContainer>
    )
}
