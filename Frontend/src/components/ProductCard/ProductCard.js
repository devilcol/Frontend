
const ProductCard = ({ product }) => {
  return(
    <div key={product.id} className='product col'>
      <img className = 'image' src={product.image_url}  />    
      <div className='name'>{product.name}</div>
      <div className='price'>{product.price}</div>
  </div>
  )

}

export default ProductCard;