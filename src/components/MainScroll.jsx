import React from 'react'
import Infinite from 'react-infinite'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <Infinite containerHeight={200} elementHeight={[111, 252, 143]}>
          <div className="111-px"><h1> DIV 1</h1></div>
          <div className="252-px"><h1> DIV 2</h1></div>
          <div className="143-px"><h1> DIV 3</h1></div>
      </Infinite>
    )
  }
})
