import { Button, Container, Stack, TextField, Typography } from "@mui/material"
import strings from "@/assets/strings"

export default function LobbyPage() {
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
                        name="code"
                        label={strings.common.code}
                        sx={{ textTransform: "capitalize" }}
                        disabled
                    />
                    <Button variant="outlined" disabled>
                        {strings.common.join}
                    </Button>
                    <Button variant="contained">{strings.common.create}</Button>
                </Stack>
            </Container>
        </>
    )
}
