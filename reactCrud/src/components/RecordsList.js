import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const API_BASE = process.env.REACT_APP_API_BASE;

export default class RecordsList extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false
        }
    }

    delete() {

        let config = {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        };

        axios.get(API_BASE + '/delete.php?id=' + this.props.student.id, config)
            .then(response => {
                console.log(response.data)
                return this.setState({ redirect: true })
            })
            .catch(err => console.log(err));
    }

    render() {
        const { id, first_name, last_name, email } = this.props.student;

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/view" />
        }

        return (
            <tr key={id}>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
                <td>
                    <Link to={'/edit/' + id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={this.delete}
                    >Delete</button>
                </td>
            </tr>
        );
    }
}
