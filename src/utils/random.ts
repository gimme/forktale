import seedrandom from "seedrandom"

import { encode } from "@/utils/numberEncode"

export function shuffle<T>(array: T[], seed: string, offset: number): T[] {
    const r = random(seed)
    let currentIndex = array.length

    // While there remain elements to shuffle
    while (currentIndex > 0) {
        // Pick a remaining element
        const randomIndex = Math.floor(r.next() * currentIndex--)

        // And swap it with the current element
        const t = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = t
    }

    const len = array.length
    array.push(...array.splice(0, ((offset % len) + len) % len))
    return array
}

export function dateEntropy(length: number): string {
    const date = new Date()
    if (date.getHours() < 5) date.setDate(date.getDate() - 1)
    const dateSeed = date.toLocaleDateString("en-US")
    const entropy = Math.floor(random(dateSeed).next() * Math.pow(32, length))
    return encode(entropy)
}

function random(seed: string) {
    let rng = seedrandom(seed)()
    return {
        next() {
            rng = seedrandom(rng.toString())()
            return rng
        },
    }
}
