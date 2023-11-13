import { MCustomEmojiType } from '$exporter/type'

/**
 * This function parses a given account name string and returns an array of objects.
 * Each object represents a part of the name and contains either a 'name' property for regular text,
 * or a 'url' property for custom emojis. The function identifies custom emojis by their surrounding colons (:).
 *
 * @example
 * // Example usage:
 * const accName = "Hello :world:";
 * const emojis = [{ shortcode: 'world', url: 'https://example.com/world.png' }];
 * const displayName = parseDisplayName(accName, emojis);
 * // displayName will be: [{ name: 'Hello ' }, { url: 'https://example.com/world.png' }]
 */
export function parseDisplayName(accName: string, emojis: MCustomEmojiType[]) {
    const regex = /((:[^:]+:)|[^:]+)/g
    const parsedNameArray = accName.match(regex) || []

    const emojiMap = new Map(emojis.map(e => [`:${e.shortcode}:`, e.url]))

    const displayName = parsedNameArray.map(n => {
        if (n.startsWith(':') && n.endsWith(':')) {
            const url = emojiMap.get(n)
            if (url) {
                return { url }
            }
        }
        return { name: n }
    })

    return displayName
}
