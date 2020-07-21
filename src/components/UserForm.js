import React, { Component } from 'react';

import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',

    }

    //NEXT STEP//
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    //PREVIOUS STEP//
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    //HANDLE FIELDS CHANGE//
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {

        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values = {firstName, lastName, email, occupation, city, bio}

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    ></FormUserDetails>
                );
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    ></FormPersonalDetails>
                );
            case 3:
                return (
                    <Confirm
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                    ></Confirm>
                );
            case 4:
                return <Success></Success>    
        }

        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
