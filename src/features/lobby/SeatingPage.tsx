import { useNavigate, useParams } from "react-router-dom"

import { Button, Container, Stack } from "@mui/material"

export default function SeatingPage() {
    const navigate = useNavigate()
    const { roomCode } = useParams()

    const handleSelectSeat = (seat: number) => {
        navigate(`/${roomCode}/${seat}`)
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
            <Stack direction="column" spacing={5}>
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
        </Container>
    )
}
