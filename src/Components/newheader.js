import React, { useState, useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Newheader = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [status, setStatus] = useState(false);

    const navLinkStyle = {
        color: 'grey',
        borderRadius: '20px',
        margin: '0 10px',
        padding: '10px 20px',
    };

    const activeNavLinkStyle = {
        ...navLinkStyle,
        backgroundColor: 'blue',
        color: 'white',
    };

    useEffect(() => {
        checkTokenValidity();
    }, []);

    const handleLogout = () => {
        cookies.remove('token', { path: '/' });
        checkTokenValidity();
        navigate('/');
    };

    const checkTokenValidity = () => {
        const token = cookies.get('token');
        setStatus(token !== undefined && token !== 'undefined');
    };

    return (
        <>
            <header style={{ backgroundColor: '#ebeaea' }}>
                <div className="row pt-1 pb-1 container">
                    <div className="col-md-2" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px' }}>
                                <img src="images/logo.png" alt="Your Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ebeaea' }}>
                                <div className="collapse navbar-collapse" style={{ backgroundColor: '#ebeaea' }}>
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="/" style={activeNavLinkStyle}><p>Home</p></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/planandprice" style={navLinkStyle}><p>Plans & Pricing </p></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/quickservices" style={navLinkStyle}><p>Quick Service </p></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/faq" style={navLinkStyle}><p>FAQ</p></a>
                                        </li>
                                        {status ? (
                                            <>
                                                <li className="nav-item">
                                                    <a href="" className="nav-link" onClick={handleLogout} style={navLinkStyle}><p>Logout</p></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/account" style={navLinkStyle}><p>Account</p></a>
                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/login" style={navLinkStyle}><p>Member Login</p></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/signup" style={navLinkStyle}><p>Sign Up</p></a>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ textAlign: 'center' }}>
                            <p><b>(206)666-3360</b></p>
                            <p><b>(206)571-7659</b></p>
                            <p><b>info@ndctesting.com</b></p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Newheader;
