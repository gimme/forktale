const charSet = "xy23456789abcdefghijkzmnopqrstuv"
const base = charSet.length

/**
 * Encodes a number into a shorter string.
 *
 * @param number The number to encode.
 */
export function encode(number: number): string {
    return number
        .toString(base)
        .replace(/./g, (c) => charSet[parseInt(c, base)])
}

/**
 * Decodes a number from a string encoded with `encode(number)`.
 *
 * @param encoded The encoded string.
 * @throws Error if the string contains invalid characters.
 */
export function decode(encoded: string): number {
    const decoded = encoded.toLowerCase().replace(/./g, (c) => {
        let index = charSet.indexOf(c)
        if (index === -1) index = charSet.indexOf(decodeMap[c])
        if (index === -1) throw new Error(`Invalid character: ${c}`)
        return index.toString(base)
    })

    return parseInt(decoded, base)
}

/**
 * Common typos in encoded strings.
 */
const decodeMap: Record<string, string> = {
    0: "o",
}
