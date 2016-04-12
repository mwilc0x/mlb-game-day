import { api } from './api'
import { pad } from './utility'
import { Promise } from 'es6-promise'

export const gameIds = function(date: Date) {
    if (!date) {
        date = new Date()
    }

    const day = pad(date.getDate())
    const month = pad(date.getMonth() + 1)
    const year = pad(date.getFullYear())

    const route = `year_${year}/month_${month}/day_${day}/miniscoreboard.json`

    return api(route)
        .then((result) => {
          const { game } = result.data.games
          return (game || []).map(g => g.gameday_link)
        })
}

export const getGameById = function(id: string) {
    if (!id) {
        return Promise.reject('invalid id supplied')
    }

    const tokens = id.split('_')

    const day = tokens[2]
    const month = tokens[1]
    const year = tokens[0]

    const route = `year_${year}/month_${month}/day_${day}/gid_${id}/boxscore.json`

    return api(route)
        .then((result) => {
            return result
        })
}