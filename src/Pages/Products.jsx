import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import Categories from "./Categories"


const Products = (props) => {

    const [product, setProducts] = useState([])

    // get Products From API
    useEffect(() => {
        getAllProducts()
    }, [])

    // Get All Products
    const DB_data = 'http://localhost:5000/products';
    const getAllProducts = () => {
        fetch(DB_data)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
    }


    // Delete Method
    const deleteProduct = (product) => {

        console.log(product);
        // Sweet Alert Delete
        Swal.fire({
            title: `Do you want to delete ${product.title}... ?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((data) => {
            if (data.isConfirmed) {
                const DB_data_By_ID = `http://localhost:5000/products/${product.id}`;
                fetch(DB_data_By_ID, {
                    method: "DELETE"
                }).then((res => res.json))
                    .then((data) => console.log(data))
                    //  then call getAllProducts() function to get all products after delete
                    .then(() => getAllProducts())
                Swal.fire({
                    title: "Deleted!",
                    text: ` ${product.title} has been deleted.`,
                    icon: "success"
                });
            }
        });
    }

    // const addProduct = () => {
    //     fetch(DB_data, {
    //         method: "POST"
    //     }).then((res) => res.json).then((data)=>)
    // }

    return (<>
        <h1 className="text-center mt-5">Mini-Store Products</h1>

        <Link to={'/products/add'} className="btn btn-success mt-5">Create +</Link>

        <table className="table table-striped mt-5">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th className="ps-5">Details</th>
                </tr>
            </thead>
            <tbody>
                {product.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td className="col-3 fw-bolder">{product.title}</td>
                            <td className="col-1"><img src={product.image} alt="" style={{ width: "5vw" }} /></td>
                            <td className="col-4">{String(product.description).slice(0, 100)}... </td>
                            <td className="col-1 fw-bold">{product.price}</td>
                            <td >
                                <Link to={`/products/view/${product.id}`} className="btn btn-info btn-sm">View</Link>
                                <Link to={`/products/edit/${product.id}`} className="btn btn-success btn-sm ms-2 me-2">Update</Link>
                                {/* () => { deleteProduct(product.id) } ---- callback function*/}
                                <button className="btn btn-danger btn-sm" onClick={() => { deleteProduct(product) }}>Delete</button>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    </>

    )

}

export default Products