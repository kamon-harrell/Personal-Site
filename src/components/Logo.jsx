import React from 'react'
import ReactDOM from 'react-dom'

import Drop from './DropMenu'

const Logo = props => {
  return (
    <div className="Logo">
      <img className="Picture" src="images/profile-placeholder.gif" alt="this is a tree eventually" />
      <span className="Details"> {props.me} <br /> {props.github} <br /> {props.linkedin} </span>
      <span className="Title"> <h1> KAMONS BLOG</h1> </span>
      <span className="Drop">{Drop()}</span>
    </div>
  )
}

export default Logo
