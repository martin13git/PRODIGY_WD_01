import React from 'react'
import ConnectUs from './ConnectUs'


export default function Promo() {

    // const travelStyle = {
    //     color: '#0CC28C'
    // };

    // const usStyle = {
    //     color: '#DBB411'
    // };

    return (
        <div className='promocontainer'>
            <div className="promo-video">
                <iframe
                    id="youtube-video"
                    width="500"
                    height="281"
                    src="https://www.youtube.com/embed/KzFDmadceBQ?autoplay=1"
                    title="UntamedVoyage | Your Travel Partner"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>
            <div className='promo-content'>
                <div className='promotxt'>
                    <h2>Explore Unbound! <i className="fas fa-map"></i></h2>
                    <p>
                        Get a free quote from <span className="brand">Untamed Voyage</span> and let our travel specialists design the perfect itinerary tailored to your unique desires.  We offer a variety of travel styles, from exhilarating adventures to luxurious escapes, ensuring there's something for every explorer.  Simply fill out our quick online form with your travel preferences, and we'll create a personalized quote outlining the costs and experiences that await you on your untamed journey. Don't wait any longer - ignite your wanderlust and contact us today!
                    </p>
                </div>


                <button type="button" className="btn-custom btn-lg shadow" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Get Quote <i className="fas fa-comment-dollar"></i>
                </button>
                <ConnectUs />


                {/* <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Your <b><span style={travelStyle}>Untamed </span><span style={usStyle}>Adventure</span></b> Awaits! <i className="fas fa-route"></i></h1>
                            </div>
                            <div className="modal-body">
                                <h5>Thanks for reaching out to</h5> <span className="brand"><h3>Untamed Voyage!</h3></span>
                                <p>We've received your request for a quote and our travel specialists are eager to craft the perfect itinerary for your dream adventure.</p>
                                <p>Within 24 hours, you'll receive an email from us with a personalized quote outlining your travel options, costs, and the unforgettable experiences that await you.</p>
                                <p>In the meantime, feel free to <a data-bs-target="#exampleModalToggle2" data-bs-dismiss="modal" href="#destinations" className="link">browse our website</a> for travel inspiration.</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" data-bs-dismiss="modal">Done</button>
                            </div>
                        </div>
                    </div>
                </div> */}


                <button type="button" className="btn-custom btn-lg shadow" href="#destinations">
                    Explore Packages <i className="fas fa-plane"></i>
                </button>
            </div>

        </div>
    )
}
