import { useForm } from 'react-hook-form';
import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

const Registration = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
        console.log(errors);

    return (

        <div className="animated fadeIn">

                <Col xs="12" sm="6" md="3" >
                    <Card className="text-white bg-info card text-center">
                    <CardBody>
                        <blockquote className="card-bodyquote">
                        <header>Register</header>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} /><br /><br />
                            <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} /><br /><br />
                            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /><br /><br />
                            <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} /><br /><br />
                            <input type="submit" />
                        </form>
                        </blockquote>
                    </CardBody>
                    </Card>
                </Col>


            
        </div>
    );
}

export default Registration;