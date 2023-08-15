import Filters from './Filters'
import { useEffect, useState } from 'react'
import { filterActions, getCategories, getColors } from '../actions'
import { CategoryType, ColorType, FiltersStatesTypes } from '@/types/types'
import { useProductsContexts } from '@/contexts/productContext'
import { pricesFilter } from '@/services/pricesFilter'

export const FiltersWrapper = () => {
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [colors, setColors] = useState<ColorType[]>([])
  const { setProducts } = useProductsContexts()
  const [filtersSelected, setFiltersSelected] = useState<FiltersStatesTypes>({
    categories: [],
    colors: [],
    price: [],
  })

  useEffect(() => {
    const getAllCategoriesRequest = async () => {
      const categories = await getCategories()
      setCategories(categories)
      const colors = await getColors()
      setColors(colors)
    }
    const filteredItems = async () => {
      const response = await filterActions(filtersSelected)
      setProducts(response)
    }
    filteredItems()
    getAllCategoriesRequest()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersSelected])

  const handleClearFilters = () => {
    setFiltersSelected({
      categories: [],
      colors: [],
      price: [],
    })
  }

  return (
    <main className="w-ful flex flex-col h-full bg-white max-h-[620px] rounded-md gap-y-[16px] pr-4 pl-4 pt-5">
      <section className="flex justify-between items-center ">
        <p className="font-bold text-[#585858]">Filtrar por</p>
        <button className="text-[#4A237D] text-xs" onClick={handleClearFilters}>
          Limpar Filtro
        </button>
      </section>
      <section className="h-full flex flex-col gap-[16px]">
        <Filters
          filtersSelected={filtersSelected}
          setFiltersSelected={setFiltersSelected}
          type="categories"
          name="Categoria"
          options={categories}
        />
        <Filters
          filtersSelected={filtersSelected}
          setFiltersSelected={setFiltersSelected}
          type="colors"
          name="Cor"
          options={colors}
        />
        <Filters
          filtersSelected={filtersSelected}
          setFiltersSelected={setFiltersSelected}
          type="price"
          name="Preço"
          options={pricesFilter}
        />
      </section>
    </main>
  )
}

export default FiltersWrapper
