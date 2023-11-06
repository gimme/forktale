import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { CircularProgress } from "@mui/material"

import MainContainer from "@/components/MainContainer"
import { shuffle } from "@/utils/random"

import Crossroad from "./Crossroad"
import CrossroadCard, { CardPage } from "./CrossroadCard"
import { getCrossroads, loadCrossroads } from "./cardStore"

export function CrossroadsPage() {
    const navigate = useNavigate()
    const { roomCode, seat, card, page } = useParams()
    const [loading, setLoading] = useState<boolean>(false)

    const validateSeatIndex = (): number => {
        const seatNumber = parseInt(seat ?? "")
        if (isNaN(seatNumber) || seatNumber < 1)
            navigate(`/${roomCode}`, { replace: true })
        return seatNumber - 1
    }
    const validateCardIndex = (): number => {
        const cardNumber = parseInt(card ?? "")
        if (isNaN(cardNumber) || cardNumber < 1)
            navigate(`/${roomCode}/${seat}/1`, { replace: true })
        return cardNumber - 1
    }
    const validatePage = (): CardPage | null => {
        if (page === "trigger") return "trigger"
        if (page === "context") return "context"
        if (page === "result") return "result"
        if (page == null) return null

        navigate(`/${roomCode}/${seat}/${card}`, { replace: true })
        return null
    }

    const seatIndex = validateSeatIndex()
    const currentCardIndex = validateCardIndex()
    const currentPage = validatePage()

    const baseCrossroads = getCrossroads("dow/base")
    const crossroads: Crossroad[] = useMemo(() => {
        if (!roomCode || seatIndex == null) return []
        const offset = seatIndex * (baseCrossroads.length / 5)
        const extraEntropy = seatIndex < 5 ? "" : Math.floor(seatIndex / 5)
        return shuffle(baseCrossroads, roomCode + extraEntropy, offset)
    }, [baseCrossroads, roomCode, seatIndex])

    const crossroad =
        crossroads.length > currentCardIndex
            ? crossroads[currentCardIndex]
            : null

    const nextCard = (replace?: boolean) => {
        navigate(`/${roomCode}/${seat}/${currentCardIndex + 2}`, {
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
        if (currentPage === null) setCardPage("trigger")
        if (currentPage === "trigger") setCardPage("context")
        if (currentPage === "context") setCardPage("result")
        if (currentPage === "result") nextCard(true)
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
                            page={currentPage}
                            onDiscard={handleDiscard}
                            onContinue={handleContinue}
                        />
                    </>
                )
            )}
        </MainContainer>
    )
}
