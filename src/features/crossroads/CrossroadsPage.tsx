import { useEffect, useState } from "react"

import {
    Box,
    CircularProgress,
    List,
    ListItemButton,
    Paper,
    Stack,
} from "@mui/material"

import Crossroad from "./Crossroad"
import CrossroadCard from "./CrossroadCard"
import { getCrossroads, loadCrossroads } from "./cardStore"

export function CrossroadsPage() {
    const [card, setCard] = useState<Crossroad | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const cards: Crossroad[] = getCrossroads("dow/base").sort((a, b) =>
        a.title.localeCompare(b.title),
    )

    useEffect(() => {
        let ignore = false
        setLoading(true)
        loadCrossroads()
            .then(() => {
                if (ignore) return
                setLoading(false)
            })
            .catch((e) => {
                console.error(e)
            })
        return () => {
            ignore = true
        }
    }, [])

    return (
        <>
            <Stack direction="row" spacing={2}>
                <Paper
                    sx={{
                        height: "100vh",
                        maxHeight: "100vh",
                        minWidth: "300px",
                        overflow: "auto",
                    }}
                >
                    {loading ? (
                        <CircularProgress />
                    ) : (
                        <List>
                            {cards?.map((card) => (
                                <ListItemButton
                                    key={card.title}
                                    onClick={() => {
                                        setCard(card)
                                    }}
                                >
                                    {card.title}
                                </ListItemButton>
                            ))}
                        </List>
                    )}
                </Paper>
                <Box>
                    {card && (
                        <>
                            <CrossroadCard crossroad={card} />
                        </>
                    )}
                </Box>
            </Stack>
        </>
    )
}
