import { api } from './api'
import { pad, split } from './utility'
import { Promise } from 'es6-promise'

export const gameIds = function gameIds(date: Date) {
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

export const getGameBoxScoreById = function getGameBoxScoreById(id: string) {
    if (!id) {
        return Promise.reject('invalid id supplied')
    }

    const { day, month, year } = split(id)

    const route = `year_${year}/month_${month}/day_${day}/gid_${id}/boxscore.json`

    return api(route)
        .then((result) => {
            return result
        })
}

export const getGameEventsById = function getGameEventsById(id: string) {
    if (!id) {
        return Promise.reject('invalid id supplied')
    }

    const { day, month, year } = split(id)

    const route = `year_${year}/month_${month}/day_${day}/gid_${id}/game_events.json`

    return api(route)
        .then((result) => {
            return result
        })
}