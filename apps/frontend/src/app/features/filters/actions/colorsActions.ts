import { api } from '@/libs/axios/api'

export const getColors = async () => {
  const response = await api.get('/colors')

  return response.data.data
}
