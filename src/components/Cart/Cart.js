import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let member = [];
    for(const employee of cart){
        total = total + employee.salary;
        member.push(employee.name);
    }
    return (
        <div className="cart ">
            <h5 className="p-2">Employee Added: {props.cart.length}</h5>
            <h5 className="p-2">Total Cost: {total}</h5>
            <h5 className="p-2">Employees:</h5>
            <p className="member">{member}</p>
        </div>
    );
};

export default Cart;