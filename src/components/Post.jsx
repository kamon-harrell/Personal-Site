import React from 'react'

export default React.createClass({
  render () {
    const { title } = this.props

    return (
      <div className="Post">
        <h2>{title}</h2>
        <p>Lorem ipsum random words</p>
      </div>
    )
  }
})
