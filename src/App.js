import {Routes,Route} from 'react-router-dom'
import React from 'react'

import './App.css';
import './components/ProductCard/ProductCard.css'
import './components/Pagination/ChangePage.css'
import './components/Responsive/Responsive.css'
import './pages/ProductDetail/ProductDetail.css'

import ProductList  from './pages/ProductList/ProductList'
import ProductDetail from './pages/ProductDetail/ProductDetail'

const App = () => {
  
  return (
      <Routes>

        <Route path='/' element={<ProductList />} />

        <Route path='/:id' element={<ProductDetail />} />

    </Routes>
  )
}

export default App;
