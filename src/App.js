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
        </Routes>
      </div>
    </Router>
  )
}

export default App
