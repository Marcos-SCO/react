import React, { Component } from 'react'
import axios from 'axios';

import RecordsList from './RecordsList';

const API_BASE = process.env.REACT_APP_API_BASE;

export default class View extends Component {
    state = {
        students: []
    };

    componentDidMount() {
        axios.get(API_BASE + '/list.php')
            .then(response => {
                console.log(response.data)
                this.setState({ students: response.data.users })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    usersList() {
        return this.state.students.map(student =>
            <RecordsList student={student} />
        )
    }

    render() {
        return (
            <div>
                <h3 align="center">Users List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>First Name</tr>
                        <tr>Last Name</tr>
                        <tr>Email</tr>
                    </thead>
                    <tbody>
                       {this.usersList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
