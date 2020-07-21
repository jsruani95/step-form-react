import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        //PROCESS FORM//
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

       const {values: {firstName, lastName, email, occupation, city, bio}} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data"></AppBar>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        ></ListItem>
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        ></ListItem>
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        ></ListItem>
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={occupation}
                        ></ListItem>
                        <ListItem
                            primaryText="City"
                            secondaryText={city}
                        ></ListItem>
                        <ListItem
                            primaryText="Bio"
                            secondaryText={bio}
                        ></ListItem>
                    </List>
                    <br></br>
                    <RaisedButton
                        label="Confirm Details"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    ></RaisedButton>
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    ></RaisedButton>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails