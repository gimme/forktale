import seedrandom from "seedrandom"

export function shuffle<T>(array: T[], seed: string, offset: number): T[] {
    const r = rand(seed)
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

function rand(seed: string) {
    let rng = seedrandom(seed)()
    return {
        next() {
            rng = seedrandom(rng.toString())()
            return rng
        },
    }
}
