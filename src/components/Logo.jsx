import React from 'react'

const Logo = props => {
  return (
    <div className="logo">
      <img src="images/profile-placeholder.gif" alt="this is a tree eventually" />
      <span className="Details">{props.details}</span>
    </div>
  )
}

export default Logo
