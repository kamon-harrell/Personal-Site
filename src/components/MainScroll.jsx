import React from 'react'
import Infinite from 'react-infinite'
import { Link } from 'react-router'



export default React.createClass({
  render () {
    return (

      <Infinite containerHeight={200} elementHeight={40}>
          <div className="one"><h1>div</h1></div>
          <div className="two"><h1>div</h1></div>
          <div className="three"><h1>div</h1></div>
            <div className="three"><h1>div</h1></div>
              <div className="three"><h1>div</h1></div>
                <div className="three"><h1>div</h1></div>
                  <div className="three"><h1>div</h1></div>
                    <div className="three"><h1>div</h1></div>
          
      </Infinite>
    )
  }
})
