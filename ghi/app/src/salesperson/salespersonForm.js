import { useState } from 'react';

function SalesPersonForm() {
    const [formData, setFormData] = useState({
        name: '',
        employee_number: '',
    })

    const handleSubmit = async (event) => {
        event.preventDefault();

        const salespersonUrl= 'http://localhost:8090/sales/salesperson/';

        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type' : 'application/json',
            },
        };

        const response = await fetch(salespersonUrl, fetchConfig);

        if (response.ok){
            setFormData({
                name: '',
                employee_number: '',
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
                    <h1>Add a new Sales Person</h1>
                    <form onSubmit={handleSubmit} id="create-salesperson-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.name} placeholder="Name" required type="text" name="name" className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.employee_number} placeholder="Employee Number" required type="text" name="employee_number" className="form-control" />
                            <label htmlFor="employee number">Employee Number</label>
                        </div>
                        <button className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SalesPersonForm
