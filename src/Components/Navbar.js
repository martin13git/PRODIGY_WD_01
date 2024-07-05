import React, { useEffect } from 'react';

export default function Navbar({ activePage }) {

    const travelStyle = {
        color: '#23F3CA'
    };

    const usStyle = {
        color: '#FFC858'
    };

    useEffect(() => {
        document.body.style.paddingTop = '60px';
        return () => {
            document.body.style.paddingTop = '0';
        };
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
                <div className="container-fluid">
                    <img src="%PUBLIC_URL%/logo192.png" alt="" width="auto" height="45" className="d-inline-block align-text-top" />
                    <a className="navbar-brand" href="#">
                        <span style={travelStyle}>Untamed</span>
                        <span style={usStyle}>Voyage</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className={`nav-link ${activePage === 'home' ? 'active' : ''}`} aria-current="page" href="#"><i className="fas fa-home"></i> Home</a>
                            <a className={`nav-link ${activePage === 'packages' ? 'active' : ''}`} href="#destinations"><i className="fas fa-umbrella-beach"></i> Packages</a>
                            <a className={`nav-link ${activePage === 'consult' ? 'active' : ''}`} href="#staticBackdrop" data-bs-toggle="modal"><i className="fas fa-user-friends"></i> Consult</a>
                            <a className={`nav-link ${activePage === 'AboutUs' ? 'active' : ''}`} href="#whyus"><i className="fas fa-hotel"></i> About Us</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
