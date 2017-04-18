import React from 'react'
import ReactDOM from 'react-dom'

import Logo from './Logo'

export default React.createClass({
  render () {
    return (
        <div>
          <Logo me={"Kamon Harrell"} github={"Github"} linkedin={"Linkedin"} />
          <h1>PROJECT PAGE</h1>
          <p>
            here you will find my projects
            
          </p>
        </div>
    )
  }
})
