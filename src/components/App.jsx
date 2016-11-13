import React from 'react'

import Header from './Header'
import MainScroll from './MainScroll'

export default React.createClass({
  render () {
    return (
      <div className='app-container'>
        <Header />
        <MainScroll />
      </div>
    )
  }
})
