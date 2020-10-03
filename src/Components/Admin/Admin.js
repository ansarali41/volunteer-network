import React from 'react';
import { Button } from 'react-bootstrap';
import fakeData from '../../fakeData/fakeData';

const Admin = () => {
    const handleAddEvent = () => {
        fetch('http://localhost:5000/addVolunteerTasks',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(fakeData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="container">
            <Button className="btn btn-primary" onClick={handleAddEvent}>Add Event</Button>
            {/* <div className="toggle-btn-container">
                <img className="w-25" src="https://i.ibb.co/0DwF3w5/main-logo.png" alt="" />
                <p>Volunteer register list</p>
                <p>Add event</p>
            </div>
            <div className="toggle-btn-actions-container">

            </div> */}
        </div>
    );
};

export default Admin;