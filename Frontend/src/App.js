import './App.css';
import './components/ProductCard/ProductCard.css'
import './components/Pagination/ChangePage.css'
import './components/Responsive/Responsive.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import React, { Component, useEffect, useState } from 'react';
import productApi from './api/productsApi';
import ProductCard from './components/ProductCard/ProductCard.js';
import ChangePage from './components/Pagination/ChangePage';

const LIMIT = 5
const App = () => {
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
        setProducts(response)
        setTotalPages(Math.ceil((response[0].total)/LIMIT))
      } catch (error) {
        console.log('Failed to fetch product list: ', error)
      }
    }
    GetApi()    
  },[offset])
  
  return (
    <div className='container col'>
      <div className='row row-cols-4'>
        {products.map(product =>(
          <ProductCard key={product.id}  product={product} />
        ))}
      </div>
      <div className= 'pagination'>         
          <ChangePage 
            totalPages = {totalPages} 
            setOffset={setOffset}  
            offset={offset}
            FontAwesomeIcon = {FontAwesomeIcon}
            faChevronLeft = {faChevronLeft}
            faChevronRight = {faChevronRight}
          />
      </div>        
    </div>
  )
}

export default App;
