import React from 'react'
import Infinite from 'react-infinite'
import { Link } from 'react-router'

import Header from './Header'
import MainScroll from './MainScroll'


export default React.createClass({
  render () {
    const { location } = this.props
    const containerStyle = {
      marginTop: "60px"
    }

    return (
      <div className='app-container'>

        <Header location={location} />

        <div className='container' style={containerStyle}>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>THE BODY</h1>
              <MainScroll />
            </div>
          </div>
        </div>

      </div>
    )
  }
})
