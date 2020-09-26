import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">
                    {this.props.count} {this.props.count > 1 ? 'Produtos' : 'Produto'}
                </div>
                <div className="filter-sort">
                    Ordenar{" "}
                    <select 
                    value={this.props.size}
                    onChange={this.props.sortProducts}
                    >
                        <option>Ordenar</option>
                        <option value="latest">Recentes</option>
                        <option value="lowest">Menor Preço</option>
                        <option value="highest">Maior Preço</option>
                    </select>
                </div>
                <div className="filter-size">
                    Filtrar{" "}
                    <select
                    value={this.props.size}
                    onChange={this.props.filterProducts}
                    >
                        <option value="">TODOS</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
            </div>
        )
    }
}
