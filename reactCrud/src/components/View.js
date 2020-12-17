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
            <RecordsList student={student} key={student.id} />
        )
    }

    render() {
        return (
            <div>
                <h3 align="center">Users List</h3>
                <table className="table table-striped table-responsive" style={{ marginTop: 20 }}>
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                       {this.usersList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
