export const baseURL = 'http://gd2.mlb.com/components/game/mlb/'

export const pad = function pad(n: number) {
    return n < 10 ? '0' + n : n
}

export const split = function split(id: string) {
    const tokens = id.split('_')

    return {
        day: tokens[2],
        month: tokens[1],
        year: tokens[0]
    }
}