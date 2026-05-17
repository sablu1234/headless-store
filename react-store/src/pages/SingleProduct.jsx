import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProductData } from '../Api.js'

const SingleProduct = ({ setPageLoading }) => {

    const {id} = useParams()
    const [singleProduct, setSingleProduct] = useState({})

    useEffect( () => {

        const fetchSingleProductData = async() => {
            setPageLoading(true)
            const data = await getSingleProductData(id)
            setSingleProduct(data)
            console.log(data)
            setPageLoading(false)
        }

        fetchSingleProductData()
    }, [id])
    
    //Return Product Regular price / Sale price Value
    const renderProductPrice = (product) => {
         if(product.sale_price){
                return <>
                    <span className='text-muted text-decoration-line-through'> { product.regular_price } </span>
                    <span className='text-danger'> { product.sale_price } </span>
                </>
        }
        return <>
            ${ product.regular_price || product.price}
        </>
    }
    
    return<>
        <div className="container my-5">
            <div className="row">
            <div className="col-md-6">
                <div className="card">
                <img className="card-img-top" src={singleProduct?.images?.[0]?.src} alt="Product Name" />
                </div>
            </div>
            <div className="col-md-6">
                <h1 className="my-4">{ singleProduct.name }- { id }</h1>
                <div className="mb-4" dangerouslySetInnerHTML={ {
                    __html: singleProduct.description
                } }>
                </div>
                <div className="mb-4">
                <h5>Price:</h5>
                { renderProductPrice(singleProduct) }
                </div>
                <div className="mb-4">
                <h5>Category: { singleProduct.categories?.map( (singleCategory) => singleCategory.name ).join(", ") }</h5>
                </div>
                <button className="btn btn-primary mt-4" >
                Add to Cart
                </button>
            </div>
            </div>
        </div>
    </>
}

export default SingleProduct