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
        {this.props.inventoryList.map((product) => {
        return (
        <Product 
        key={product.id}
        product={product} 
         />
        )
        })}
            
      </div>
    );
  }
}
export default Dashboard;
