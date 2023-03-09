import { useState } from 'react';
function CustomerForm() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone_number: '',
    })

    const handleSubmit = async (event) => {
        event.preventDefault();

        const customerUrl = 'http://localhost:8090/sales/customer/';

        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type' : 'application/json',
            },
        };

        const response = await fetch(customerUrl, fetchConfig);

        if (response.ok){
            setFormData({
                name: '',
                address: '',
                phone_number: '',
            });
        }
    }

    const handleFormChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setFormData({
            ...formData,
            [inputName]: value,
        });
    }
    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a new customer</h1>
                    <form onSubmit={handleSubmit} id="create-customer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.name} placeholder="Name" required type="text" name="name" className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.address} placeholder="Address" required type="text" name="address" className="form-control" />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.phone_number} placeholder="Phone Number" required type="text" name="phone_number" className="form-control" />
                            <label htmlFor="phone_number">Phone Number</label>
                        </div>
                        <button className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CustomerForm
