import React from 'react';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    return (
        <div className="pokemon-container">
            <div className="pokemon-list col-lg-9 col-md-9"></div>
            <div className="pokemon-list col-lg-3 col-md-3">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;