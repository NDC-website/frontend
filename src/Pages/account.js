import React, { useState, useEffect } from 'react';
import Footer from '../Components/footer';
import Newheader from '../Components/header';
import axios from 'axios';
import { Cookies } from 'react-cookie';
const url = process.env.REACT_APP_URL;
const UserProfile = () => {
    const cookies = new Cookies();
    const [userProfile, setUserProfile] = useState({
        name: '',
        email: '',
        phone: '',
        subscription: 0
    });
    const [driverList, setDriverList] = useState([]);

    const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
    const [selectedDriver, setSelectedDriver] = useState(null);

    const [isNewDriverModalVisible, setNewDriverModalVisible] = useState(false);
    const [newDriver, setNewDriver] = useState({
        name: '',
        ssn: '',
        cdlNumber: '',
        cdlState: '',
    });

    useEffect(() => {

        const token = cookies.get('token');
        const headers = {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
        };
        axios.get(`${url}/api/profile`, { headers })
            .then((response) => {

                const data = response.data.data[0];
                const driver = response.data.data[0].driver
                setUserProfile({
                    name: data.fname + ' ' + data.lname,
                    email: data.email,
                    phone: data.phone,
                    subscription: data.subscription
                });
                // console.log(response.data)
                setDriverList(driver);
                // console.log(`driver : ${JSON.stringify(driver)}`)
            })
            .catch((error) => {
                console.error('Error fetching user profile:', error);
            });
    }, []);

    const handleDelete = (id) => {
        // Implement delete logic here
        const updatedDriverList = driverList.filter(driver => driver._id !== id);
        const token = cookies.get('token');
        const headers = {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
        };
        axios.post('http://localhost:8000/api/profile', updatedDriverList, { headers })
            .then((response) => {

                const data = response.data
                // setDriverList(driver);
                // console.log(`driver : ${JSON.stringify(driver)}`)
            })
            .catch((error) => {
                console.error('Error fetching user profile:', error);
            });
        setDriverList(updatedDriverList);
    };

    const handleUpdate = (driver) => {
        // Set the selected driver and open the update modal
        setSelectedDriver(driver);
        setUpdateModalVisible(true);
    };

    const handleAddNewDriver = () => {
        setNewDriverModalVisible(true);
    };

    const handleSaveUpdate = () => {
        // Implement save update logic here
        const updatedDriverList = driverList.map(driver =>
            driver._id === selectedDriver._id ? { ...driver, ...selectedDriver } : driver
        );
        const token = cookies.get('token');
        const headers = {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
        };
        axios.post('http://localhost:8000/api/profile', updatedDriverList, { headers })
            .then((response) => {

                const data = response.data
                // setDriverList(driver);
                // console.log(`driver : ${JSON.stringify(driver)}`)
            })
            .catch((error) => {
                console.error('Error fetching user profile:', error);
            });
        setDriverList(updatedDriverList);
        setUpdateModalVisible(false);
    };

    const handleSaveNewDriver = () => {
        // Implement save new driver logic here
        const newDriverList = [...driverList, newDriver];
        const token = cookies.get('token');
        const headers = {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
        };
        axios.post('http://localhost:8000/api/profile', newDriverList, { headers })
            .then((response) => {

                const data = response.data
                setDriverList(data.updatedDriver);
                // setDriverList(driver);
                // console.log(`driver : ${JSON.stringify(driver)}`)
            })
            .catch((error) => {
                console.error('Error fetching user profile:', error);
            });

        setNewDriverModalVisible(false);
    };


    const handleModalClose = () => {
        setUpdateModalVisible(false);
        setNewDriverModalVisible(false);
    };

    return (
        <>
            <Newheader />

            <div className="container mt-5">
                <div className="bg-light p-4 rounded shadow">
                    <h2 className="text-center mb-4">User Profile</h2>
                    <div className="mb-4">
                        <p><strong>Name:</strong> {userProfile.name}</p>
                        <p><strong>Email:</strong> {userProfile.email}</p>
                        <p><strong>Phone:</strong> {userProfile.phone}</p>

                        {userProfile.subscription == 1 ? (
                            <p><strong>Subscription : </strong>Silver</p>
                        ) : userProfile.subscription == 2 ? (
                            <p><strong>Subscription : </strong> Gold</p>
                        ) : (
                            <p><strong>Subscription : </strong> none</p>
                        )}
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-center mb-4">Driver List</h2>
                    <div className="row">
                        {driverList.map((driver) => (
                            <div key={driver._id} className="col-md-4 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">{driver.name}</h5>
                                        <p className="card-text"><strong>SSN:</strong> {driver.ssn}</p>
                                        <p className="card-text"><strong>DL Number:</strong> {driver.cdlNumber}</p>
                                        <p className="card-text"><strong>CDL State:</strong> {driver.cdlState}</p>

                                        {/* Both buttons on the same line */}
                                        <div className="d-flex justify-content-between mt-3 mb-2">
                                            <button type="button" className="btn btn-success" onClick={() => handleUpdate(driver)}>
                                                Update
                                            </button>
                                            <button type="button" className="btn btn-danger" onClick={() => handleDelete(driver._id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Add New Driver Button */}
                <div className="text-center mt-3">
                    <button type="button" className="btn btn-primary" onClick={handleAddNewDriver}>
                        Add New Driver
                    </button>
                </div>

                {/* Update Modal */}
                {isUpdateModalVisible && selectedDriver && (
                    <>
                        <div className="overlay"></div>
                        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Update Driver</h5>
                                        <button type="button" className="close" onClick={handleModalClose} aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="name">Name:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    value={selectedDriver.name}
                                                    onChange={(e) => setSelectedDriver({ ...selectedDriver, name: e.target.value })}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="ssn">SSN:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="ssn"
                                                    value={selectedDriver.ssn}
                                                    onChange={(e) => setSelectedDriver({ ...selectedDriver, ssn: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="dlNumber">DL Number:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cdlNumber"
                                                    value={selectedDriver.cdlNumber}
                                                    onChange={(e) => setSelectedDriver({ ...selectedDriver, cdlNumber: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="cdlState">CDL State:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cdlState"
                                                    value={selectedDriver.cdlState}
                                                    onChange={(e) => setSelectedDriver({ ...selectedDriver, cdlState: e.target.value })}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" onClick={handleSaveUpdate}>
                                            Save
                                        </button>
                                        <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* New Driver Modal */}
                {isNewDriverModalVisible && (
                    <>
                        <div className="overlay"></div>
                        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add New Driver</h5>
                                        <button type="button" className="close" onClick={handleModalClose} aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="newName">Name:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="newName"
                                                    value={newDriver.name}
                                                    onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="newSSN">SSN:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="newSSN"
                                                    value={newDriver.ssn}
                                                    onChange={(e) => setNewDriver({ ...newDriver, ssn: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="newDLNumber">DL Number:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="newDLNumber"
                                                    value={newDriver.cdlNumber}
                                                    onChange={(e) => setNewDriver({ ...newDriver, cdlNumber: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="newCDLState">CDL State:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="newCDLState"
                                                    value={newDriver.cdlState}
                                                    onChange={(e) => setNewDriver({ ...newDriver, cdlState: e.target.value })}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" onClick={handleSaveNewDriver}>
                                            Save
                                        </button>
                                        <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default UserProfile;
