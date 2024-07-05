import React, { useState } from 'react'

export default function Footer() {
    const travelStyle = {
        color: '#23F3CA'
    };

    const usStyle = {
        color: '#FFC858'
    };

    const taglineStyle = {
        fontSize: '0.8rem',
        color: '#FEEDA9',
    };

    const brand = {
        color: '#F3B523',
        fontWeight: 'bold',
}

const styles = {
    container: {
        fontFamily: "'Arial', sans-serif",
        lineHeight: '1.6',
    },
    list: {
        listStyleType: 'none',
        paddingLeft: 0,
    },
    listItem: {
        marginBottom: '15px',
    },
    emoji: {
        marginRight: '10px',
    },

    salutation: {
        marginBottom: '0',
        fontWeight: 'bold',
    },
};

const [email, setEmail] = useState('');


return (
    <>
        <div className='footer-area'>
            <div className='footer'>
                <div className='footer-brand'>
                    <div className="footer-img d-flex flex-column">
                        <img src="/logo192.png" alt="" width="100" height="auto" className="d-inline-block" />
                        <a className="foot-brand" href="#">
                            <span style={travelStyle}>Untamed</span><span style={usStyle}>Voyage</span>
                        </a>
                        <span style={taglineStyle}>Unforgettable Adventures, Crafted by Experts</span>
                    </div>

                </div>

                <div className='footer-content'>
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h5>123 Main Street,</h5>
                                <h5>Anytown, CA 12345</h5>
                                <h5>USA</h5>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <h6>(555) 555-1212</h6>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <h6>demo@untamedvoyage.com</h6>
                        </div>
                    </div>
                </div>

                <div className='footer-content'>
                    <h3>Learn More</h3>
                    <p>About Us</p>
                    <p><a className="footer-link" href="#staticBackdrop" data-bs-toggle="modal">Consult</a></p>
                    <p>Packages</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>

                <div className='footer-content'>
                    <h3>Our Newsletter</h3>
                    <p>Subscribe to our newsletter to get our news & discounts delivered to you.</p>
                    <br />
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope"></i></span>
                        <input type="email" className="form-control" placeholder="Enter your E-mail" aria-label="email" aria-describedby="basic-addon2" />
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn-bd-subscribe btn" type="button" data-bs-toggle="modal" data-bs-target="#SubscribeConfirmationModal">Subscribe</button>
                    </div>
                </div>

            </div>
            <div className="footer-signature">
                <div className='copyright-signature'>
                    <h5>&copy; 2024. All Rights Reserved. </h5>
                </div>
                <div className='copyright-signature'>
                    <p>Designed and Built by Martin Purification</p>
                </div>
            </div>
            <div className="footer-signature">
                <div className='social-links'>
                    <h4>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-instagram"></i>
                    </h4>
                </div>
                <div className='social-links'>
                    <p>Connect with us.</p>
                </div>
            </div>
        </div>

        <div className="modal fade" id="SubscribeConfirmationModal" tabIndex="-1" aria-labelledby="SubscribeConfirmationModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Welcome to <b><span style={travelStyle}>Untamed </span><span style={usStyle}>Voyage</span></b> Community! <i className="fas fa-plane-departure"></i></h1>
                        </div>
                    <div className="modal-body">
                        <div style={styles.container}>
                            <p>Thanks for joining the <span style={brand}>Untamed Voyage</span> community! We're thrilled to have you on board and excited to share our adventures with you.</p>

                            <h4>Get ready to:</h4>
                            <ul style={styles.list}>
                                <li style={styles.listItem}>
                                    <strong><span style={styles.emoji}>🌍</span>Discover inspiring travel destinations:</strong><br />
                                    We'll send you regular updates on exotic locations, hidden gems, and off-the-beaten-path adventures.
                                </li>
                                <li style={styles.listItem}>
                                    <strong><span style={styles.emoji}>✈️</span>Learn valuable travel tips:</strong><br />
                                    From packing hacks to cultural insights, our newsletters will equip you for your next <span style={brand}>Untamed Voyage</span>.
                                </li>
                                <li style={styles.listItem}>
                                    <strong><span style={styles.emoji}>💼</span>Receive exclusive offers and discounts:</strong><br />
                                    Be the first to know about special deals and promotions on <span style={brand}>Untamed Voyage</span> itineraries.
                                </li>
                            </ul>

                            <p style={styles.salutation}>Welcome aboard!</p>

                            <p>The <span style={brand}>Untamed Voyage</span> Team 🌟</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Got it!</button>
                    </div>
                </div>
            </div>
        </div>

    </>
)
}
