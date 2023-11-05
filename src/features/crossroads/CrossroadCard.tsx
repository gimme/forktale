import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CloseIcon from "@mui/icons-material/Close"
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    IconButton,
    Stack,
    Typography,
} from "@mui/material"

import strings from "@/assets/strings"

import Crossroad, { CrossroadOption } from "./Crossroad"

export type CardPage = "trigger" | "context" | "result"

type Props = {
    crossroad: Crossroad
    page: CardPage | null
    onDiscard: () => void
    onContinue: () => void
}

export default function CrossroadCard(props: Props) {
    const navigate = useNavigate()
    const [chosenOption, setChosenOption] = useState<null | CrossroadOption>(
        null,
    )

    const crossroad = props.crossroad

    const handleDiscard = () => props.onDiscard()
    const handleBack = () => navigate(-1)
    const handleContinue = () => props.onContinue()
    const handleOption = (option: CrossroadOption) => {
        setChosenOption(option)
        handleContinue()
    }

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

    useEffect(() => {
        setChosenOption(null)
    }, [props.crossroad])

    return (
        <>
            <Card sx={{ maxWidth: "400px", width: "100%", padding: 1 }}>
                {!props.page ? (
                    <CrossroadCardPage
                        actions={
                            <>
                                <ContinueButton />
                            </>
                        }
                    />
                ) : props.page === "trigger" ? (
                    <CrossroadCardPage
                        content={
                            <Typography
                                component="p"
                                sx={{ textAlign: "center" }}
                            >
                                {crossroad.trigger + "..."}
                            </Typography>
                        }
                        actions={
                            <>
                                <DiscardButton />
                                <ContinueButton />
                            </>
                        }
                    />
                ) : props.page === "context" ? (
                    <CrossroadCardPage
                        title={crossroad.title}
                        content={
                            <>
                                <Typography component="p">
                                    {crossroad.context}
                                </Typography>
                                <Stack>
                                    {crossroad.options?.map((option, i) => (
                                        <Button
                                            aria-label={`option-${i + 1}`}
                                            variant="outlined"
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
                                            variant="outlined"
                                            onClick={handleContinue}
                                            sx={{ marginTop: 2.5 }}
                                        >
                                            {strings.common.continue}
                                        </Button>
                                    )}
                                </Stack>
                            </>
                        }
                        actions={
                            <>
                                <BackButton />
                            </>
                        }
                    />
                ) : props.page === "result" ? (
                    <CrossroadCardPage
                        title={crossroad.title}
                        content={
                            <Typography component="p">
                                {chosenOption?.result ?? crossroad.result}
                            </Typography>
                        }
                        actions={
                            <>
                                <BackButton />
                                <ContinueButton />
                            </>
                        }
                    />
                ) : null}
            </Card>
        </>
    )
}

function CrossroadCardPage(props: {
    title?: string
    content?: React.ReactElement
    actions?: React.ReactElement
}) {
    return (
        <>
            <CardHeader
                title={props.title}
                titleTypographyProps={{ align: "center" }}
                sx={{ height: 75 }}
            />
            <CardContent sx={{ height: 500, overflow: "auto" }}>
                {props.content}
            </CardContent>
            <Divider />
            <CardActions disableSpacing={true} sx={{ height: 80 }}>
                {props.actions}
            </CardActions>
        </>
    )
}
