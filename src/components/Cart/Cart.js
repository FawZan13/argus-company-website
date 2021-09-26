import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const employee of cart){
        total = total + employee.salary;
    }
    return (
        <div className="cart text-center">
            <h5 className="p-2">Employee Added: {props.cart.length}</h5>
            <h5 className="p-2">Total Cost: {total}</h5>
            <h5 className="p-2">Employees:</h5>
            {
                cart.map(employee => <h6 className="member">{employee.name}</h6>)
            }
        </div>
    );
};

export default Cart;