import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Register.css'
import { UserContext } from '../../App';


const Register = () => {
    const { volKey } = useParams();
    const [newVolunteer, setNewVolunteer] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/volunteerTasks')
            .then(response => response.json())
            .then(data => {
                const selectedVolunteer = data.find(task => task.key === parseInt(volKey));
                setNewVolunteer(selectedVolunteer)
            })

    }, [volKey])

    const newVolunteerDetails = { ...newVolunteer }
    // console.log(newVolunteerDetails);

    // user information
    const [user, setUser] = useContext(UserContext);
    const { name, email } = user;
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="container text-center mt-5">
            <div className="mb-2">
                <Link to="/home">
                    <img style={{ width: '180px' }} src="https://i.ibb.co/0DwF3w5/main-logo.png" alt="" />
                </Link>
            </div>
            <div className="registration-form ">
                <h3>Register as a Volunteer</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="fullName" defaultValue={name} ref={register({ required: true })} placeholder="Full Name" /> <br />
                    {errors.fullName && <span style={{ color: 'red' }}>Full Name is required</span>} <br />

                    <input name="email" defaultValue={email} ref={register({ required: true })} placeholder="Email or Username" /> <br />
                    {errors.email && <span style={{ color: 'red' }}>Email or user name is required</span>} <br />


                    {/* data picker not fixed yer */}


                    <input name="date" ref={register({ required: true })} placeholder="Date" /> <br />
                    {errors.date && <span style={{ color: 'red' }}>Date is required</span>} <br />

                    <input name="description" ref={register({ required: true })} placeholder="Description" /> <br />
                    {errors.description && <span style={{ color: 'red' }}>Description is required</span>} <br />

                    <input name="volunteerName" defaultValue={newVolunteerDetails.name} ref={register({ required: true })} placeholder="Volunteer name" /> <br />
                    {errors.volunteerName && <span style={{ color: 'red' }}>Volunteer name is required</span>} <br />
                    <Link to="/registrationList">
                        <input className="bg-primary text-white" type="submit" value="Registration" />
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;