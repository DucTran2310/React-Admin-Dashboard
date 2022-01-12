import React from 'react'

import { Visibility } from '@material-ui/icons'

import './widget.css'
import img from '../../assets/img/user1.jpg'

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={img} alt="" className="widgetImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={img} alt="" className="widgetImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={img} alt="" className="widgetImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={img} alt="" className="widgetImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={img} alt="" className="widgetImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm
