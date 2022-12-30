import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ManageOrder from './Pages/Dashboard/ManageOrder/ManageOrder';
import Order from './Pages/Dashboard/Order/Order';
import About from './Pages/Home/About/About';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import ProductDetails from './Pages/Home/Products/ProductDetails/ProductDetails';
import ProductOrderForm from './Pages/Home/Products/ProductOrderForm/ProductOrderForm';
import Products from './Pages/Home/Products/Products/Products';
import Login from './Pages/Login_impormation/Login/Login';
import Register from './Pages/Login_impormation/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import PribateRoute from './Pages/PribateRoute/PribateRoute';
import Footer from './Pages/Sheard/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
       {/* el tag under route  pribate producted routed exist user accptes*/}
        <Route path="/products/:productId" element={<PribateRoute>
          <ProductDetails />
        </PribateRoute>} />
        <Route path="/productDetails/productOrderForm" element={<ProductOrderForm />} />
        {/* single route path fixed and anather multiply route system  */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="order" element={<Order />} />
          <Route path="manageOrder" element={<ManageOrder/>} />
          <Route path="addProduct" element={<AddProducts/>} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App; 