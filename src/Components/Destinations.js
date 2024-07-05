import React from 'react'

export default function Destinations() {
    return (
        <div className="destinations-container" id="destinations">
            <div className='destinations'>

                <div className="card">
                    <span className="badge badge-popular">Most Popular</span>
                    <img src="./bora_bora_01.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bora Bora</h5>
                        <h6 className="card-subtitle mb-2 text-muted">French Polynesia</h6>
                        <p className="card-text">USD $5,000+ per person</p>
                        <a href="#" className="btn btn-primary">Know More...</a>
                    </div>
                </div>

                <div className="card">
                    <img src="./bangkok_01.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bangkok</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Thailand</h6>
                        <p className="card-text">USD $1,500 - $2,500 per person</p>
                        <a href="#" className="btn btn-primary">Know More...</a>
                    </div>
                </div>

                <div className="card">
                    <span className="badge badge-budget">Pocket Friendly</span>
                    <img src="./ho-chi-minh-city_01.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Ho Chi Minh City</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Vietnam</h6>
                        <p className="card-text">USD $1,000 - $2,000 per person</p>
                        <a href="#" className="btn btn-primary">Know More...</a>
                    </div>
                </div>

                <div className="card">
                <span className="badge badge-popular">Most Popular</span>
                    <img src="./maldives_01.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Maldives</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Maldives</h6>
                        <p className="card-text">USD $5,000+ per person</p>
                        <a href="#" className="btn btn-primary">Know More...</a>
                    </div>
                </div>

                <div className="card">
                    <img src="./paris_01.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Paris</h5>
                        <h6 className="card-subtitle mb-2 text-muted">France</h6>
                        <p className="card-text">USD $5,000+ per person</p>
                        <a href="#" className="btn btn-primary">Know More...</a>
                    </div>
                </div>

                <div className="card">
                    <span className="badge badge-budget">Pocket Friendly</span>
                    <img src="./bali_01.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bali</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Indonesia</h6>
                        <p className="card-text">USD $1,000 - $2,000 per person</p>
                        <a href="#" className="btn btn-primary">Know More...</a>
                    </div>
                </div>


                <div className="card">
                    <img src="./barcelona_01.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Barcelona</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Spain</h6>
                        <p className="card-text">USD $2,000 - $5,000 per person</p>
                        <a href="#" className="btn btn-primary">Know More...</a>
                    </div>
                </div>
            </div>
        </div>

    )
}
