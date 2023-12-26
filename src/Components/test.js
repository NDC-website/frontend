import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdComponent = () => {
    const [status, setStatus] = useState(false);
    return (
        <div className="container mt-2">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src='images/home.png' alt="Description of image" />
            </div>
            <div className="mt-4">
                <div className="row">
                    <div className="col-md-8" style={{lineHeight: '0.4'}}>
                        <div className="text-center">
                            <h1>$99 for 1 Year</h1>
                            <h2>(Only $199 for 3 Years)</h2>
                            <h3 >Unlimited Number of Drivers</h3>
                            <h1 className="mt-3">DOT Compliant Instantly!</h1>
                            <h3>Enrollment Certificate Emailed Immediately</h3>
                            {status?
                                (<form action="/signup2" method="get">
                                    <button type="submit" className="btn btn-success">Join the DOT Consortium</button>
                                </form>)
                                :
                                (<form action="/signup1" method="get">
                                    <button type="submit" className="btn btn-success">Join the DOT Consortium</button>
                                </form>)
                            }
                            <h2 className="my-4"><b>Or Call: 800-341-1185</b></h2>
                            <div className="home5">
                                <p >FIND COLLECTION SITES NEAR YOU</p>
                            </div>
                            <div className="home6">
                                <p >Search by zip code to find locations near you! </p>
                                <form action="/search" method="get">
                                    <button type="submit" className="btn btn-primary ms-2">search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="home3 text-center">
                            <p>MEMBER BENEFITS</p>
                        </div>
                        <div className="px-2 home4" style={{lineHeight: '0.6'}}>
                            <p>Immediate Enrollment Certificate</p>
                            <p>Express Labs only Manages FMCSA</p>
                            <p>Order Drug Tests Online - No Forms Needed</p>
                            <p>24/7/365 Customer Support</p>
                            <p>Complete Online Account Access</p>
                            <p>30,000+ Drivers in the Random Pool</p>
                            <p>Drug & Alcohol Policy Included</p>
                            <p>Quarterly Random Notifications</p>
                            <p>20,000+ Collection Sites Nationwide</p>
                            <p>Audit Support Included</p>
                            <p>Online Supervisor Training</p>
                            <p>MIS Compliance Reports Included</p>
                            <p>Employer & Employee Handbooks Included</p>
                            <p>Quest Diagnostics Laboratory</p>
                            <p>Medical Review Officer (MRO)</p>
                            <p>Substance Abuse Professionals</p>
                            <p>Drug Tests $80 - Alcohol Tests $50</p>
                            <p>FMCSA Clearinghouse</p>
                            <p>Designate "Express Labs Consortium"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AdComponent;
