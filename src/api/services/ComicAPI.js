/* eslint-disable import/no-anonymous-default-export */
import api from '../axios'

export default {
    find: async () => await api.get('/comics'),
    detail: async (episode) => await api.get(`/comics/${episode}`),
}
