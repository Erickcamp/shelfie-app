import React, { Component } from "react";
import Product from "./Product";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  deleteProduct = (id) => {
    axios.delete(`/api/inventory/${id}`).then(() => {
      this.props.getInventory();
    });
  };

  render() {
    return (
      <div>
        <div>Dashboard</div>
        {this.props.inventoryList.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              deleteProduct={this.deleteProduct}
              selectedHandler={this.props.selectedHandler}
            />
          );
        })}
      </div>
    );
  }
}
export default Dashboard;
