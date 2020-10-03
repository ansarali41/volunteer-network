import React from 'react';
import { Button, FormControl } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="text-center mt-5 mb-5">
            <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
            <div className="d-flex justify-content-center">
                <FormControl type="text" placeholder="Search" className="mr-sm-6 w-25" />
                <Button className="ml-2" variant="primary">Search</Button>
            </div>
        </div>
    );
};

export default Banner;