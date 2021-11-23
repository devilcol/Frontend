import React,{useEffect,useState} from 'react' 
import {useParams} from 'react-router-dom'
import productApi from '../../api/productsApi'


const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])

    useEffect(() =>{
        const getApi = async () => {
            try {
                const response = await productApi.getDetail(id)
                setProduct(response)
                console.log(response)
            }
            catch(err) {
                console.log('Failed to fetch product list: ', err)
            }
        }
        getApi()
    },[id])   
    console.log(product)
    return (
        <div className='detail row row-cols-2'>
            <div col>
                <img className="image-detail" src={product.image_url} alt={product.name} title={product.name} />
            </div>
            <div col>
                <h2 className='name-detail'>{product.name} </h2>
                <div className='price-detail'>{product.price}</div>
                <div className='description-detail'>{product.description}</div>
            </div>
            
        </div>
        
    )
}

export default ProductDetail