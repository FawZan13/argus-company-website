import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import './Team.css';
import Recruit from '../Recruit/Recruit';

const Team = () => {

    const [employees, setEmployees] = useState([]);
    const [recruit, setRecruit] = useState([]);

    useEffect(() => {
        fetch('./employees.JSON')
        .then(res => res.json())
        .then(data => setEmployees(data))
    }, [])

    const handleAddToTeam = (employee) => {
        const newRecruit = [...recruit, employee];
        setRecruit(newRecruit);
    }

    return (
        
        <div className="employee-container">
            <div className="employee-list">
                {
                    employees.map(employee => <Employee key={employee.key} employee={employee} handleAddToTeam={handleAddToTeam}></Employee>)
                }
            </div>
            <div className="employee-cart">
                <Recruit recruit={recruit}></Recruit>
            </div>
        </div>
    );
};

export default Team;