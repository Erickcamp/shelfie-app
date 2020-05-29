import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
        price: 0,
        imgurl: '',
    };
  }

  handleInput = (e) => this.setState({[e.target.name]: e.target.value})
  resetState = () => this.setState({name:'', price:0, imgurl:''})

  render() {
      const {name, price, imgurl} = this.state
    return (
      <div>
        <div>Form</div>
        <input
        placeholder='Image URL'
        name='imgurl'
        value={imgurl}
        onChange={this.handleInput} 
        />
        <input 
        placeholder='Product Name'
        name='name'
        value={name}
        onChange={this.handleInput}
        />
        <input 
        placeholder='0'
        name='price'
        value={price}
        onChange={this.handleInput} 
        />
        <button onClick={this.resetState}>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    );
  }
}

export default Form;
