import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'


import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'

const Drop = props => {
  return (
    <div className="drop">
      <ButtonGroup className="Drop">
        <DropdownButton title="Nav" id="bg-nested-dropdown">
          <MenuItem eventKey="1" href="/#/">Home</MenuItem>
          <MenuItem eventKey="2" href="#about">About</MenuItem>
        </DropdownButton>
      </ButtonGroup>
    </div>
  )
}

export default Drop
