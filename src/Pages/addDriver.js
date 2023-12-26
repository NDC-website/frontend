import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Footer from "../Components/footer";
import Header from "../Components/header";

import { Cookies } from 'react-cookie';
import axios from "axios";


function AddDriver() {
    const cookies = new Cookies();
    const [drivers, setDrivers] = useState([
        {
            id: 1,
            fname: "",
            lname: "",
            ssn: "",
            cdlstate: "",
            dlnumber: "",
        },
    ]);

    const makeNewDriver = () => {
        setDrivers((prevDrivers) => [
            ...prevDrivers,
            {
                id: prevDrivers.length + 1,
                fname: "",
                lname: "",
                ssn: "",
                cdlstate: "",
                dlnumber: "",
            },
        ]);
    };

    const deleteDriver = (id) => {
        setDrivers((prevDrivers) => prevDrivers.filter((driver) => driver.id !== id));
    };

    const handleDriverChange = (e, id) => {
        const { name, value } = e.target;
        setDrivers((prevDrivers) =>
            prevDrivers.map((driver) =>
                driver.id === id ? { ...driver, [name]: value } : driver
            )
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your form submission logic here


        try {
            const membership = cookies.get('membershipdata')
            const token = cookies.get('token'); // Assuming your token is stored with the key 'token'
            const headers = {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}` // Include the authorization token in the headers
            };
            const response = await axios.post('http://localhost:8000/api/userlogin/addsub', { membership, drivers }, { headers })
            
            console.log(`backend response : ${JSON.stringify(response.data)}`);
            console.log('Form submitted with data:', drivers);
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }

    };


    return (
        <>
            <Header />

            <div className="container mt-4">
                <p style={{ fontSize: '30px', fontWeight: 500 }}>Add Drivers</p>
                <p>
                    Upon enrolling in the Consortium, you can add all your active drivers
                    that have negative pre-employment DOT drug test results and have been in
                    a random pool within the previous 30 days. DOT requires a new
                    pre-employment drug test if a driver is not in a random pool for more
                    than 30 days.
                </p>
                <form action="/signup3" method="post" onSubmit={handleSubmit}>
                    {drivers.map((driver) => (
                        <div key={driver.id} className="row mt-2">
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                        name="fname"
                                        value={driver.fname}
                                        onChange={(e) => handleDriverChange(e, driver.id)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                        name="lname"
                                        value={driver.lname}
                                        onChange={(e) => handleDriverChange(e, driver.id)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="SSN"
                                        name="ssn"
                                        value={driver.ssn}
                                        onChange={(e) => handleDriverChange(e, driver.id)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="CDL State"
                                        name="cdlstate"
                                        value={driver.cdlstate}
                                        onChange={(e) => handleDriverChange(e, driver.id)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="DL Number"
                                        name="dlnumber"
                                        value={driver.dlnumber}
                                        onChange={(e) => handleDriverChange(e, driver.id)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-1">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => deleteDriver(driver.id)}
                                >
                                    x
                                </button>
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="btn btn-success mb-3"
                        style={{ width: '100%' }}
                        onClick={makeNewDriver}
                    >
                        Click Here to Add More Drivers
                    </button>
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        className="mr-3"
                        required
                    />
                    Click Here to Confirm the Drivers Listed Above have Negative DOT
                    Pre-Employment Drug Test Results - Then Click Finished Adding Drivers
                    below.
                    <p className="mt-3 ms-2">
                        If you are Not Adding Drivers - Click Finished Adding Drivers Below.
                    </p>
                    <button type="submit" className="btn btn-success">
                        Finish Adding Drivers
                    </button>
                </form>
            </div>


            <Footer />
        </>
    );
}

export default AddDriver;
