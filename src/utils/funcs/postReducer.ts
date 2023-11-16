import { MStatusType } from '$exporter/type'

export function postReducer(arrays: MStatusType[][]): Array<MStatusType> {
    //
    const map = new Map()

    for (const array of arrays) {
        for (const item of array) {
            map.set(item.id, item)
        }
    }

    return Array.from(map.values())
}
