import React, { Component } from 'react'
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;

export default class Edit extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: this.props.match.params.id,
            first_name: '',
            last_name: '',
            email: '',
        }
    }

    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    componentDidMount() {

        let config = {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        };

        axios.get(`${API_BASE}/getById.php?id=` + this.props.match.params.id, config)
            .then(res => {
                const { first_name, last_name, email } = res.data.users;
                this.setState({
                    first_name,
                    last_name,
                    email
                })
            })
            .catch((error) => console.log(error));
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            id: this.state.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
        };

        let config = {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        };

        axios.post(`${API_BASE}/update.php`, obj, config)
            .then(res => {
                console.log(res.data);
                // const { first_name, last_name, email } = res.data.users;
                // this.setState({
                //     first_name,
                //     last_name,
                //     email
                // })
            });
    }

    render() {
        return (
            <div>
                <div style={{ marginTop: 10 }}>
                    <h3>Edit user</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>First name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.first_name} onChange={this.onChangeFirstName} />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.last_name}
                                onChange={this.onChangeLastName} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="text" className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail} />
                        </div>

                        <input type="submit" value="Update user" className="btn btn-primary" />
                    </form>
                </div>
            </div>
        )
    }
}
