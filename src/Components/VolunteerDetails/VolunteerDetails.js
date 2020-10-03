import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './VolunteerDetails.css'

const VolunteerDetails = (props) => {
    const { name, photo, key } = props.volunteer;
 

    return (
        <Link to={`/volunteer/${key}`} className="single-volunteer-card">
            <Card style={{ width: '12rem', height: '21rem' }}>
                <Card.Img variant="top" src={photo} />
                <Card.Body className="text-center" style={{ backgroundColor: 'lightblue' }}>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default VolunteerDetails;