export default interface CardData {
    title: string
    cardSet: string
    trigger: string
    context: string
    result: string | null
    options: CardOption[] | null
    vote: boolean
    mature: boolean
    noCoop: boolean
}

export interface CardOption {
    action: string
    result: string
}
