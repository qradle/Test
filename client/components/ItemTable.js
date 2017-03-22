import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

export default class ItemTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      shouldRedirect: null,
      selectedItemId: null
    }
  }

  render() {
    return (
      <div>
        {this.state.shouldRedirect
          ? <Redirect push to={window.location.pathname + `/${this.state.selectedItemId}`} />
          : null
        }
        <Table striped bordered condensed responsive hover>
          <thead>
            <tr>
              <th>#</th>
              {this.props.fields.map( (field, i) => <th key={i}>{field}</th>)}
            </tr>
          </thead>
          <tbody>
            {this.props.items.map( (item, i) =>
              <tr key={item.id} onClick={() => this.setState({shouldRedirect: true, selectedItemId: item.id})} style={{'cursor': 'pointer'}}>
                <td> {i+1} </td>
                {this.props.fields.map( (field, j) => <th key={j}>{item[field]}</th>)}
              </tr>
            )}
          </tbody>
        </Table>
        <Button bsStyle="success" onClick={this.props.createCallback}>create</Button>
      </div>
    )
  }
}
