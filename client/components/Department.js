import React from 'react'
import { connect } from 'react-redux'
import { Col, Button} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { loadDepartment, saveDepartment, deleteDepartment } from '../actions'
import { DepartmentForm } from './forms'

class Department extends React.Component {
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
      return ( <Redirect replace to='/departments' /> )
    } else
    return (
      !this.props.department.loading
        ? this.props.department.items
            ? <DepartmentForm
                department = {this.props.department.items}
                submit = {(data) => this.props.save(data, this.props.department.items.id)}
                delete = {this.delete.bind(this)}
              />
            : null
        : <div> loading... </div>
    )
  }
}

var mapStateToProps = state => ({
  department: state.department
})
var mapDispatchToProps = dispatch => ({
  load: (id) => {
    dispatch( loadDepartment(id) )
  },
  save: (data, id) => {
    dispatch( saveDepartment(data, id) )
  },
  delete: (id) => {
    dispatch( deleteDepartment(id) )
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Department)
