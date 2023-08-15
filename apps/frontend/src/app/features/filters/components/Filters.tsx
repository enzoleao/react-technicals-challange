import Checkbox from '@/features/core/components/checkbox'
import DisclosureDropdown from '@/features/core/components/disclosure-dropdown'
import {
  CategoryType,
  ColorType,
  FiltersStatesTypes,
  PriceSelectors,
} from '@/types/types'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { filterActions } from '../actions'
import { useProductsContexts } from '@/contexts/productContext'

interface IFilters {
  name: string
  options: PriceSelectors[] | CategoryType[] | ColorType[]
  type: 'categories' | 'colors' | 'price'
  filtersSelected: FiltersStatesTypes
  setFiltersSelected: Dispatch<SetStateAction<FiltersStatesTypes>>
}
export const Filters = (props: IFilters) => {
  const { setProducts } = useProductsContexts()

  useEffect(() => {
    const filteredItems = async () => {
      const response = await filterActions(props.filtersSelected)
      setProducts(response)
    }
    filteredItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.filtersSelected])

  const handleCheckboxChange = (
    property: keyof FiltersStatesTypes,
    value: number,
  ) => {
    props.setFiltersSelected((prevFilters) => {
      const updatedProperty = prevFilters[property].includes(value)
        ? prevFilters[property].filter((item: number) => item !== value)
        : [...prevFilters[property], value]

      return {
        ...prevFilters,
        [property]: updatedProperty,
      }
    })
  }
  const selectPropsCheckBoxLabel = (type: string, id: number) => {
    if (type === 'categories') {
      return props.filtersSelected.categories.includes(id)
    }
    if (type === 'colors') {
      return props.filtersSelected.colors.includes(id)
    }
    if (type === 'price') {
      return props.filtersSelected.price.includes(id)
    }
  }
  return (
    <DisclosureDropdown
      className="max-h-[130px] text-[#585858] text-bold"
      title={props.name}
    >
      {typeof props.options !== 'undefined' &&
        props.options.map((i) => {
          return (
            <Checkbox
              id={`checkbox-${props.type}-${i.id}`}
              key={i.id}
              checked={(() => {
                switch (props.type) {
                  case 'categories':
                    return props.filtersSelected.categories.includes(i.id)
                  case 'colors':
                    return props.filtersSelected.colors.includes(i.id)
                  case 'price':
                    return props.filtersSelected.price.includes(i.id)
                }
              })()}
              onChange={() => handleCheckboxChange(props.type, i.id)}
              dataTestId="1"
              className="text-xs"
              label={{
                variant: selectPropsCheckBoxLabel(props.type, i.id)
                  ? 'h5'
                  : 'p1',
                color: 'primary-dark',
                text: i.name,
              }}
            />
          )
        })}
    </DisclosureDropdown>
  )
}
// variant: props.filtersSelected.price.includes(i.id)
//                   ? 'h5'
//                   : 'p1',
export default Filters
