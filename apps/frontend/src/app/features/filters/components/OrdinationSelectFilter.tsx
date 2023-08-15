import { useState } from 'react'
import {
  CriteriaInput,
  Option,
  OptionPanel,
  SelectWrapper,
} from '@/features/core/components/select'
import { useProductsContexts } from '@/contexts/productContext'
type IOptionsSelected = {
  id: number
  name: string
}
export const OrdenationSelectFilter = () => {
  const [ordenationSelected, setOrdenationSelected] =
    useState<IOptionsSelected>({ id: 1, name: 'Relevância' })

  const { products, setProducts } = useProductsContexts()
  const handleSortProducts = (sort: IOptionsSelected) => {
    setOrdenationSelected(sort)
    if (sort.id === 1) {
      const productsOrdenated = [...products].sort(
        (produtoA, produtoB) => produtoA.category.id - produtoB.category.id,
      )
      return setProducts(productsOrdenated)
    }
    const productsOrdenated = [...products].sort(
      (produtoA, produtoB) => produtoA.price - produtoB.price,
    )
    return setProducts(productsOrdenated)
  }
  return (
    <SelectWrapper
      value={ordenationSelected}
      onChange={(e) => handleSortProducts(e)}
      className="text-xs"
    >
      <CriteriaInput className="max-w-[180px]" />
      <OptionPanel>
        <Option value={{ id: 1, name: 'Relevância' }}>Relevância</Option>
        <Option value={{ id: 2, name: 'Preços' }}>Preços</Option>
      </OptionPanel>
    </SelectWrapper>
  )
}
export default OrdenationSelectFilter
