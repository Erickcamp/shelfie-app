import React, { Component } from "react";
import Product from "./Product";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>Dashboard</div>
        <Product />
      </div>
    );
  }
}
export default Dashboard;
