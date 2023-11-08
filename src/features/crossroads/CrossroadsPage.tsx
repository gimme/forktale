import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { CircularProgress } from "@mui/material"

import MainContainer from "@/components/MainContainer"
import { shuffle } from "@/utils/random"

import Crossroad from "./Crossroad"
import CrossroadCard, { CardPage } from "./CrossroadCard"
import { getCrossroads, loadCrossroads } from "./cardStore"

export function CrossroadsPageWrapper() {
    const navigate = useNavigate()
    const { roomCode, seat, card, page } = useParams()

    const seatInt = parseInt(seat ?? "")
    const cardInt = parseInt(card ?? "")
    const cardPage: CardPage | null =
        page === "trigger" || page === "context" || page === "result"
            ? page
            : null

    useEffect(() => {
        if (isNaN(seatInt)) navigate(`/${roomCode}`, { replace: true })
        else if (isNaN(cardInt))
            navigate(`/${roomCode}/${seat}/1`, { replace: true })
        else if (cardPage === null && page !== undefined)
            navigate(`/${roomCode}/${seat}/${card}`, { replace: true })
    }, [card, cardInt, cardPage, navigate, page, roomCode, seat, seatInt])

    if (!roomCode || isNaN(seatInt) || isNaN(cardInt) || cardPage === undefined)
        return null
    return (
        <CrossroadsPage
            roomCode={roomCode}
            seat={seatInt}
            card={cardInt}
            page={cardPage}
        />
    )
}

type Props = {
    roomCode: string
    seat: number
    card: number
    page: CardPage | null
}

function CrossroadsPage(props: Props) {
    const { roomCode, seat, card, page } = props
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const seatIndex = seat - 1
    const currentCardIndex = card - 1

    const baseCrossroads = getCrossroads("dow/base")
    const crossroads: Crossroad[] = useMemo(() => {
        const offset = seatIndex * (baseCrossroads.length / 5)
        const extraEntropy = seatIndex < 5 ? "" : Math.floor(seatIndex / 5)
        return shuffle(baseCrossroads, roomCode + extraEntropy, offset)
    }, [baseCrossroads, roomCode, seatIndex])

    const crossroad =
        crossroads.length > currentCardIndex
            ? crossroads[currentCardIndex]
            : null

    const nextCard = (replace?: boolean) => {
        navigate(`/${roomCode}/${seat}/${card + 1}`, {
            replace: replace,
        })
    }
    const setCardPage = (page: CardPage | null) => {
        navigate(
            `/${roomCode}/${seat}/${currentCardIndex + 1}${
                page ? `/${page}` : ""
            }`,
        )
    }
    const handleDiscard = () => {
        nextCard()
    }
    const handleContinue = () => {
        if (page === null) setCardPage("trigger")
        if (page === "trigger") setCardPage("context")
        if (page === "context") setCardPage("result")
        if (page === "result") nextCard(true)
    }

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
        <MainContainer>
            {loading ? (
                <CircularProgress />
            ) : (
                crossroad && (
                    <>
                        <CrossroadCard
                            crossroad={crossroad}
                            page={page}
                            onDiscard={handleDiscard}
                            onContinue={handleContinue}
                        />
                    </>
                )
            )}
        </MainContainer>
    )
}
