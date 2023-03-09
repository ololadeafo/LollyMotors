import { useState, useEffect } from 'react';

function SaleRecordForm() {
    const [customer, setCustomer] = useState([])
    const [autos, setAutomobile] = useState([])
    const [salesperson, setSalesperson] = useState([])
    const [formData, setFormData] = useState({
        customer: '',
        automobile: '',
        salesperson: '',
        price: '',
    })

    const getcustomerData = async() => {
        const url = 'http://localhost:8090/sales/customer/'
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
            setCustomer(data.customer)
        }
    }

    const getautomobileData = async() => {
        const url = 'http://localhost:8100/api/automobiles/'
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
            setAutomobile(data.autos)
        }
    }

    const getsalespersonData = async() => {
        const url = 'http://localhost:8090/sales/salesperson/'
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
            setSalesperson(data.salesperson)
        }
    }

    useEffect(()=>{
        getautomobileData();
        getcustomerData();
        getsalespersonData();
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        const salerecordUrl = 'http://localhost:8090/sales/salerecord/'

        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type' : 'application/json',
            },
        };

        const response = await fetch(salerecordUrl, fetchConfig);
        if (response.ok) {
            setFormData({
                customer: '',
                automobile: '',
                salesperson: '',
                price: '',
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
                    <h1>Add a new Sale Record</h1>
                    <form onSubmit={handleSubmit} id="create-salerecord-form">
                        <div className="mb-3">
                            <select onChange={handleFormChange} value={formData.customer} required name="customer" id="customer" className="form-select">
                                <option value="">Choose a customer</option>
                                {customer.map(customers => {
                                    return (
                                        <option key={customers.name} value={customers.name}>{customers.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleFormChange} value={formData.autos} required name="automobile" id="automobile" className="form-select">
                                <option value="">Choose an automobile</option>
                                {autos.map(automobile => {
                                    return(
                                        <option key={automobile.vin} value={automobile.vin}>{automobile.model.name} {automobile.vin}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleFormChange} value={formData.salesperson} required name="salesperson" id="salesperson" className="form-select">
                                <option value="">Choose a salesperson</option>
                                {salesperson.map(salespersons =>{
                                    return(
                                        <option key={salespersons.name} value={salespersons.name}>{salespersons.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.price} placeholder="Price" required type="text" name="price" className="form-control" />
                            <label htmlFor="price">Price</label>
                        </div>
                        <button className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}



export default SaleRecordForm
