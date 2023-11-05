import { useEffect, useState } from "react"

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
    const [page, setPage] = useState<null | "trigger" | "context" | "result">(
        null,
    )
    const [chosenOption, setChosenOption] = useState<CrossroadOption | null>(
        null,
    )

    useEffect(() => {
        setPage(null)
        setChosenOption(null)
    }, [props.crossroad])

    const handleDiscard = () => props.onDiscard()
    const handleBack = () => {
        switch (page) {
            case "trigger":
                setPage(null)
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
    const handleContinue = () => {
        switch (page) {
            case null:
                setPage("trigger")
                break
            case "trigger":
                setPage("context")
                break
            case "context":
                setPage("result")
                break
            case "result":
                props.onComplete()
                break
        }
    }
    const handleOption = (option: CrossroadOption) => {
        setChosenOption(option)
        handleContinue()
    }

    const crossroad = props.crossroad
    const title = page === null || page === "trigger" ? "" : crossroad.title

    const ContinueButton = () => {
        return (
            <IconButton
                aria-label="continue"
                size="large"
                color="primary"
                onClick={handleContinue}
                sx={{
                    marginLeft: "auto",
                    padding: "20px",
                }}
            >
                <ArrowForwardIcon />
            </IconButton>
        )
    }
    const BackButton = () => {
        return (
            <IconButton
                aria-label="back"
                size="large"
                onClick={handleBack}
                sx={{ padding: "20px" }}
            >
                <ArrowBackIcon />
            </IconButton>
        )
    }
    const DiscardButton = () => {
        return (
            <IconButton
                aria-label="discard"
                size="large"
                color="secondary"
                onClick={handleDiscard}
                sx={{ padding: "20px" }}
            >
                <CloseIcon />
            </IconButton>
        )
    }

    const CrossroadContent = () =>
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
                            aria-label={`option-${i + 1}`}
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
                            onClick={handleContinue}
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

    const CrossroadActions = () =>
        page === null ? (
            <>
                <ContinueButton />
            </>
        ) : page === "trigger" ? (
            <>
                <DiscardButton />
                <ContinueButton />
            </>
        ) : page === "context" ? (
            <>
                <BackButton />
            </>
        ) : page === "result" ? (
            <>
                <BackButton />
                <ContinueButton />
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
                    <CrossroadContent />
                </CardContent>
                <CardActions disableSpacing={true}>
                    <CrossroadActions />
                </CardActions>
            </Card>
        </>
    )
}
