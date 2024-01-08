import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Get Categories from API
    useEffect(() => {
        getAllCategories();
    }, []);

    // Get All Categories
    const getAllCategories = () => {
        fetch('http://localhost:5000/categories')
            .then((res) => res.json())
            .then((data) => {
                const firstCategory = data[0][0]; // Assuming there is at least one category
                setCategories(data[0]);
                setSelectedCategory(firstCategory);
                getProductsByCategory(firstCategory);
            });
    };

    // Get products based on selected category
    const getProductsByCategory = (categoryName) => {
        fetch(`http://localhost:5000/products?category=${categoryName}`)
            .then((res) => res.json())
            .then((data) => setFilteredProducts(data));
    };

    // Handle category selection
    const handleCategorySelection = (categoryName) => {
        setSelectedCategory(categoryName);
        getProductsByCategory(categoryName);
    };

    return (
        <div>
            <h1 className="text-center mt-5">Mini-Store Categories</h1>

            {/* Display Categories */}
            <table className="table table-striped d-flex justify-content-center ">
                <thead>
                    <tr className='text-center'>
                        {categories.map((category) => (
                            <th key={category}>
                                <button className={`btn btn-light border border-dark m-2 text-center ${selectedCategory === category ? 'active' : ''}`} onClick={() => handleCategorySelection(category)}>
                                    {category}
                                </button>
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>
            {/* Display Filtered Products */}
            <div className="row text-center p-5">
                {filteredProducts.map((product) => (
                    <div className="container col-4">
                        <div className="card m-1 p-1" key={product.id}>
                            <img src={product.image} className="card-img-top" alt={product.title} style={{ height: "20vh" }} />
                            <div className="card-body">
                                <p className="card-title fw-bold h6">{product.title}</p>
                                <p className="card-text">{product.description.slice(0, 100)}</p>
                                <p>Price: {product.price}</p>
                            </div>
                            <Link to={`/products/view/${product.id}`} className="btn btn-info btn-sm">View</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories;
