import YAML from "yaml"

import CardData from "./CardData"

type State = {
    cardsBySet: Record<string, CardData[]>
}

const state: State = {
    cardsBySet: {},
}

const cardAssetsBasePath = "/src/assets/crossroads"
const cardAssets = import.meta.glob("/src/assets/crossroads/**/*.yaml", {
    as: "raw",
})

export function loadCards(): Promise<void> {
    if (Object.keys(state.cardsBySet).length > 0) return Promise.resolve()

    return Promise.all(
        Object.entries(cardAssets).map(([path, mod]) =>
            mod().then((yaml) => [path, yaml]),
        ),
    )
        .then((values) => {
            return Object.fromEntries(values)
        })
        .then((cardYamls: Record<string, string>) => {
            console.log(cardYamls)
            state.cardsBySet = Object.entries(cardYamls).reduce(
                (acc: Record<string, CardData[]>, [path, yaml]) => {
                    const cardSet = path.slice(
                        cardAssetsBasePath.length + 1,
                        path.lastIndexOf("/"),
                    )
                    acc[cardSet] = acc[cardSet] ?? []
                    acc[cardSet].push(yamlToCard(yaml, cardSet))
                    return acc
                },
                {},
            )
        })
        .catch((err) => {
            console.error(err)
        })
}

export function getCards(cardSet: string): CardData[] {
    return Object.keys(state.cardsBySet)
        .filter((key) => key === cardSet || key.startsWith(`${cardSet}/`))
        .flatMap((key) => state.cardsBySet[key])
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
