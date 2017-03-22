import React from 'react'
import { connect } from 'react-redux'
import { loadEmployees, createEmployee } from '../actions'
import { EmployeeForm } from './forms'
import ItemTable from './ItemTable'
import ItemModal from './ItemModal'

class Employees extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }
  componentWillMount() {
    this.props.load()
  }

  onCreate(data) {
    this.props.create(data)
  }

  render() {
    return (
      this.props.employees.initialized
        ? <div>
            {this.state.showModal
              ? <ItemModal
                  show = {this.state.showModal}
                  close = {() => this.setState({showModal: false})}
                  form = {
                    <EmployeeForm
                      submit = {this.onCreate.bind(this)}
                    />
                  }
                />
              : null
            }
            <ItemTable
              items = {this.props.employees.items}
              fields = {['firstName', 'lastName']}
              createCallback = {() => this.setState({showModal: true})}
            />
          </div>
        : <div> loading... </div>
    )
  }
}

var mapStateToProps = state => ({
  employees: state.employees
})
var mapDispatchToProps = dispatch => ({
  load: () => {
    dispatch(loadEmployees )
  },
  create: (data) => {
    dispatch(createEmployee(data))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees)
