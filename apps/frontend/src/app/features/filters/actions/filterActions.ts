import { api } from '@/libs/axios/api'
import { pricesFilter } from '@/services/pricesFilter'
import { FiltersStatesTypes } from '@/types/types'

export const filterActions = async (searchOptions: FiltersStatesTypes) => {
  try {
    const pricesFiltered = pricesFilter.filter((obj) =>
      searchOptions.price.includes(obj.id),
    )
    const minPrice = Math.min(
      ...pricesFiltered.map((objeto) => objeto.startPrice),
    )
    const maxPrice = Math.max(
      ...pricesFiltered.map((objeto) => objeto.finalPrice),
    )
    const response = await api.get('/products', {
      params: {
        filters: {
          $or: [
            {
              category: {
                id: {
                  $in: searchOptions.categories,
                },
              },
              color: {
                id: {
                  $in: searchOptions.colors,
                },
              },
            },
          ],
          price: {
            $lte: pricesFiltered.length <= 0 ? undefined : maxPrice,
            $gte: pricesFiltered.length <= 0 ? undefined : minPrice,
          },
        },
      },
    })
    return response.data.data
  } catch (err) {
    throw new Error('Filter error')
  }
}
