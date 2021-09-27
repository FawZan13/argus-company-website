import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import './Employee.css'

const Employee = (props) => {
    const {name, age, country, salary, role, img} = props.employee;
    return (
                <div className="card card-style text-white rounded-3 my-3 mx-2 py-3 px-1">
                    <div className="text-center my-2">
                        <img height="154" width="149" className="rounded-circle photo" src={img} alt=""></img>
                    </div>
                    <div className="text-center my-2">
                        <h4>Name: {name}</h4>
                        <h5>Role: {role}</h5>
                        <h5>Age: {age}</h5>
                        <h5>Counrtry: {country}</h5>
                        <h5>Salary: {salary}</h5>
                    </div>
                    <div className="footer text-center my-2">
                        <button onClick={() => props.handleAddToTeam(props.employee)} className="btn btn-outline-danger text-white"><FontAwesomeIcon icon={faFolderPlus} /> Add to team</button>
                    </div>
                </div>
    );
};

export default Employee;