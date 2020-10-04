import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import VolunteerDetails from '../VolunteerDetails/VolunteerDetails';

const Home = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/volunteerTasks')
            .then(response => response.json())
            .then(data => setVolunteers(data))

    }, [])

    // style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://i.ibb.co/w7q5pbq/extra-Volunteer.png')` }}
    return (
        <div className="container">
            <Header></Header>
            <Banner></Banner>
            <Grid container direction="row" justify="center">
                {
                    volunteers.map(vol => <VolunteerDetails volunteer={vol} key={vol.key}></VolunteerDetails>)
                }
            </Grid>
        </div>
    );
};

export default Home;