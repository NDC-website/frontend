import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Footer from "../Components/footer";
// import Header from "../Components/header";
import Newheader from "../Components/header";

import { Cookies } from 'react-cookie';
import axios from "axios";
const url = process.env.REACT_APP_URL;

function AddDriver() {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [drivers, setDrivers] = useState([
        {
            id: 1,
            name: "",
            ssn: "",
            cdlState: "",
            cdlNumber: "",
        },
    ]);

    const makeNewDriver = () => {
        setDrivers((prevDrivers) => [
            ...prevDrivers,
            {
                id: prevDrivers.length + 1,
                name: "",
                ssn: "",
                cdlState: "",
                cdlNumber: "",
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
            const token = cookies.get('token'); // Assuming your token is stored with the key 'token'
            const headers = {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}` // Include the authorization token in the headers
            };
            const response = await axios.post(`${url}/api/userlogin/addsub`, { drivers }, { headers })
            navigate("/account")
            console.log(`backend response : ${JSON.stringify(response.data)}`);
            console.log('Form submitted with data:', drivers);
            
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }

    };


    return (
        <>
            <Newheader />

            <div className="container mt-4 mb-5">
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
                                        placeholder="Enter Name"
                                        name="name"
                                        value={driver.name}
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
                                        name="cdlState"
                                        value={driver.cdlState}
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
                                        name="cdlNumber"
                                        value={driver.cdlNumber}
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
                        <p>Click Here to Add More Drivers</p>
                    </button>
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        className="mr-3"
                        required
                    />
                    <p>Click Here to Confirm the Drivers Listed Above have Negative DOT
                    Pre-Employment Drug Test Results - Then Click Finished Adding Drivers
                    below.</p>
                    <p className="mt-3 ms-2">
                        If you are Not Adding Drivers - Click Finished Adding Drivers Below.
                    </p>
                    <button type="submit" className="btn btn-success">
                        <p>Finish Adding Drivers</p>
                    </button>
                </form>
            </div>


            <Footer />
        </>
    );
}

export default AddDriver;
