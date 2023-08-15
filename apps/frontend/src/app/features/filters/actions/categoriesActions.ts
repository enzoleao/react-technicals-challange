import { api } from '@/libs/axios/api'

export const getCategories = async () => {
  try {
    const response = await api.get('/categories')
    return response.data.data
  } catch (err) {
    throw new Error('Internal Error')
  }
}
