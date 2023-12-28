import React from "react";
import Footer from "../Components/footer";
import Newheader from "../Components/newheader"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheckCircle } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";

const customStyles = {
    container: {
        maxWidth: '400px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        margin: 'auto'
    },
    headerText: {
        color: '#333',
        textAlign: "center"
    },
    priceTag: {
        fontSize: '2em',
        textAlign: "center"
    },
    selectButton: {
        backgroundColor: '#4C68EF',
        color: 'white',
        border: 'none',
        borderRadius: '30px',
        padding: '10px 20px',
        width: '80%',
        textAlign: "center"
    },
    p: {
        textAlign: "center"
    },
    listItem: {
        listStyleType: 'none',
        color: 'black',
        margin: "30px"
    },
    icon: {
        color: 'green'
    }
};

function PlaneAndPrice() {
    const cardStyle = {
        width: '95%', // Adjust as needed
        // margin: '20px 20px 20px 20px', // This adds 20px distance between the cards
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // This adds a box shadow
        position: 'relative',
        borderRadius: '10px'
    };

    return (
        <>
            <Newheader />

            <div className="container mt-5 mb-5">
                <h2 style={{ textAlign: 'center' }}>Choose your pricing plan</h2>
                <h2 style={{ textAlign: 'center' }}>Find one that works for you</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3 mt-5">
                            <div style={customStyles.container}>
                                <p className="mt-4" style={customStyles.headerText}><b>Silver Membership</b></p>
                                <p style={customStyles.priceTag}>$99</p>
                                <p style={{ textAlign: "center", fontSize: "10px" }}>Every year</p>
                                <p style={{ textAlign: "center", fontSize: "14px" }}><b>Occupation health Service Plan</b></p>

                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button className="mt-5" type="button" style={customStyles.selectButton}>Select</button>
                                </div>
                                <hr />
                                <ul className="mt-3">
                                    <li style={customStyles.listItem}><BsCheckCircleFill style={customStyles.icon} /> Drug Account Only</li>
                                    <li style={customStyles.listItem}><BsCheckCircleFill style={customStyles.icon} /> $75 Per Drug Test</li>
                                    <li style={customStyles.listItem}><BsCheckCircleFill style={customStyles.icon} /> $65 Per Alcohol Test</li>
                                    <li style={customStyles.listItem}><BsCheckCircleFill style={customStyles.icon} /> Online 24/7 Access</li>
                                    <li style={customStyles.listItem}><BsCheckCircleFill style={customStyles.icon} /> Access to 20,000 labs Nationwide</li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-3 mt-5">
                            <div style={customStyles.container}>
                                <p className="mt-4" style={customStyles.headerText}><b>Gold Membership</b></p>
                                <p style={customStyles.priceTag}>$175</p>
                                <p style={{ textAlign: "center", fontSize: "10px" }}>Every year</p>
                                <p style={{ textAlign: "center", fontSize: "14px" }}><b>*DOT Random Drug & Alcohol Testing Program*
                                </b></p>

                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button className="mt-5" type="button" style={customStyles.selectButton}>Select</button>
                                </div>
                                <hr />
                                <ul className="mt-3">
                                    <li style={customStyles.listItem}><BsCheckCircleFill style={customStyles.icon} /> DOT Random Enrollment</li>
                                    <li style={customStyles.listItem}><BsCheckCircleFill style={customStyles.icon} /> Random Enrollment Certificate * DOT REQUIREMENT*</li>
                                    <li style={customStyles.listItem}><BsCheckCircleFill style={customStyles.icon} /> Access to 50,000 + Labs Nationwide</li>
                                    <li style={customStyles.listItem}><BsCheckCircleFill style={customStyles.icon} /> Drug Test $70</li>
                                    <li style={customStyles.listItem}><BsCheckCircleFill style={customStyles.icon} /> Alcohol Test $60</li>
                                    <li style={customStyles.listItem}><BsCheckCircleFill style={customStyles.icon} /> Dedicated Account Manager</li>
                                    <li style={customStyles.listItem}><BsCheckCircleFill style={customStyles.icon} /> DOT Safety Audit Support</li>
                                    <li style={customStyles.listItem}><BsCheckCircleFill style={customStyles.icon} /> 24/7 Online Access</li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default PlaneAndPrice