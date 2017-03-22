import React from 'react'
import { Button} from 'react-bootstrap'

export class EmployeeForm extends React.Component {
  onSubmit() {
    let data = {
      firstName: $('input[name="firstName"]').val(),
      lastName: $('input[name="lastName"]').val(),
    }
    this.props.submit(data)
  }

  render() {
    return (
      <div>
        firstName: <input type="text" name="firstName" defaultValue={this.props.employee ? this.props.employee.firstName : null}/>
        <br/><br/>
        lastName: <input type="text" name="lastName" defaultValue={this.props.employee ? this.props.employee.lastName : null}/>
        <br/><br/>
        <Button bsStyle='success' onClick={ this.onSubmit.bind(this) }>Save</Button>
        {this.props.employee ? <Button bsStyle='danger' onClick={ () => this.props.delete(this.props.employee.id) }>Delete</Button> : null}
      </div>
    )
  }
}

export class DepartmentForm extends React.Component {
  onSubmit() {
    let data = {
      name: $('input[name="name"]').val(),
      description: $('input[name="description"]').val(),
    }
    this.props.submit(data)
  }

  render() {
    return (
      <div>
        name: <input type="text" name="name" defaultValue={this.props.department ? this.props.department.name : null}/>
        <br/><br/>
        description: <input type="text" name="description" defaultValue={this.props.department ? this.props.department.description : null}/>
        <br/><br/>
        <Button bsStyle='success' onClick={ this.onSubmit.bind(this) }>Save</Button>
        {this.props.department ? <Button bsStyle='danger' onClick={ () => this.props.delete(this.props.department.id) }>Delete</Button> : null}
      </div>
    )
  }
}
