import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Topbar from 'components/topbar/Topbar'
import Sidebar from 'components/sidebar/Sidebar'

import './app.css'
import Home from 'pages/homepage/Home'
import User from 'pages/user/User'
import UserDetail from './pages/userDetail/userDetail'
import NewUser from 'pages/newUser/newUser'
import ProductList from 'pages/productList/productList'
import Product from 'pages/product/Product'
import NewProduct from 'pages/newProduct/newProduct'

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" element={<User />} />
          <Route path="/user/:userId" element={<UserDetail />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
