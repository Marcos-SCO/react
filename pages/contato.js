import React from 'react';
import { Spinner } from 'reactstrap';

import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
function Contact() {
    return (
        <>
            <Menu />
            <h1>Contato</h1>
            <div className="d-flex justify-content-center">
                <Spinner color="dark" />
            </div>
        </>
    );
}

export default Contact;