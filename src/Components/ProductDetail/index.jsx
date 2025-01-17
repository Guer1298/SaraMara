import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCardContext } from '../../Context'
import './style.css'

const ProductDetail = () => {
  const context = useContext(ShoppingCardContext)

  const { isProductDetailOpen, productToShow, closeProductDetail } = context;

  return (
    <aside
      className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={closeProductDetail}
          ></XMarkIcon>
        </div>
      </div>
      {productToShow && productToShow.images ? (
        <>
          <figure className='px-6'>
            <img
              className='w-full h-full rounded-lg'
              src={productToShow.images[0]}
              alt={productToShow.title || 'Product Image'} 
            />
          </figure>
          <p className='flex flex-col p-6'>
            <span className='font-medium text-2xl mb-2'>${productToShow.price || 'N/A'}</span>
            <span className='font-medium text-md'>{productToShow.title || 'No Title'}</span>
            <span className='font-light text-sm'>{productToShow.description || 'No Description'}</span>
          </p>
        </>
      ) : (
        <p className="p-6 text-center text-gray-500">No product selected</p>
      )}
    </aside>
  )
}

export default ProductDetail
