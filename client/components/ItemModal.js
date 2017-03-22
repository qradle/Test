import React from 'react'
import { Modal } from 'react-bootstrap'

export default class ItemModal extends React.Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Creation Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.form}
        </Modal.Body>
      </Modal>
    )
  }
}
