import * as axios from 'axios'
import { baseURL } from './utility'

export const api = function(route) {
    return axios.get(`${baseURL}${route}`)
        .then((result) => {
            return result.data
        })
        .catch((err) => {
            console.warn(`error: ${err}`)
            return err
        })
}