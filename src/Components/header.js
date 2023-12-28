import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [status, setStatus] = useState(false)

    useEffect(() => {
        // Check token validity when the component mounts
        checkTokenValidity();
    }, []);

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        // Remove the token cookie
        cookies.remove('token', { path: '/' });
        checkTokenValidity(); // Check token validity after removing it
    };

    const handleAccountClick = () => {
        // Redirect to the profile page (replace '/profile' with your actual profile route)
        navigate('/profile');
    };

    const checkTokenValidity = () => {
        const token = cookies.get('token');
        if (token === undefined || token === 'undefined') {
            setStatus(false);
        } else {
            setStatus(true);
        }
    };

    return (
        <header >
            <div className='container' >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', backgroundColor: '#fff' }}>
                    <a href="/">
                        <img src="images/lsogo.png" alt="Logo" style={{ cursor: 'pointer' }} />
                    </a>
                    <div className="text-right" style={{ position: 'absolute', right: '20px' }}>
                        {status ? (
                            <>
                                <button className="btn btn-success me-2" onClick={handleAccountClick}>Account</button>
                            </>
                        ) : (
                            <button className="btn btn-danger me-2" onClick={handleLoginClick}>Member Login</button>
                        )}
                        <p style={{ margin: '0', color: '#007bff' }}>800-341-1185</p>
                        <p style={{ margin: '0', color: '#007bff' }}>info@expresslabs.com</p>
                    </div>
                </div>
                <div className="col-sm-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <p style={{ whiteSpace: 'nowrap', lineHeight: '0.8' }}>
                        <a href="/about" style={{ color: '#007bff', textDecoration: 'none', marginRight: '15px' }}>About</a>
                        <a href="/contact" style={{ color: '#007bff', textDecoration: 'none', marginRight: '15px' }}>Contact</a>
                        <a href="/faq" style={{ color: '#007bff', textDecoration: 'none', marginRight: '15px' }}>Frequently Asked Questions</a>
                        <a href="/testimonials" style={{ color: '#007bff', textDecoration: 'none', marginRight: '15px' }}>Testimonials</a>
                        {status ?
                            (<a href="/" style={{ color: '#007bff', textDecoration: 'none', marginRight: '15px' }} onClick={handleLogout}>Logout</a>) :
                            (<>
                                <a href="/signup" style={{ color: '#007bff', textDecoration: 'none', marginRight: '15px' }}>SignUp</a>
                                <a href="/login" style={{ color: '#007bff', textDecoration: 'none', marginRight: '15px' }}>Member Login</a>
                            </>
                            )
                        }

                    </p>
                </div>
            </div>
            <hr />
        </header>

    );
}

export default Header;
