import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,  //Selected Element
    };
  }

  handleChange = (e) => { //Changes the value of selected element based on change in field value
    let { name, value } = e.target;

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {  //Render for Modal
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>List Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="listing-timestamp">Timestamp</Label>
              <Input
                type="date"
                id="listing-timestamp"
                name="timestamp"
                value={this.state.activeItem.timestamp}
                onChange={this.handleChange}
                placeholder="Enter Timestamp"
              />
            </FormGroup>
            <FormGroup>
              <Label for="listing-data">Data</Label>
              <Input
                type="text"
                id="listing-data"
                name="data"
                value={this.state.activeItem.data}
                onChange={this.handleChange}
                placeholder="Enter Data"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}