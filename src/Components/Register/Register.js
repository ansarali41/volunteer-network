import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Register.css'
import { UserContext } from '../../App';


const Register = () => {
    const { volKey } = useParams();
    const [newVolunteer, setNewVolunteer] = useState([])
    useEffect(() => {
        fetch('https://nameless-falls-04775.herokuapp.com/volunteerTasks')
            .then(response => response.json())
            .then(data => {
                const selectedVolunteer = data.find(task => task._id === volKey);
                setNewVolunteer(selectedVolunteer)
            })

    }, [volKey])

    const { name, photo } = newVolunteer;

    // user information
    const [user, setUser] = useContext(UserContext);
    const { displayName, email } = user;
    const history = useHistory();

    // registration form handler
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = registerData => {
        const newRegistrationData = { ...registerData, photo }
        fetch('https://nameless-falls-04775.herokuapp.com/addRegistration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRegistrationData)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Registration successfully done')
                    history.push("/registrationList");
                }
            })
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
                    <input name="fullName" defaultValue={displayName} ref={register({ required: true })} placeholder="Full Name" /> <br />
                    {errors.fullName && <span style={{ color: 'red' }}>Full Name is required</span>} <br />

                    <input name="email" defaultValue={email} ref={register({ required: true })} placeholder="Email or Username" /> <br />
                    {errors.email && <span style={{ color: 'red' }}>Email or user name is required</span>} <br />

                    <input name="date" type="date" ref={register({ required: true })} placeholder="Date" /> <br />
                    {errors.date && <span style={{ color: 'red' }}>Date is required</span>} <br />

                    <input name="description" ref={register({ required: true })} placeholder="Description" /> <br />
                    {errors.description && <span style={{ color: 'red' }}>Description is required</span>} <br />

                    <input name="volunteeringName" defaultValue={name} ref={register({ required: true })} placeholder="volunteering name" /> <br />
                    {errors.volunteeringName && <span style={{ color: 'red' }}>Volunteer name is required</span>} <br />
                    {/* <Link to="/registrationList"> */}
                    <input className="bg-primary text-white" type="submit" value="Registration" />
                    {/* </Link> */}
                </form>
            </div>
        </div>
    );
};

export default Register;