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
    return (
        
        <div className="employee-container row">
            <div className="employee-list col-lg-9 col-md-9">
                {
                    employees.map(employee => <Employee employee={employee}></Employee>)
                }
            </div>
            <div className="employee-cart col-lg-3 col-md-3">
            
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Team;