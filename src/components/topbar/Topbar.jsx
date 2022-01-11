import React from 'react'

import { NotificationsNone, Language, Settings } from '@material-ui/icons'

import './topbar.css'

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">AdStar_Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/s200x200/216417714_2994318454177087_5129527537884189386_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=-Dc9as2qcvAAX8Gg7SL&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT-yBQ7xN5jiLZ7muro1hvG4_RzTebPo1IBvpLQmUdy2wA&oe=61E2CBD1" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
