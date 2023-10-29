import YAML from "yaml"

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

const cardAssetsBasePath = "/src/assets/crossroads"
const cardAssets = import.meta.glob("/src/assets/crossroads/**/*.yaml", {
    as: "raw",
    eager: true,
})
const cardsBySet: Record<string, CardData[]> = Object.entries(
    cardAssets,
).reduce((acc: Record<string, CardData[]>, [path, yaml]) => {
    const cardSet = path.slice(
        cardAssetsBasePath.length + 1,
        path.lastIndexOf("/"),
    )
    acc[cardSet] = acc[cardSet] ?? []
    acc[cardSet].push(yamlToCard(yaml, cardSet))
    return acc
}, {})

export function getCards(cardSet: string): CardData[] {
    return Object.keys(cardsBySet)
        .filter((key) => key === cardSet || key.startsWith(`${cardSet}/`))
        .flatMap((key) => cardsBySet[key])
}

export function yamlToCard(yaml: string, cardSet: string): CardData {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const partial: Partial<CardData> = YAML.parse(yaml)

    return {
        title: partial.title!,
        cardSet: cardSet,
        trigger: partial.trigger!,
        context: partial.context!,
        result: partial.result ?? null,
        options: partial.options ?? null,
        vote: partial.vote ?? false,
        mature: partial.mature ?? false,
        noCoop: partial.noCoop ?? false,
    }
}
