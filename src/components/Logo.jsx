import React from 'react'

const Logo = props => {
  return (
    <div className="logo">
      <img src="images/profile-placeholder.gif" alt="this is a tree eventually" />
      <span className="Details">{props.me}<br />{props.github}<br />{props.linkedin}</span>
      <h1> KAMONS BLOG</h1>
    </div>
  )
}

export default Logo
