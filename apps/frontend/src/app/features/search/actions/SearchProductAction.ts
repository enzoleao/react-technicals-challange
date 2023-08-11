import { useProductsContexts } from '@/contexts/productContext'
import { api } from '@/libs/axios/api'

export const searchProductAction = async (productsStartsWith: string) => {
  console.log(productsStartsWith)
  const response = await api.get('/products', {
    params: {
      filters: {
        name: {
          $startsWith: productsStartsWith,
        },
      },
    },
  })

  return response.data.data
}
