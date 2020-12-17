import React, { Component } from 'react'

export default class RecordsList extends Component {
    render() {
        const {first_name, last_name, email} = this.props.student;
        return (
            <tr>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
                <td>
                    <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}
