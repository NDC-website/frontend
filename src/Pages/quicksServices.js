import React from "react";
import Footer from "../Components/footer";
import Newheader from "../Components/newheader"
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceCard = ({ title, description, price }) => {
    const cardStyle = {
        width: '80%', // Adjust as needed
        margin: 'auto',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' // This adds a box shadow
    };

    return (
        <div className="card mb-3" style={cardStyle}>
            <div className="row g-0 align-items-center p-3">
                <div className="col-md-8">
                    <h5 className="card-title"><b>{title}</b></h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="col-md-2 text-center">
                    <p className="card-text"><small className="text-muted">{price}</small></p>
                </div>
                <div className="col-md-2 text-center">
                    <button type="button" className="btn btn-primary"><p>Order Now</p></button>
                </div>
            </div>
        </div>
    );
};

function QuickService() {

    const testing = [
        { title: "DOT Pre-Employment", description: "Use this area to describe one of your services.", price: "$75" },
        { title: "Post-Accident Testing", description: "A DOT Drug test and Alcohol test is required after any truck is invol...", price: "$85" },
        { title: "B&A Test", description: "Breath & Alcohol", price: "$65" }
    ];

    const cardStyle = {
        width: '95%', // Adjust as needed
        // margin: '20px 20px 20px 20px', // This adds 20px distance between the cards
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // This adds a box shadow
        position: 'relative',
        borderRadius: '10px'
    };

    const circleStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#ebeaea', // You can change the color
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '-30px',
        left: 'calc(50% - 30px)',
        fontSize: '20px'
    };

    const services = [
        { number: 1, title: "Private Fleet Drug/Alcohol Testing", description: "The DOT and FMCSA regulations..." },
        { number: 2, title: "Owner Operator- DOT Drug/Alcohol Program", description: "Requirements for truck owner-operators in the US..." },
        { number: 3, title: "Small and Large DOT and FMCSA regulated Companies", description: "An all-in-one solution for drug testing compliant with DOT and FMCSA regulations..." }
    ];
    return (
        <>
            <Newheader />
            <div className="container">
                <div className="container mt-5">
                    <h2 style={{ textAlign: 'center' }}>On-Demand Testing</h2>
                    <div className="mt-4">
                        {testing.map((service, index) => (
                            <ServiceCard key={index} title={service.title} description={service.description} price={service.price} />
                        ))}
                    </div>
                </div>

                <div className="container mt-5">
                    <h2 style={{ textAlign: 'center' }}>Our Services</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mt-5">
                                <div className="card mb-3" style={cardStyle}>
                                    <div className="circle" style={circleStyle}>1</div>
                                    <div className="card-body mt-4">
                                        <h5 className="card-title">Private Fleet Drug/Alcohol Testing</h5>
                                        <p className="card-text">The DOT and FMCSA regulations make it mandatory for private fleets in the US to comply with the drug and alcohol testing requirements. Nationwide Drug centers offer top-notch drug testing programs for private fleets. Our drug testing services include for private fleets include:</p>
                                        <div>
                                            <ul>
                                                <li>Random testing</li>
                                                <li>Post-accident drug testing</li>
                                                <li>Substance abuse </li>
                                                <li>Guidance and assistance related to drug testing</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-5">
                                <div className="card mb-3" style={cardStyle}>
                                    <div className="circle" style={circleStyle}>2</div>
                                    <div className="card-body mt-4">
                                        <h5 className="card-title">Owner Operator- DOT Drug/Alcohol Program</h5>
                                        <p className="card-text">Owner-operators of the trucks in the United States need to comply with the DOT FMCSA rules and regulations pertaining to drug and alcohol testing. The initial step to becoming DOT compliant is to enroll in a drug and alcohol random consortium program for owner-operators and DOT companies. This will ensure that you are not only selected for drug testing from a pool of eligible drivers but will also notify when and where you can take the test.

                                            At Nationwide drug centers, we provide quick and easy enrollment into our random DOT consortium program for owner-operators. Our drug testing services include:</p>
                                        <div>
                                            <ul>
                                                <li>Enrollment into our drug & alcohol testing consortium.</li>
                                                <li>Pre-employment testing</li>
                                                <li>Post-accident testing</li>
                                                <li>Random testing</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-5">
                                <div className="card mb-3" style={cardStyle}>
                                    <div className="circle" style={circleStyle}>3</div>
                                    <div className="card-body mt-4">
                                        <h5 className="card-title">Small and Large DOT and FMCSA regulated Companies</h5>
                                        <p className="card-text">Nationwide drug centers offer an all-in-one solution for quick and easy compliance of the trucking companies with DOT and FMCSA regulations. We offer the following services for small trucking companies at a convenient and affordable price:</p>
                                        <div>
                                            <ul>
                                                <li>Random drug testing from a random consortium</li>
                                                <li>Pre-employment drug testing</li>
                                                <li>Post-accident testing</li>
                                                <li>Follow-up testing</li>
                                                <li>Return to duty testing</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default QuickService