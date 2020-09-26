import React, { Component } from 'react'
import formatCurrency from '../utils';

export default class Cart extends Component {

    state = {
        showCheckout: false,
        name: "",
        email: "",
        address: "",
        showCheckout: false
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
        }
        this.props.createOrder(order)
    }

    render() {
        const { cartItems } = this.props;
        return (
            <>
                <div>
                    {cartItems.length === 0 ? <div className="cart cart-header">Carrinho vazio</div> :
                        <div className="cart cart-header">Você possui {cartItems.length} no carrinho</div>
                    }
                    <div>
                        <div className="cart">
                            <ul className="cart-items">
                                {cartItems.map(item => (
                                    <li key={item._id}>
                                        <div>
                                            <img src={item.img} alt={item.title} />
                                        </div>
                                        <div>
                                            <div>{item.title}</div>
                                            <div className="right">
                                                {formatCurrency(item.price)} x {item.count}{" "}
                                                <button
                                                    className="button"
                                                    onClick={() => this.props.removeFromCart(item)}>Remover</button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {cartItems.length > 0 && (
                            <div className="cart">
                                <div className="total">
                                    <div>
                                        Total:{" "} {formatCurrency(cartItems.reduce((a, c) => a + (c.price) * c.count, 0))}
                                    </div>
                                    <button className="button primary"
                                        onClick={() => { this.setState({ showCheckout: true }) }}
                                    >Prosseguir</button>
                                </div>
                                {this.state.showCheckout && (
                                    <div className="cart">
                                        <form onSubmit={this.createOrder}>
                                            <ul className="form-container">
                                                <li>
                                                    <label>E-mail</label>
                                                    <input name="email" type="email" required
                                                        onChange={this.handleInput}
                                                    />
                                                </li>
                                                <li>
                                                    <label>Nome</label>
                                                    <input name="name" type="text" required
                                                        onChange={this.handleInput}
                                                    />
                                                </li>
                                                <li>
                                                    <label>Endereço</label>
                                                    <input name="address" type="text" required
                                                        onChange={this.handleInput}
                                                    />
                                                </li>
                                                <li>
                                                    <button className="button primary" type="submit">Checkout</button>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

            </>
        )
    }
}
