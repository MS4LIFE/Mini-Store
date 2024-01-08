// import logo from './logo.svg';

import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer'
import Products from './Pages/Products';
import Home from './Pages/Home.jsx';
import About from './Components/About/About.jsx';
import Categories from './Pages/Categories.jsx';
import AddProduct from './Pages/AddProduct.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';
import EditProduct from './Pages/EditProduct.jsx';






function App() {

  return (

    <div className='App'>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2'>
            <Sidebar />
          </div>
          <div className='col-10'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Outlet />}>
                <Route path='' element={<Products />} />
                <Route path='add' element={<AddProduct />} />
                <Route path='view/:productID' element={<ProductDetails />} />
                <Route path='edit/:productID' element={<EditProduct />} />
              </Route>

              <Route path='/about' element={<About />} />

              <Route path='/categories' element={<Categories />} />
            </Routes>
          </div>
        </div>

      </div>
      <Footer />
    </div>


  );
}

export default App;
