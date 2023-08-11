import Filters from './Filters'
import { useEffect, useState } from 'react'
import { getCategories, getColors } from '../actions'
import { CategoryType, ColorType } from '@/types/types'

export const FiltersWrapper = () => {
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [colors, setColors] = useState<ColorType[]>([])
  useEffect(() => {
    const getAllCategoriesRequest = async () => {
      const categories = await getCategories()
      setCategories(categories)
      const colors = await getColors()
      setColors(colors)
    }
    getAllCategoriesRequest()
  }, [])
  return (
    <main className="w-ful flex flex-col h-full bg-white max-h-[620px] rounded-md gap-y-[16px] pr-4 pl-4 pt-5">
      <section className="flex justify-between items-center ">
        <p className="font-bold text-[#585858]">Filtrar por</p>
        <button className="text-[#4A237D] text-xs">Limpar Filtro</button>
      </section>
      <section className="h-full flex flex-col gap-[16px]">
        <Filters name="Categoria" options={categories} />
        <Filters name="Cor" options={colors} />
        <Filters
          name="Preço"
          options={[
            { id: 1, name: 'R$ 0,01 - R$ 50,00' },
            { id: 2, name: 'R$ 50,01 - R$ 100,00' },
            { id: 3, name: 'R$ 100,01 - R$ 500,00' },
          ]}
        />
      </section>
    </main>
  )
}

export default FiltersWrapper
