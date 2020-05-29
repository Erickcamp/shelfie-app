import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [
        {
        name:'Video Game',
        price: 29.99,
        imgurl: 'cool.img'
      },
      {
        name:'Bike',
        price: 100,
        imgurl: 'cool.bike'
      },
      {
        name: 'Car',
        price: 1000,
        imgurl: 'verycoolcar.img'
      }
    ]
    };
  }

  render() {
    return (
      
      <div className="App">
        <Header />
        <Dashboard 
        inventoryList={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
