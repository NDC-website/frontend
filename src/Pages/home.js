import React from "react";
import Footer from "../Components/footer";
import Newheader from "../Components/header"

function Home() {


    return (
        <>
            <Newheader />
            <img src="images/home.webp" alt="img" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-3 mb-3">
                        <div className="card h-100" style={{ backgroundColor: '#1d1d37' }}>
                            <div className="card-body" style={{ backgroundColor: '#1d1d37' }}>
                                <img src="images/s1.png" alt="img" style={{ width: '150px', textAlign: 'center' }} />
                                <p style={{ textAlign: 'center', color: 'white' }} className="card-text"><strong>Quick Service 24/7 Online </strong> </p>
                                <p style={{ textAlign: 'center', color: 'white' }} className="card-text mt-3">You Get your online access to schedule, check results and lab locations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card h-100" style={{ backgroundColor: '#1d1d37' }}>
                            <div className="card-body" style={{ backgroundColor: '#1d1d37' }}>
                                <img src="images/s2.png" alt="img" style={{ width: '150px', textAlign: 'center' }} />
                                <p style={{ textAlign: 'center', color: 'white' }} className="card-text"><strong>Certified MRO's </strong> </p>
                                <p style={{ textAlign: 'center', color: 'white' }} className="card-text mt-3">Our Labs have certified MRO'S so results are verified and published</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 ml-2" >
                        <div className="card h-100" style={{ backgroundColor: '#1d1d37' }}>
                            <div className="card-body" style={{ backgroundColor: '#1d1d37' }}>
                                <img src="images/s3.png" alt="img" style={{ width: '150px', textAlign: 'center' }} />
                                <p style={{ textAlign: 'center', color: 'white' }} className="card-text"><strong>FMCSA Clearinghouse</strong> </p>
                                <p style={{ textAlign: 'center', color: 'white' }} className="card-text mt-3">We offer full house services including clearinghouse queries</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 ml-2" >
                        <div className="card h-100" style={{ backgroundColor: '#1d1d37' }}>
                            <div className="card-body" style={{ backgroundColor: '#1d1d37' }}>
                                <img src="images/s4.png" alt="img" style={{ width: '150px', textAlign: 'center' }} />
                                <p style={{ textAlign: 'center', color: 'white' }} className="card-text"><strong>50,000 + Locations</strong> </p>
                                <p style={{ textAlign: 'center', color: 'white' }} className="card-text mt-3">Our network is available throughout the 50 states in US & Canada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="images/agencies.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />

            <Footer />
        </>
    )
}

export default Home