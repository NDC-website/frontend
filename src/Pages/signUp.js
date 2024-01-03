import React, { useState } from 'react';
import Footer from "../Components/footer";
import Header from "../Components/header";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import Newheader from '../Components/header';
const url = process.env.REACT_APP_URL;


const SignUp = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [formData, setFormData] = useState({
        fname: '',
        title: '',
        phone: '',
        password: '',
        lname: '',
        email: '',
        cpassword: '',
        cname: '',
        dotnumber: '',
        cphone: '',
        address1: '',
        fax: '',
        address2: '',
        city: '',
        referred: '',
        state: '',
        zipcode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here

        try {
            // Set headers for the request
            const headers = {
                'Content-Type': 'application/json',
                // You can add other headers here if needed
            };
            console.log(`form data : ${formData}`)
            // Make an Axios POST request to your backend server with headers
            const response = await axios.post(`${url}/api/userlogin/signup`, formData, { headers });

            // Handle the response from the server (customize based on your needs)
            const data = response.data
            const token = data.token;
            // Set the cookie
            cookies.set('token', token, {
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 10 minutes expiration
                path: '/', // The path of your website
                // secure: true // Uncomment if using HTTPS
            });
            navigate("/adddriver")
        } catch (error) {
            // Handle errors (customize based on your needs)
            console.error('Error submitting form:', error.message);
        }
    };

    return (
        <>
            <Newheader />

            <div className="container mb-5">


                <div className="container">
                    <div className="row">
                        <div className="col-md-2 mt-5">

                        </div>
                        <div className="col-md-8 mt-5">
                            <p style={{ fontSize: '25px', marginBottom: '0px' }}>Primary Contact Person</p>
                            <p>Designated Employee Representative (DER)</p>
                            <hr />
                            <p style={{ fontSize: '12px' }}>
                                <b style={{ color: 'red' }}>*</b> Denotes required field
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">First Name <b style={{ color: 'red' }}>*</b></label>
                                            <input type="text" className="form-control" name="fname" value={formData.fname} onChange={handleChange} required />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Title (Optional)</label>
                                                    <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Phone</label>
                                                    <input type="number" className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">New Password <b style={{ color: 'red' }}>*</b></label>
                                            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Last Name <b style={{ color: 'red' }}>*</b></label>
                                            <input type="text" className="form-control" name="lname" value={formData.lname} onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email <b style={{ color: 'red' }}>*</b></label>
                                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Confirm Password <b style={{ color: 'red' }}>*</b></label>
                                            <input type="password" className="form-control" name="cpassword" value={formData.cpassword} onChange={handleChange} required />
                                        </div>
                                    </div>
                                </div>

                                {/* Company Information */}
                                <p className="mt-5" style={{ fontSize: '30px' }}>Company Information</p>
                                <hr />
                                <div className="mb-3">
                                    <label className="form-label">Company Name <b style={{ color: 'red' }}>*</b></label>
                                    <input type="text" className="form-control" name="cname" value={formData.cname} onChange={handleChange} required />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">DOT Authority Number</label>
                                            <input type="text" className="form-control" name="dotnumber" value={formData.dotnumber} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Phone <b style={{ color: 'red' }}>*</b></label>
                                            <input type="number" className="form-control" name="cphone" value={formData.cphone} onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Address 1 (May not be P.O. Box Addresses)</label>
                                            <input type="text" className="form-control" name="address1" value={formData.address1} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Fax</label>
                                            <input type="number" className="form-control" name="fax" value={formData.fax} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Address 2</label>
                                            <input type="text" className="form-control" name="address2" value={formData.address2} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">City <b style={{ color: 'red' }}>*</b></label>
                                            <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Referred By (optional)</label>
                                            <input type="text" className="form-control" name="referred" value={formData.referred} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">State <b style={{ color: 'red' }}>*</b></label>
                                            <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">Zip Code <b style={{ color: 'red' }}>*</b></label>
                                            <input type="text" className="form-control" name="zipcode" value={formData.zipcode} onChange={handleChange} required />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ alignContent: 'flex-end' }}>
                                    <button type="submit" className="btn btn-success">
                                        <p>Add Driver</p>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-2 mt-5">

                        </div>
                    </div>
                </div>





            </div>


            <Footer />
        </>
    );
};

export default SignUp;
