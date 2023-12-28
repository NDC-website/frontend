import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Footer from "../Components/footer";
import Newheader from "../Components/newheader";

import { Cookies } from 'react-cookie';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const cookies = new Cookies();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/api/userlogin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const token = data.token;
            // Set the cookie
            cookies.set('token', token, {
                expires: new Date(Date.now() + 24*60*60*1000), // 10 minutes expiration
                path: '/', // The path of your website
                // secure: true // Uncomment if using HTTPS
            });
            // Redirect the user or perform other actions
            navigate('/');
        } catch (error) {
            console.log("error")
            // Handle errors
            console.error('Error:', error);
        }
    };


    return (
        <>
            <Newheader />
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <p className="text-center mt-3" style={{ fontSize: '30px', fontWeight: '500' }}>Login</p>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </Form.Group>
                            <a href="/forgotPassword" className="">Click here if you forgot your Password</a>
                            <br />
                            <Button type="submit" className="btn btn-primary loginbtn mt-2">Login</Button>
                        </Form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="login1 pt-2 ps-2">
                            <p className="ms-3">Has your membership expired? <b>Renewing is easy!</b> </p>
                        </div>
                        <div className="login2 pt-4">
                            <ul>
                                <li><p>Click "Forgot your Password" & enter your email address</p></li>
                                <li><p>Check your email & click the link under "Forgot your Password"</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="login3"></div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
