import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"

const Footer = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/', formData);
            console.log(`Form data : ${JSON.stringify(formData)}`);
            // Handle success - maybe clear the form or show a success message
        } catch (error) {
            console.error('There was an error submitting the form!', error);
            // Handle error - show an error message to the user
        }
    };


    return (
        <>
            <footer>
                <div className='row pt-4 pb-4 m-0' style={{ backgroundColor: "#ebeaea" }}>
                    <div className='col-md-4' style={{display :'flex', justifyContent: 'center',alignItems : 'center'}}>
                        <div style={{ textAlign: 'center' }}>
                            <p>Contact</p>
                            <p>1121 Harrison Ave</p>
                            <p>Suite 5030</p>
                            <p>Centralia WA, 98531</p>
                            <p>Info@ndctesting.com</p>
                            <p>(206)666-3360</p>
                            <p>(206)571-7659</p>
                        </div>
                    </div>
                    <div className='col-md-4' style={{display :'flex', justifyContent: 'center'}} >
                        <div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', width: '250px' }}>
                            <img src="images/logo.png" alt="Your Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '250px' }}>
                            <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://www.tiktok.com/@your_username" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-tiktok"></i>
                            </a>
                        </div>
                        </div>
                    </div>


                    <div className='col-md-4'>
                        <form onSubmit={handleSubmit} className="p-3" style={{ backgroundColor: '#ebeaea', borderRadius: '5px' }}>
                            <div className="row">
                                <div className="col">
                                    <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="form-control mb-3" />
                                </div>
                                <div className="col">
                                    <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="form-control mb-3" />
                                </div>
                            </div>
                            <input type="email" name="email" placeholder="Email*" required onChange={handleChange} className="form-control mb-3" />
                            <textarea name="message" placeholder="Message" onChange={handleChange} className="form-control mb-3"></textarea>
                            <button style={{ width: "100%" }} type="submit" className="btn btn-warning btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
