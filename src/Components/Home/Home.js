import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import VolunteerDetails from '../VolunteerDetails/VolunteerDetails';

const Home = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        fetch('https://nameless-falls-04775.herokuapp.com/volunteerTasks')
            .then(response => response.json())
            .then(data => setVolunteers(data))

    }, [])

    
    return (
        <div className="container" style={{background:`linear-gradient(to bottom,
            rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
            url('https://i.ibb.co/7gFRDS8/bg-img.jpg')`, height:'370px'}}>
            <Header></Header>
            <Banner></Banner>
            <Grid container direction="row" justify="center">
                {
                    volunteers.map(vol => <VolunteerDetails volunteer={vol} key={vol._id}></VolunteerDetails>)
                }
            </Grid>
        </div>
    );
};

export default Home;