import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {

    let { productID } = useParams() // study again

    const [product, setProduct] = useState({})
    const DB_data_By_ID = `http://localhost:5000/products/${productID}`;
    useEffect(() => {
        fetch(DB_data_By_ID)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProduct(data)
            })
    }, [])


    return (<>
        <div className="container card text-center mt-2" style={{ width: "80vh" }}>
            <div className="card-body">
                <img src={product.image} className="card-img-top mx-auto d-block" alt="" style={{ width: "30vh" }} />
                <h3 className="card-title fs-4">Title: {product.title}</h3>
                <p className="card-text ">Description: {product.description}</p>
                <strong className="bg-dark text-light p-2 rounded-2">Price: {product.price} $</strong>
            </div>
            <div className='container'>
                <Link to={'/products'} className='col m-2 btn btn-light fw-bolder border-dark border-2 rounded-2 text-dark '>Back to Products</Link>
            </div>
        </div>
    </>

    )
}


export default ProductDetails