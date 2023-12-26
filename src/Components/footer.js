import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="container-fluid text-center" style={{backgroundColor: '#f5f5f5', padding: '20px'}}>
            <div className="row">
                <div className="col-sm-4">
                    <p style={{color: '#333', lineHeight: '0.3'}}>© 2023 Express Labs</p>
                    <p style={{lineHeight: '0.3'}}><a href="/privacy-policy" style={{color: '#007bff'}}>Privacy Policy</a></p>
                    <p style={{color: '#333', lineHeight: '0.3'}}>Design & Development by FRAGMENT</p>
                </div>
                <div className="col-sm-4">
                    <p style={{whiteSpace: 'nowrap', lineHeight: '0.8'}}>
                        <a href="/about" style={{color: '#007bff'}}>About</a> |
                        <a href="/contact" style={{color: '#007bff'}}>Contact</a> |
                        <a href="/faq" style={{color: '#007bff'}}>Frequently Asked Questions</a> |
                        <a href="/testimonials" style={{color: '#007bff'}}>Testimonials</a> |
                        <a href="/logout" style={{color: '#007bff'}}>Logout</a>
                    </p>
                </div> 
                <div className="col-sm-4">
                    <p style={{lineHeight: '0.8'}}>800-341-1185</p>
                    <p style={{lineHeight: '0.8'}}>info@expresslabs.com</p>
                </div> 
            </div> 
        </footer> 
    );
}

export default Footer;
