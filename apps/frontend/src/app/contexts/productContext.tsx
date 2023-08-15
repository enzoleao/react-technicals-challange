import { api } from '@/libs/axios/api'
import { ProductType } from '@/types/types'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface MyContextProviderProps {
  children: ReactNode
}

type ProductContextType = {
  products: ProductType[]
  setProducts: Dispatch<SetStateAction<ProductType[]>>
}

export const Contexts = createContext({} as ProductContextType)

export function ProductContextProvider({ children }: MyContextProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
    const getAllProducts = async () => {
      const response = await api.get('/products')
      setProducts(response.data.data)
    }
    getAllProducts()
  }, [])
  return (
    <Contexts.Provider value={{ products, setProducts }}>
      {children}
    </Contexts.Provider>
  )
}

export const useProductsContexts = () => useContext(Contexts)
