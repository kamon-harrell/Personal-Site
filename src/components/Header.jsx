import React from 'react'

import Drop from './DropMenu'

export default React.createClass({
  render () {
    return (
      <div className="Logo">
        <img className="Picture" src="images/profile-placeholder.gif" alt="this is a tree eventually" />
        <span className="Details"> Kamon Harrell <br /> Github <br /> Linkedin </span>
        <span className="Title"> <h1> KAMONS BLOG</h1> </span>
        <span className="Drop">{Drop()}</span>
      </div>
    )
  }
})
