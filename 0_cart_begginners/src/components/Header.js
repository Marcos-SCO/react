import React from 'react';


export default function Header(props) {
    return (
        <header class="row block center">
            <div>
                <a href="/">
                    <h1>Small Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Cart</a>
                <a href="#/siging">SigIn</a>
            </div>
        </header>
    );
};