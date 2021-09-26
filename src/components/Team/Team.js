import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Employee from '../Employee/Employee';
import './Team.css';

const Team = () => {

    const [employees, setEmployees] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./employees.JSON')
        .then(res => res.json())
        .then(data => setEmployees(data))
    }, [])

    const handleAddToTeam = (employee) => {
        const newCart = [...cart, employee];
        setCart(newCart);
    }

    return (
        
        <div className="employee-container">
            <div className="employee-list">
                {
                    employees.map(employee => <Employee key={employee.key} employee={employee} handleAddToTeam={handleAddToTeam}></Employee>)
                }
            </div>
            <div className="employee-cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Team;