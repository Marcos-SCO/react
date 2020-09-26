import React, { Component } from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import Cart from './components/Cart';

import data from './data.json';

class App extends Component {

  state = {
    products: data.products,
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    size: "",
    sort: ""
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    const filteredItems = cartItems.filter(item => item._id !== product._id);
    this.setState({
      cartItems: filteredItems
    });
    localStorage.setItem("cartItems", JSON.stringify(filteredItems));
  }

  createOrder = (order) => {
    alert(`Need to save ${order.name}`)
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 })
    }

    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  sortProducts = (e) => {
    const sort = e.target.value;

    let sortedProducts = this.state.products.slice().sort((a, b) => sort === "lowest"
      ? a.price > b.price ? 1 : -1
      : sort === "highest"
        ? a.price < b.price
          ? 1 : -1
        : a._id > b._id
          ? 1
          : -1
    );

    this.setState({
      sort: sort,
      products: sortedProducts
    })
  }

  filterProducts = (e) => {
    if (e.target.value === "") {
      this.setState({
        products: data.products
      })
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter(product => product.availableSizes.indexOf(e.target.value) >= 0)
      })
    }
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length} size={this.state.size} sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products products={this.state.products} addToCart={this.addToCart} />
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder} />
            </div>
          </div>
        </main>
        <footer>All Rights Reserved</footer>
      </div>
    );
  }
}

export default App;
