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
    const { roomCode, seat, card, page, option } = useParams()

    const seatInt = parseInt(seat ?? "")
    const cardInt = parseInt(card ?? "")
    const cardPage: CardPage | null =
        page === "trigger" || page === "context" || page === "result"
            ? page
            : null
    const optionInt = option ? parseInt(option) : undefined

    function isPositiveInteger(value: number) {
        return !isNaN(value) && value > 0 && value % 1 === 0
    }

    const isValidSeat = isPositiveInteger(seatInt)
    const isValidCard = isPositiveInteger(cardInt)
    const isValidPage = !(cardPage === null && page !== undefined)
    const isValidOption = !(
        cardPage === "result" &&
        optionInt !== undefined &&
        !isPositiveInteger(optionInt)
    )

    useEffect(() => {
        if (!isValidSeat) navigate(`/${roomCode}`, { replace: true })
        else if (!isValidCard)
            navigate(`/${roomCode}/${seat}/1`, { replace: true })
        else if (!isValidPage)
            navigate(`/${roomCode}/${seat}/${card}`, { replace: true })
        else if (!isValidOption)
            navigate(`/${roomCode}/${seat}/${card}/context`, { replace: true })
    }, [
        card,
        cardInt,
        cardPage,
        isValidCard,
        isValidOption,
        isValidPage,
        isValidSeat,
        navigate,
        optionInt,
        page,
        roomCode,
        seat,
        seatInt,
    ])

    if (
        !roomCode ||
        !isValidSeat ||
        !isValidCard ||
        !isValidPage ||
        !isValidOption
    )
        return null
    return (
        <CrossroadsPage
            roomCode={roomCode}
            seat={seatInt}
            card={cardInt}
            page={cardPage}
            option={optionInt}
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
