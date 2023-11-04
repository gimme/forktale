export default interface Crossroad {
    title: string
    cardSet: string
    trigger: string
    context: string
    result: string | null
    options: CrossroadOption[] | null
    vote: boolean
    mature: boolean
    noCoop: boolean
}

export interface CrossroadOption {
    action: string
    result: string
}
