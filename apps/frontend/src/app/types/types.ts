export type CategoryType = {
  id: number
  name: string
  description: string | null
}
export type ImageType = {
  id: number
  url: string
  previewUrl: string | null
}
export type ColorType = {
  id: number
  name: string
}
export type ProductType = {
  id: 1
  name: string
  description: string
  price: number
  category: CategoryType
  image: ImageType
  color: ColorType
}
export type PriceSelectors = {
  id: number
  name: string
  startPrice: number
  finalPrice: number
}
export type FiltersStatesTypes = {
  colors: number[]
  categories: number[]
  price: number[]
}
