import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './RegistrationsDetails.css';

const RegistrationsDetails = (props) => {
    const { volunteeringName, date, photo, _id } = props.registrationsList;
    let history = useHistory();

    const deleteRegistration = () => {
        fetch(`http://localhost:5000/delete/${_id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    history.push("/");
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