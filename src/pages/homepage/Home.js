import React from 'react'

import FeaturedInfo from 'components/featuredInfo/FeaturedInfo'
import Chart from 'components/chart/Chart'

import { userData } from '../../assets/dummyData'

import './home.css'

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
    </div>
  )
}

export default Home
