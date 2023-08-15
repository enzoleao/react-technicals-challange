import { api } from '@/libs/axios/api'

export const getColors = async () => {
  try {
    const response = await api.get('/colors')

    return response.data.data
  } catch (err) {
    throw new Error('Internal Error')
  }
}
