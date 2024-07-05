import React, { useState } from 'react';

export default function ConnectUs() {
    const travelStyle = {
        color: '#0CC28C'
    };

    const usStyle = {
        color: '#DBB411'
    };

    const [budget, setBudget] = useState(1000);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [errors, setErrors] = useState({});
    const [submitMessage, setSubmitMessage] = useState('');

    const handleTextChange = (event) => {
        let value = parseInt(event.target.value.replace(/\D/g, ''), 10);
        if (isNaN(value)) {
            value = 1000;
        } else if (value < 1000) {
            value = 1000;
        }
        setBudget(value);
    };

    const handleRangeChange = (event) => {
        let value = parseInt(event.target.value, 10);
        if (value < 1000) {
            value = 1000;
        }
        setBudget(value);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!name) {
            newErrors.name = 'Full Name is required';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            newErrors.email = 'Valid Email is required';
        }

        if (!countryCode) {
            newErrors.countryCode = 'Country Code is required';
        }

        const phoneRegex = /^\d{10,15}$/;
        if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
            newErrors.phoneNumber = 'Valid Phone Number is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // Form submission logic
            window.alert('Thank you for submitting your details! We will get back to you soon.');
            clearForm();
        }
    };

    const clearForm = () => {
        setName('');
        setEmail('');
        setCountryCode('');
        setPhoneNumber('');
        setLocation('');
        setBudget(1000);
        setErrors({});
    };

    return (
        <>
            <div className="modal fade" id="staticBackdrop" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Plan your Trip with <b><span style={travelStyle}>Untamed</span> <span style={usStyle}>Voyage</span></b>
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <label htmlFor="name">Full Name</label>
                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="email">Email address</label>
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon2">
                                        <select
                                            className="input-group-select dropdown-toggle"
                                            aria-label="Select country code"
                                            value={countryCode}
                                            onChange={(e) => setCountryCode(e.target.value)}
                                        >
                                            <option value="" disabled>Select country code</option>
                                            <option value="+1">+1 (USA)</option>
                                            <option value="+44">+44 (UK)</option>
                                            <option value="+91">+91 (India)</option>
                                            <option value="+93">+93 (Afghanistan)</option>
                                            <option value="+355">+355 (Albania)</option>
                                            <option value="+213">+213 (Algeria)</option>
                                            <option value="+376">+376 (Andorra)</option>
                                            <option value="+244">+244 (Angola)</option>
                                            <option value="+54">+54 (Argentina)</option>
                                            <option value="+61">+61 (Australia)</option>
                                            <option value="+32">+32 (Belgium)</option>
                                            <option value="+55">+55 (Brazil)</option>
                                            <option value="+86">+86 (China)</option>
                                        </select>
                                    </span>
                                    <input
                                        type="tel"
                                        id='phone-no'
                                        className="form-control"
                                        placeholder="Enter phone number"
                                        aria-label="Recipient's phone number"
                                        aria-describedby="basic-addon2"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                {errors.countryCode && <div className="text-danger">{errors.countryCode}</div>}
                                {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}

                                <div className="mb-3">
                                    <label htmlFor="basic-url" className="form-label">Your travel preferences:-</label>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                                        City
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault2">
                                                        Beach
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault3">
                                                        Trek
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault4">
                                                        Landscape
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-text" id="basic-addon4">You can select more than one preference.</div>
                                </div>

                                <label htmlFor="customRange1" className="form-label">Trip Budget</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">$</span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={budget}
                                        onChange={handleTextChange}
                                        aria-label="Amount (to the nearest dollar)"
                                    />
                                    <span className="input-group-text">.00</span>
                                    <input
                                        type="range"
                                        className="form-range"
                                        id="customRange1"
                                        value={budget}
                                        onChange={handleRangeChange}
                                        min="1000"
                                        max="10000"
                                        step="100"
                                    />
                                </div>

                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        placeholder="Enter your preferred location"
                                        id="locations"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    ></textarea>
                                    <label htmlFor="floatingTextarea">Preferred Location</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={clearForm}
                            >Close</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                                data-bs-dismiss="modal"
                            >Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            {submitMessage && (
                <div className="alert alert-success alert-dismissible fade show floating-message-box" role="alert">
                    {submitMessage}
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setSubmitMessage('')}></button>
                </div>
            )}
        </>
    );
}
