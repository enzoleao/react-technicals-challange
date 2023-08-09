import TextInput from '@/features/core/components/text-input'

export const Search = () => {
  return (
    <div className="w-full max-w-[39.25rem]">
      <TextInput placeholder="O que você está procurando?" testId="1" />
    </div>
  )
}

export default Search
