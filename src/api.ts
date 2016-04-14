import * as axios from 'axios'
import { baseURL } from './utility'

export const api = function api(route) {
    return axios.get(`${baseURL}${route}`)
        .then((result) => {
            return result.data
        })
        .catch((err) => {
            console.warn(`error: ${err}`)
            return err
        })
}