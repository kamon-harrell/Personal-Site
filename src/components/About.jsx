import React from 'react'

import Logo from './Logo'

export default React.createClass({
  render () {
    return (
        <div>
          <Logo me={"Kamon Harrell"} github={"Github"} linkedin={"Linkedin"} />
          <h1>ABOUT PAGE</h1>
        </div>
    )
  }
})
