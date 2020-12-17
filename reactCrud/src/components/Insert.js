import React, { Component } from 'react'

export default class Insert extends Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: 10 }}>
                    <h3>Add new user</h3>
                    <form>
                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" />
                        </div>

                        <input type="submit" value="Register user" className="btn btn-primary" />
                    </form>
                </div>
            </div>
        )
    }
}