import Card from "./Card"
import { useEffect, useState } from "react"
import { Box, List, ListItemButton, Paper, Stack } from "@mui/material"
import CardData, { getCards } from "@/features/crossroads/CardData"

export function CrossroadsPage() {
    const [cards, setCards] = useState<CardData[] | undefined>(undefined)
    const [card, setCard] = useState<CardData | null>(null)

    useEffect(() => {
        const cards = getCards("dow/base").sort((a, b) =>
            a.title.localeCompare(b.title),
        )
        setCards(cards)
    }, [])

    return (
        <>
            <Stack direction="row" spacing={2}>
                <Paper
                    style={{
                        height: "100vh",
                        maxHeight: "100vh",
                        minWidth: "300px",
                        overflow: "auto",
                    }}
                >
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
                </Paper>
                <Box>
                    {card && (
                        <>
                            <Card cardData={card} />
                        </>
                    )}
                </Box>
            </Stack>
        </>
    )
}
