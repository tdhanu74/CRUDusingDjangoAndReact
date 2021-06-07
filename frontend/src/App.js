import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import CustomModal from "./component/Modal";
import axios from "axios";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      listing: [],    //List of Items
      modal: false,   //To check whether to display modal or not
      activeItem: {   //Selected Item
        timestamp: "",
        data: "",
      },
    }
  }

  componentDidMount(){  //Runs after the component is mounted
    this.refreshList();
  }

  refreshList = () => { //Retrieves the data from the backend
    axios
      .get("/api/list1/")
      .then((res) => this.setState({ listing: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });  //Toggles the modal 
  };

  handleSubmit = (item) => {  //Inserts an item or updates selected item
    this.toggle();

    if (item.auto_increment_id) { //Updates
      axios
        .put(`/api/list1/${item.auto_increment_id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios //Inserts
      .post("/api/list1/", item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {  //Deletes selected Item
    axios
      .delete(`/api/list1/${item.auto_increment_id}`)
      .then((res) => this.refreshList());
  };

  createItem = () => {  //Creates item that is to be inserted
    const item = { timestamp: "", data: "" };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {  //Selects Item to be updated
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  renderItems = () => { //Maps the list of items to list to be displayed
    const newItems = this.state.listing;

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2`}
          title={item.data}
        >
          {item.data}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {  //HTML render
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createItem}
                >
                  Add Data
                </button>
              </div>
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <CustomModal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
