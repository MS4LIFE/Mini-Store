import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const AddProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState(null)


    // Navigate to a specified URL
    let navigate = useNavigate()

    const DB_data = 'http://localhost:5000/products';
    const formSubmit = (e) => {
        e.preventDefault()
        console.log("Title", title);
        console.log("Price", price);
        console.log("description", description);
        console.log("image", image);


        fetch(DB_data, {
            method: "POST",
            // Set Data to json format
            headers: {
                'Content-type': 'application/json'
            },
            // convert data to string
            body: JSON.stringify({
                title,
                price,
                description,
                category,
                image,
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                navigate('/products')
            })

        // POST using axios library
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
                <h2 className='btn btn-success w-100 fw-bold rounded-2 p-2'>Add New Product</h2>
                <div className="mb-3 pt-2">
                    <label htmlFor="productTitle" className="form-label h5 fw-bold">Title :</label>
                    <input type="text"
                        className="form-control border-dark shadow-none"
                        id="productTitle" aria-describedby="Product title"
                        placeholder='Product title here'
                        onChange={(e) => { setTitle(e.target.value) }} />
                </div>

                {/* Image */}
                <div className="mb-3">
                    <label htmlFor="formFileSm" className="form-label">Upload Product Image :</label>
                    <input className="form-control form-control-sm"
                        id="formFileSm" type="file" onChange={(e) => { setImage(URL.createObjectURL(e.target.files[0])) }} />
                </div>

                {/* Description */}
                <div className="mb-3 col ">
                    <label htmlFor="productDescription" className="form-label h5 fw-bold">Description :</label>
                    <input type="text"
                        className="form-control border-dark shadow-none"
                        id="productDescription" aria-describedby="Product description"
                        placeholder='Product description here'
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>

                {/* Category */}
                <div className="mb-3 col ">
                    <label htmlFor="productCategory" className="form-label h5 fw-bold">Category :</label>
                    <select onChange={(e) => { setCategory(e.target.value) }} className="form-select border-dark shadow-none" aria-label="productCategory">
                        <option selected disabled>Select Category</option>
                        <option value="electronics" >electronics</option>
                        <option value="jewelry">jewelry</option>
                        <option value="men's clothing">men's clothing</option>
                        <option value="women's clothing">women's clothing</option>
                    </select>
                </div>

                {/* Price */}
                <div className="mb-3 col-3 ">
                    <label htmlFor="productPrice" className="form-label h5 fw-bold">Price :</label>
                    <input type="number"
                        className="form-control border-dark shadow-none"
                        id="productPrice" aria-describedby="Product price"
                        placeholder='Product price here'
                        onChange={(e) => { setPrice(e.target.value) }}
                    />

                </div>
                <div className=''>
                    <button type="submit" className="btn btn-success px-3">Add Product +</button>
                </div>


                <div className="row">
                    <div className="container text-center">
                        <h5 className='p-3'>
                            <Link to={'/products'} className='text-dark fw-bold'>Back to Products</Link>
                        </h5>
                    </div>
                </div>
            </div >

        </form >
    )
}

export default AddProduct