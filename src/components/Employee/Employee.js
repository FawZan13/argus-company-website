import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './Employee.css'

const Employee = (props) => {
    const {name, age, country, salary, role, img} = props.employee;
    return (
        <div class="row">
            <div class="col-md-9 col-lg-9 col-sm-7">
                <div class="">
                    
                </div>
            </div>
        </div>
    );
};

export default Employee;