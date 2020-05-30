import React, { Component } from "react";
import axios from 'axios'
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }

  componentDidMount = () => {
   this.getInventory()
  }

  getInventory = () => {
    return axios
    .get('/api/inventory')
    .then((res) => {
      this.setState({
        inventory: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      
      <div className="App">
        <Header />
        <Dashboard 
        inventoryList={this.state.inventory} 
        getInventory={this.getInventory}
        />
        <Form 
          getInventory={this.getInventory}
        />
      </div>
    );
  }
}

export default App;
