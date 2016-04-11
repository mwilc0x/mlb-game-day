import { api } from './api'
import { pad } from './utility'

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