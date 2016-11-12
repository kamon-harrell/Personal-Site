import React from 'react'
import ReactDOM from 'react-dom'

import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'

const Logo = props => {
  return (
    <div className="logo">
      <img className="picture" src="images/profile-placeholder.gif" alt="this is a tree eventually" />
      <span className="Details"> {props.me} <br /> {props.github} <br /> {props.linkedin} </span>
      <span className="Title"> <h1> KAMONS BLOG</h1> </span>
      <ButtonGroup className="Drop">
        <DropdownButton title="Nav" id="bg-nested-dropdown">
          <MenuItem eventKey="1">Home</MenuItem>
          <MenuItem eventKey="2">About</MenuItem>
        </DropdownButton>
      </ButtonGroup>
    </div>
  )
}

export default Logo
