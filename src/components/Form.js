import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      imgurl: "",
    };
  }

  createInventory = () => {
    axios
      .post("/api/inventory", { name: this.state.name, price: this.state.price, imgurl: this.state.imgurl })
      .then((res) => {
        this.setState({
          name: res.data,
          price: res.data,
          imgurl: res.data
        });
        this.props.getInventory()
        .then(() => {
            this.resetState()
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };


  

  handleInput = (e) => this.setState({ [e.target.name]: e.target.value });
  resetState = () => this.setState({ name: "", price: 0, imgurl: "" });

  render() {
      console.log(this.state)
    const { name, price, imgurl } = this.state;
    return (
      <div>
        <div>Form</div>
        <input
          placeholder="Product Name"
          name="name"
          value={name}
          onChange={this.handleInput}
        />
        <input
          placeholder="0"
          name="price"
          value={price}
          onChange={this.handleInput}
        />
        <input
          placeholder="Image URL"
          name="imgurl"
          value={imgurl}
          onChange={this.handleInput}
        />
        <button onClick={this.resetState}>Cancel</button>
        <button onClick={() => this.createInventory()}>Add to Inventory</button>
      </div>
    );
  }
}

export default Form;
