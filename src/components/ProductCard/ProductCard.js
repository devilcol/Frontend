import React from 'react';
import {Link} from 'react-router-dom'

const ProductCard = ({products}) => {
  return(
    <div className='row row-cols-4'>
      {products.map(product =>(
        <div key={product.id} className='product col'>
           
          <Link to={`/${product.id}`}>
            <img className = 'image' src={product.image_url} alt={product.name} title={product.name}/>   
            <div className='name'>{product.name}</div>
            <div className='price'>{product.price}</div>
          </Link>
          
        </div>  
      ))}
    </div>
  )
}

export default ProductCard;