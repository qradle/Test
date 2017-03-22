import React, { PureComponent } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
export default class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <Nav stacked>
          <NavItem href='/employees'> Employees </NavItem>
          <NavItem href='/departments'> Departments </NavItem>
        </Nav>
      </div>
    )
  }
}
