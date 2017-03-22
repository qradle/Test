import React from 'react'
import { connect } from 'react-redux'
import { Col, Button} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { loadEmployee, saveEmployee, deleteEmployee } from '../actions'
import { EmployeeForm } from './forms'

class Employee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      needRedirect: false
    }
  }
  componentWillMount() {
    let id = window.location.pathname.split('/').slice(-1)[0]
    this.props.load(id)
  }

  delete(id) {
    this.props.delete(id)
    this.setState({needRedirect: true})
  }

  render() {
    if (this.state.needRedirect) {
      return ( <Redirect replace to='/employees' /> )
    } else
    return (
      !this.props.employee.loading
        ? this.props.employee.items
            ? <EmployeeForm
                employee = {this.props.employee.items}
                submit = {(data) => this.props.save(data, this.props.employee.items.id)}
                delete = {this.delete.bind(this)}
              />
            : null
        : <div> loading... </div>
    )
  }
}

var mapStateToProps = state => ({
  employee: state.employee
})
var mapDispatchToProps = dispatch => ({
  load: (id) => {
    dispatch( loadEmployee(id) )
  },
  save: (data, id) => {
    dispatch( saveEmployee(data, id) )
  },
  delete: (id) => {
    dispatch( deleteEmployee(id) )
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employee)
