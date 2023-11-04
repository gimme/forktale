import YAML from "yaml"

import Crossroad from "./Crossroad"

type State = {
    crossroadsBySet: Record<string, Crossroad[]>
}

const state: State = {
    crossroadsBySet: {},
}

const crossroadAssetsBasePath = "/src/assets/crossroads"
const crossroadAssets = import.meta.glob("/src/assets/crossroads/**/*.yaml", {
    as: "raw",
})

export async function loadCrossroads() {
    if (Object.keys(state.crossroadsBySet).length > 0) return

    try {
        const values = await Promise.all(
            Object.entries(crossroadAssets).map(([path, mod]) =>
                mod().then((yaml) => [path, yaml]),
            ),
        )

        const crossroadYamls: Record<string, string> =
            Object.fromEntries(values)
        console.log(crossroadYamls)
        state.crossroadsBySet = Object.entries(crossroadYamls).reduce(
            (acc: Record<string, Crossroad[]>, [path, yaml]) => {
                const cardSet = path.slice(
                    crossroadAssetsBasePath.length + 1,
                    path.lastIndexOf("/"),
                )
                acc[cardSet] = acc[cardSet] ?? []
                acc[cardSet].push(yamlToCrossroad(yaml, cardSet))
                return acc
            },
            {},
        )
    } catch (err) {
        console.error(err)
    }
}

export function getCrossroads(cardSet: string): Crossroad[] {
    return Object.keys(state.crossroadsBySet)
        .filter((key) => key === cardSet || key.startsWith(`${cardSet}/`))
        .flatMap((key) => state.crossroadsBySet[key])
}

export function yamlToCrossroad(yaml: string, cardSet: string): Crossroad {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const partial: Partial<Crossroad> = YAML.parse(yaml)

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
