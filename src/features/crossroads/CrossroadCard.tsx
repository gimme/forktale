import { useState } from "react"

import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CloseIcon from "@mui/icons-material/Close"
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Stack,
    Typography,
} from "@mui/material"

import strings from "@/assets/strings"

import Crossroad, { CrossroadOption } from "./Crossroad"

type Props = {
    crossroad: Crossroad
    onDiscard: () => void
    onComplete: () => void
}

export default function CrossroadCard(props: Props) {
    const [page, setPage] = useState<"trigger" | "context" | "result">(
        "trigger",
    )
    const [chosenOption, setChosenOption] = useState<CrossroadOption | null>(
        null,
    )

    const handleDiscard = () => props.onDiscard()
    const handleOpen = () => setPage("context")
    const handleBack = () => {
        switch (page) {
            case "trigger":
                break
            case "context":
                setPage("trigger")
                break
            case "result":
                setChosenOption(null)
                setPage("context")
                break
        }
    }
    const handleOption = (option: CrossroadOption | null) => {
        setChosenOption(option)
        setPage("result")
    }
    const handleComplete = () => props.onComplete()

    const crossroad = props.crossroad
    const title = page === "trigger" ? "" : crossroad.title

    const content =
        page === "trigger" ? (
            <Typography component="p" sx={{ textAlign: "center" }}>
                {crossroad.trigger + "..."}
            </Typography>
        ) : page === "context" ? (
            <>
                <Typography component="p">{crossroad.context}</Typography>
                <Stack>
                    {crossroad.options?.map((option, i) => (
                        <Button
                            aria-label={`option ${i + 1}`}
                            variant={"outlined"}
                            key={i}
                            onClick={() => handleOption(option)}
                            sx={{
                                marginTop: 2.5,
                                textTransform: "none",
                                textAlign: "left",
                            }}
                        >
                            {option.action}
                        </Button>
                    )) ?? (
                        <Button
                            aria-label="continue"
                            variant={"outlined"}
                            onClick={() => handleOption(null)}
                            sx={{ marginTop: 2 }}
                        >
                            {strings.common.continue}
                        </Button>
                    )}
                </Stack>
            </>
        ) : page === "result" ? (
            <Typography component="p">
                {chosenOption?.result ?? crossroad.result}
            </Typography>
        ) : null

    const actions =
        page === "trigger" ? (
            <>
                <IconButton
                    aria-label="discard"
                    size="large"
                    color="secondary"
                    onClick={handleDiscard}
                    sx={{ padding: "20px" }}
                >
                    <CloseIcon />
                </IconButton>
                <IconButton
                    aria-label="continue"
                    size="large"
                    color="primary"
                    onClick={handleOpen}
                    sx={{ marginLeft: "auto", padding: "20px" }}
                >
                    <ArrowForwardIcon />
                </IconButton>
            </>
        ) : page === "context" ? (
            <>
                <IconButton
                    aria-label="back"
                    size="large"
                    onClick={handleBack}
                    sx={{ padding: "20px" }}
                >
                    <ArrowBackIcon />
                </IconButton>
            </>
        ) : page === "result" ? (
            <>
                <IconButton
                    aria-label="back"
                    size="large"
                    onClick={handleBack}
                    sx={{ padding: "20px" }}
                >
                    <ArrowBackIcon />
                </IconButton>
                <IconButton
                    aria-label="complete"
                    size="large"
                    color="primary"
                    onClick={handleComplete}
                    sx={{ marginLeft: "auto", padding: "20px" }}
                >
                    <ArrowForwardIcon />
                </IconButton>
            </>
        ) : null

    return (
        <>
            <Card sx={{ maxWidth: "400px", width: "100%", padding: 1 }}>
                <CardHeader
                    title={title}
                    titleTypographyProps={{ align: "center" }}
                    sx={{ height: 75 }}
                />
                <CardContent sx={{ height: 500, overflow: "scroll" }}>
                    {content}
                </CardContent>
                <CardActions disableSpacing={true}>{actions}</CardActions>
            </Card>
        </>
    )
}
