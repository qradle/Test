import React from 'react'
import { connect } from 'react-redux'
import { loadDepartments, createDepartment } from '../actions'
import { DepartmentForm } from './forms'
import ItemTable from './ItemTable'
import ItemModal from './ItemModal'

class Departments extends React.Component {

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
      this.props.departments.initialized
        ? <div>
            {this.state.showModal
              ? <ItemModal
                  show = {this.state.showModal}
                  close = {() => this.setState({showModal: false})}
                  form = {
                    <DepartmentForm
                      submit = {this.onCreate.bind(this)}
                    />
                  }
                />
              : null
            }
            <ItemTable
              items = {this.props.departments.items}
              fields = {['name', 'description']}
              createCallback = {() => this.setState({showModal: true})}
            />
          </div>
        : <div> loading... </div>
    )
  }
}

var mapStateToProps = state => ({
  departments: state.departments
})
var mapDispatchToProps = dispatch => ({
  load: () => {
    dispatch(loadDepartments)
  },
  create: (data) => {
    dispatch(createDepartment(data))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Departments)
