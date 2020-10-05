import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './VolunteerDetails.css'

const VolunteerDetails = (props) => {
    const { name, photo, _id } = props.volunteer;
 

    return (
        <Link to={`/volunteer/${_id}`} className="single-volunteer-card">
            <Card style={{ width: '12rem', height: '20rem' }}>
                <Card.Img variant="top" style={{ height: '14rem'}} src={photo} />
                <Card.Body className="text-center" style={{ backgroundColor: 'lightblue' }}>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default VolunteerDetails;