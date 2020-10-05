import React from 'react';
import { Button } from 'react-bootstrap';
import './RegistrationsDetails.css';

const RegistrationsDetails = (props) => {
    const { volunteeringName, date, photo, _id } = props.registrationsList;
    
    const deleteRegistration = () => {
        fetch(`https://nameless-falls-04775.herokuapp.com/delete/${_id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('volunteer task deleted successfully')
                }
            })
    }
    return (
        <div className="registration-list-container">
            <div className="reg-card-image">
                <img src={photo} alt="" />
            </div>
            <div className="registration-details">
                <h5>{volunteeringName}</h5>
                <h6>{date}</h6>
                <Button variant="danger" className="registration-delete-btn" onClick={deleteRegistration}>Cancel</Button>
            </div>
        </div>
    );
};

export default RegistrationsDetails;