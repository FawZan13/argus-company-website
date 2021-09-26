import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import './Employee.css'

const Employee = (props) => {
    const {name, age, country, salary, role, img} = props.employee;
    return (
                <div className="card ">
                    <div className="card-style w-50">
                        <div>
                            <img className="image" src={img} alt=""></img>
                        </div>
                        <h4>Name: {name}</h4>
                        <h5>Role: {role}</h5>
                        <h5>Age:{age}</h5>
                        <h5>Counrtry: {country}</h5>
                        <h5>Salary: {salary}</h5>
                        <div className="footer">
                            <button onClick={() => props.handleAddToTeam(props.employee)} className="buy-now btn btn-success"><FontAwesomeIcon icon={faFolderPlus} />add to team</button>
                        </div>
                    </div>
                </div>
    );
};

export default Employee;