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
        
        <div className="employee-container row">
            <div className="employee-list col-md-9 col-lg-9 col-sm-7">
                {
                    employees.map(employee => <Employee key={employee.key} employee={employee} handleAddToTeam={handleAddToTeam}></Employee>)
                }
            </div>
            <div className="employee-cart col-lg-3 col-md-3 col-sm-5">
            
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Team;