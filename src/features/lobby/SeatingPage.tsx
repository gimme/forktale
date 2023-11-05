import { useNavigate, useParams } from "react-router-dom"

import { Button, Stack } from "@mui/material"

import MainContainer from "@/components/MainContainer"

export default function SeatingPage() {
    const navigate = useNavigate()
    const { roomCode } = useParams()

    const handleSelectSeat = (seat: number) => {
        navigate(`/${roomCode}/${seat}`)
    }

    return (
        <MainContainer>
            <Stack direction="column" spacing={5} sx={{ width: "100%" }}>
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
        </MainContainer>
    )
}
