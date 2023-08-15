import TextInput from '@/features/core/components/text-input'
import { searchProductAction } from '../actions'
import { useProductsContexts } from '@/contexts/productContext'

export const SearchInput = () => {
  const { setProducts } = useProductsContexts()

  const searchProduct = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const response = await searchProductAction(e.target.value)
    setProducts(response)
  }
  return (
    <div className="w-full max-w-[39.25rem] border border-[#9D59FF] h-[48px] rounded-lg">
      <TextInput
        id="search-input"
        placeholder="O que você está procurando?"
        testId="input-a"
        onChange={searchProduct}
      />
    </div>
  )
}

export default SearchInput
