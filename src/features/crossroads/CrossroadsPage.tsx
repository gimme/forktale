import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"

import { CircularProgress } from "@mui/material"

import MainContainer from "@/components/MainContainer"
import { shuffle } from "@/utils/random"

import Crossroad from "./Crossroad"
import CrossroadCard from "./CrossroadCard"
import { getCrossroads, loadCrossroads } from "./cardStore"

export function CrossroadsPage() {
    const navigate = useNavigate()
    const { roomCode, seat } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState<boolean>(false)

    const baseCards = getCrossroads("dow/base")
    const cards: Crossroad[] = useMemo(() => {
        if (!roomCode || !seat) return []
        const seatIndex = parseInt(seat) - 1
        if (seatIndex < 0) navigate(`/${roomCode}`)
        const offset = seatIndex * (baseCards.length / 5)
        const extraEntropy = seatIndex < 5 ? "" : Math.floor(seatIndex / 5)
        return shuffle(baseCards, roomCode + extraEntropy, offset)
    }, [baseCards, navigate, roomCode, seat])
    const currentCardIndex = parseInt(searchParams.get("i") ?? "") ?? 0
    const card =
        cards.length > currentCardIndex ? cards[currentCardIndex] : null

    const nextCard = () => {
        setSearchParams({ ...searchParams, i: `${currentCardIndex + 1}` })
    }
    const handleDiscard = () => nextCard()
    const handleComplete = () => nextCard()

    useEffect(() => {
        if (isNaN(parseInt(searchParams.get("i") ?? ""))) {
            setSearchParams({ ...searchParams, i: "0" }, { replace: true })
        }
    }, [searchParams, setSearchParams])

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
                card && (
                    <>
                        <CrossroadCard
                            crossroad={card}
                            onDiscard={handleDiscard}
                            onComplete={handleComplete}
                        />
                    </>
                )
            )}
        </MainContainer>
    )
}
