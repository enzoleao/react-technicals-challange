import Checkbox from '@/features/core/components/checkbox'
import DisclosureDropdown from '@/features/core/components/disclosure-dropdown'
import { CategoryType, ColorType, PriceSelectors } from '@/types/types'
import { useEffect, useState } from 'react'

interface IFilters {
  name: string
  options: CategoryType[] | ColorType[] | PriceSelectors[]
}
export const Filters = (props: IFilters) => {
  const [categoriesChecked, setCategoriesChecked] = useState<number[]>([])

  useEffect(() => {
    console.log(categoriesChecked)
  }, [categoriesChecked])

  const handleCheckboxChange = (categoryId: number) => {
    if (categoriesChecked.includes(categoryId)) {
      setCategoriesChecked(categoriesChecked.filter((id) => id !== categoryId))
    } else {
      setCategoriesChecked([...categoriesChecked, categoryId])
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
              key={i.id}
              checked={categoriesChecked.includes(i.id)}
              onChange={() => handleCheckboxChange(i.id)}
              dataTestId="1"
              className="text-xs"
              label={{
                variant: categoriesChecked.includes(i.id) ? 'h5' : 'p1',
                color: 'primary-dark',
                text: i.name,
              }}
            />
          )
        })}
    </DisclosureDropdown>
  )
}
export default Filters
