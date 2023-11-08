import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { CircularProgress } from "@mui/material"

import MainContainer from "@/components/MainContainer"
import { shuffle } from "@/utils/random"

import Crossroad from "./Crossroad"
import CrossroadCard, { CardPage } from "./CrossroadCard"
import { getCrossroads, loadCrossroads } from "./cardStore"

export function CrossroadsPageWrapper() {
    const { roomCode, seat, card, page, option } = useParams()

    return (
        <CrossroadsPage
            roomCode={roomCode!}
            seat={parseInt(seat!)}
            card={parseInt(card!)}
            page={
                page === "trigger" || page === "context" || page === "result"
                    ? page
                    : null
            }
            option={option ? parseInt(option) : undefined}
        />
    )
}

type Props = {
    roomCode: string
    seat: number
    card: number
    page: CardPage | null
    option?: number
}

function CrossroadsPage(props: Props) {
    const { roomCode, seat, card, page, option } = props
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

    const nextCard = () => {
        navigate(`/${roomCode}/${seat}/${card + 1}`)
    }
    const setCardPage = (page: CardPage | null) => {
        navigate(`/${roomCode}/${seat}/${card}${page ? `/${page}` : ""}`)
    }
    const handleDiscard = () => {
        nextCard()
    }
    const handleContinue = () => {
        if (page === null) setCardPage("trigger")
        if (page === "trigger") setCardPage("context")
        if (page === "result") nextCard()
    }
    const handleOption = (option?: number) => {
        navigate(
            `/${roomCode}/${seat}/${card}/result${option ? `/${option}` : ""}`,
        )
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
                            option={option}
                            onDiscard={handleDiscard}
                            onContinue={handleContinue}
                            onOption={handleOption}
                        />
                    </>
                )
            )}
        </MainContainer>
    )
}
