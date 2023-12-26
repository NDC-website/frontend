import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../Components/footer";
import Header from "../Components/header";
import { Cookies } from 'react-cookie';

function Membership() {
    const [formData, setFormData] = useState({
        plan: "",
        quantity: "",
        agreeToTerms: false,
    });
    const cookies = new Cookies();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Access form data from the state
        console.log('Form submitted with data:', formData);
        cookies.set("membershipdata",formData)
        // You can add your form submission logic here, for example, an Axios call

        // Redirect or navigate to another page if needed
        // navigate('/path-to-redirect');
        navigate("/adddriver");
    };

    return (
        <>
            <Header />
            <div className="container mt-5">
                <form onSubmit={handleSubmit}>
                    <p style={{ fontSize: '30px', fontWeight: '500' }}>Choose Membership</p>
                    <p>Choose your desired length of membership to the DOT Consortium.</p>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="plan"
                            value="1"
                            required
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            <b>1 Year Membership - $ 99.00</b>
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="plan"
                            value="2"
                            required
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            <b>3 Year Membership - $ 199.00</b>
                        </label>
                    </div>
                    <hr className="mt-5" />
                    <p className="mt-5" style={{ fontSize: '30px', fontWeight: '500' }}>
                        Add Supervisor Training - $100.00 each
                    </p>
                    <input
                        type="text"
                        placeholder="Quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                    />
                    <p className="mt-3">All supervisors are required to have supervisor training.</p>
                    <hr className="mt-4" />
                    <p className="mt-5" style={{ fontSize: '30px', fontWeight: '500' }}>
                        Terms of Use
                    </p>
                    <p>
                        In order to participate in the Express Labs DOT Consortium, you must agree
                        to our Terms of Use.
                    </p>
                    <a href="link-to-terms-of-use" className="mt-3">
                        Read the Terms of Use
                    </a>
                    <input
                        className="mr-3"
                        type="checkbox"
                        name="agreeToTerms"
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        required
                    />
                    I Agree to the Terms of Use
                    <div style={{ alignContent: 'flex-end' }}>
                        <button type="submit" className="btn btn-success mt-3">
                            Add Drivers
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Membership;
