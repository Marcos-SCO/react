import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-dark mb-5">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand text-white text-lg brand-text" to="/">MovieSeriesInfo</Link>
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fas fa-film fa-2x" id="tmdb-logo" />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;