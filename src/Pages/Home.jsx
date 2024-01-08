import React from 'react'
import shoppingCarousel from '../images/Online-Shopping-1.jpg'
import shoppingHero from '../images/shopping-hero-image.jpg'
import blackFridaySale from '../images/black-friday-sale.webp'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='container'>
            <div id="carouselExampleRide" className=" carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <h1 className='text-center text-secondary p-3'>Welcome To Mini Store</h1>
                <div className="container-fluid carousel-inner rounded-2" style={{ height: "50vh", width: "79vw" }}>
                    <div className=" carousel-item active" >
                        <img src={blackFridaySale} className="d-block rounded-2" style={{ height: "50vh", width: "79vw" }} alt="Black Friday" />
                    </div>
                    <div className="carousel-item">
                        <img src={shoppingCarousel} className="d-block rounded-2" style={{ height: "50vh", width: "79vw" }} alt="Shopping Hero" />                    </div>
                    <div className="carousel-item">
                        <img src={shoppingHero} className="d-block rounded-2" style={{ height: "50vh", width: "79vw" }} alt="Black Friday Sale" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <div className='pt-5'>
                </div>
            </div>

            <button className='btn btn-dark p-3 ms-3'>
                <Link to="/products" className='text-decoration-none fw-bold text-light text-center h1'>Discover Our Products =&gt;! 😊 </Link>
            </button>
        </div>
    )
}

export default Home;