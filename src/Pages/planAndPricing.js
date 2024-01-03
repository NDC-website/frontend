import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Components/footer';
import Newheader from '../Components/newheader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheckCircleFill } from 'react-icons/bs';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

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
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [payment, setPayment] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [paymentId, setPaymentId] = useState("");
    const [signature, setSignature] = useState("");
    const cookies = new Cookies();
    const navigate = useNavigate();
    const handleSelectPlan = (plan) => {
        // Set the selected plan in the component's state
        setSelectedPlan(plan);
        console.log(plan)
        // Send a request to the backend with the selected plan
        // Replace 'https://example.com/api/selected-plan' with your actual backend endpoint
        const token = cookies.get('token');
        const headers = {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
        };
        axios.post('http://localhost:8000/api/membership/addpayment', { plan }, { headers })
            .then((response) => {
                if (response.status != 200) {
                    console.log("there is an issue with payment system");
                    // add tostify
                    return;
                }
                const data = response.data;
                console.log(data)
                const { amount, currency, id } = data.order;
                const email = data.email;

                var options = {
                    "key": "rzp_test_ZbzAdM2rFQPnfZ", // Enter the Key ID generated from the Dashboard
                    "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": currency,
                    "name": "Membership Payment", //your business name
                    "description": "Testing Transaction",
                    // "image": app_logo,
                    "order_id": id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    "handler": function (response) {
                        // alert(response.razorpay_payment_id);
                        // alert(response.razorpay_order_id);
                        // alert(response.razorpay_signature);
                        setOrderId(response.razorpay_order_id);
                        setSignature(response.razorpay_signature);
                        setPaymentId(response.razorpay_payment_id);
                        setPayment(true);


                        const token = cookies.get('token');
                        const headers = {
                            'Content-Type': 'application/json',
                            'authorization': `Bearer ${token}`
                        };

                        axios.post("http://localhost:8000/api/membership/savemembership",{plan},{headers})
                        .then((response)=>{
                            navigate("/");
                        })
                        .catch((error)=>{
                            console.error('Error in saving membership:', error);
                        })
                    },
                    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                        "name": email.split("@")[0], //your customer's name
                        "email": email,
                        "contact": "0123456789"  //Provide the customer's phone number for better conversion rates 
                    },
                    // "notes": {
                    //     "address": "Razorpay Corporate Office"
                    // },
                    // "theme": {
                    //     "color": "#3399cc"
                    // }
                };
                var rzp1 = new window.Razorpay(options);
                rzp1.open();
                rzp1.on('payment.failed', function (response) {
                    // alert(response.error.code);
                    // alert(response.error.description);
                    // alert(response.error.source);
                    // alert(response.error.step); 
                    // alert(response.error.reason);
                    // alert(response.error.metadata.order_id);
                    // alert(response.error.metadata.payment_id);
                    // console.log("payment nhi hua")
                });

            })
            .catch((error) => {
                console.error('Error fetching in membership payment:', error);
            });
    };

    return (
        <>
            <Newheader />
            <div className="container mt-5 mb-5">
                <h2 style={{ textAlign: 'center' }}>Choose your pricing plan</h2>
                <h2 style={{ textAlign: 'center' }}>Find one that works for you</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-3 mt-5">
                            <div style={customStyles.container}>
                                <p className="mt-4" style={customStyles.headerText}><b>Silver Membership</b></p>
                                <p style={customStyles.priceTag}>$99</p>
                                <p style={{ textAlign: "center", fontSize: "10px" }}>Every year</p>
                                <p style={{ textAlign: "center", fontSize: "14px" }}><b>Occupational Health Service Plan</b></p>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button
                                        className="mt-5"
                                        type="button"
                                        style={customStyles.selectButton}
                                        onClick={() => handleSelectPlan(1)}
                                    >
                                        Select
                                    </button>
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
                                <p style={{ textAlign: "center", fontSize: "14px" }}><b>*DOT Random Drug & Alcohol Testing Program*</b></p>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button
                                        className="mt-5"
                                        type="button"
                                        style={customStyles.selectButton}
                                        onClick={() => handleSelectPlan(2)}
                                    >
                                        Select
                                    </button>
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
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PlaneAndPrice;
