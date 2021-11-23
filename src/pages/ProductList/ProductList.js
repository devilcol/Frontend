
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import productApi from '../../api/productsApi'
import ProductCard from '../../components/ProductCard/ProductCard.js'
import ChangePage from '../../components/Pagination/ChangePage.js'

const LIMIT = 5
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
   
  useEffect(() => {
    const GetApi = async () => {
      try {
        const params = {
          limit: LIMIT ,
          offset,
        }
        const response = await productApi.getAll(params);
        setProducts(response.products);
        setTotalPages(Math.ceil(response.total/LIMIT))
      } catch (error) {
        console.log('Failed to fetch product list: ', error)
      }
    }
    GetApi()    
  },[offset])
  return (
    <div className='container col'>
          <ProductCard products={products}/>
          <ChangePage 
            totalPages = {totalPages} 
            setOffset = {setOffset}  
            offset = {offset}
            FontAwesomeIcon = {FontAwesomeIcon}
            faChevronLeft = {faChevronLeft}
            faChevronRight = {faChevronRight}
          />
    </div>         
  )
}

export default ProductList