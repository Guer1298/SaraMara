import { createContext, useState } from 'react'

export  const ShoppingCardContext = createContext()

export const ShoppingCardProvider = ({children}) => {
  // Shopping Card · Increment quantity
  const [count, setCount] = useState(0)

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({})

  return (
    <ShoppingCardContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow
    }}>
      {children}
    </ShoppingCardContext.Provider>
  )
}