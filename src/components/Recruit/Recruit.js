import React from 'react';
import './Recruit.css';

const Recruit = (props) => {
    const {recruit} = props;
    let total = 0;
    for(const employee of recruit){
        total = total + employee.salary;
    }
    return (
        // recruit cart section
        <div className="cart text-center text-white">
            <h5 className="p-2">Team Member Added: {props.recruit.length}</h5>
            <h5 className="p-2">Total Cost: {total}</h5>
            <h5 className="p-2">Team Members:</h5>
            {
                recruit.map(employee => <h6 className="member my-3 text-white mx-2 py-2">{employee.name}</h6>)
            }
        </div>
    );
};

export default Recruit;