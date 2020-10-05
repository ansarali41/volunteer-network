import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import RegistrationsDetails from '../RegistrationsDetails/RegistrationsDetails';

const RegistrationList = () => {
    const [user, setUser] =useContext(UserContext);
    const [registrations ,setRegistrations]=useState([]);

    useEffect(() => {
        fetch(`https://nameless-falls-04775.herokuapp.com/registrations/${user.email}`)
        .then(response => response.json())
        .then(data =>{
            setRegistrations(data);
        })
    },[user.email,registrations])


    return (
        <div className="container">
            <Header></Header>
            <Grid container direction="row">
                {
                    registrations.map((registration => <RegistrationsDetails registrationsList={registration}  key={registration._id}></RegistrationsDetails>))
                }
            </Grid>
        </div>
    );
};

export default RegistrationList;