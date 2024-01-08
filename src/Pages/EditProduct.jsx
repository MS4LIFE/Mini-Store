import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'


const EditProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState(null)

    const { productID } = useParams()

    // Navigate to a specified URL
    let navigate = useNavigate()

    const DB_data = `http://localhost:5000/products/${productID}`;
    const formSubmit = (e) => {
        e.preventDefault()
        console.log("Title", title);
        console.log("Price", price);
        console.log("description", description);
        console.log("image", image);


        fetch(DB_data, {
            method: "PUT",
            headers: {
                // "Content-Type": "multipart/form-data; boundary=AaB03x",
                'Content-type': 'application/json'
            },
            // convert data to string

            body: JSON.stringify({
                title,
                price,
                description,
                category,
                image
            })
        })
            .then((res) => {
                console.log(res);
                res.json()
            })
            .then((data) => {
                console.log(data)
                navigate('/products')
            })

        // UPDATE using axios library
        // axios.post(DB_data, {
        //     title,
        //     price
        // })
        //     .then((data) => {
        //         console.log(data)
        //     })

    }
    return (
        <form onSubmit={formSubmit}>
            <div className="container-fluid  border border-dark rounded-1 p-2 col-6 mt-5">

                {/* Title */}
                <div className="mb-3 pt-5">
                    <label htmlFor="productTitle" className="form-label h5 fw-bold">Title</label>
                    <input type="text"
                        className="form-control border-dark shadow-none"
                        id="productTitle" aria-describedby="Product title"
                        placeholder='Product title here'
                        onChange={(e) => { setTitle(e.target.value) }} />
                </div>

                {/* Image */}
                <div className="mb-3">
                    <label htmlFor="formFileSm" className="form-label">Small file input example</label>
                    <input className="form-control form-control-sm"
                        id="formFileSm" type="file" onChange={(e) => { setImage(URL.createObjectURL(e.target.files[0])) }} />
                </div>

                {/* Description */}
                <div className="mb-3 col ">
                    <label htmlFor="productDescription" className="form-label h5 fw-bold">Description</label>
                    <input type="text"
                        className="form-control border-dark shadow-none"
                        id="productDescription" aria-describedby="Product description"
                        placeholder='Product description here'
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>
                {/* Price */}
                <div className="mb-3 col-3 ">
                    <label htmlFor="productPrice" className="form-label h5 fw-bold">Price</label>
                    <input type="number"
                        className="form-control border-dark shadow-none"
                        id="productPrice" aria-describedby="Product price"
                        placeholder='Product price here'
                        onChange={(e) => { setPrice(e.target.value) }}
                    />

                </div>
                <div className=''>
                    <button type="submit" className="btn btn-dark px-3">Edit Product</button>
                </div>


                <div className="row">
                    <div className="container text-center">
                        <Link to={'/products'} className='col m-2 btn btn-light fw-bolder border-dark border-2 rounded-2 text-dark '>Back to Products</Link>
                    </div>
                </div>
            </div>

        </form >
    )
}

export default EditProduct