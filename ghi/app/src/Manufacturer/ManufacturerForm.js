import React, { useState } from "react";

function ManufacturerForm () {
    const [formData, setFormData] = useState({
      name: '',
    })
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
  
      const fetchConfig = {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const response = await fetch(manufacturerUrl, fetchConfig);
      
      if (response.ok) {
        setFormData({
          name: '',
        });
      }
    }
  
    const handleFormChange = (e) => {
      const inputName = e.target.name;
      const value = e.target.value;
  
      setFormData({
        ...formData,
        [inputName]: value 
      });
    }
    
  

  return (
    <div className='row'>
      <div className='offset-3 col-6'>
        <div className='shadow p-4 mt-4'>
          <h1>Create a Manufacturer</h1>
          <form onSubmit={handleSubmit}id='create-manufacturer-form'>
            <div className='form-floating mb-3'>
              <input value={formData.name} onChange={handleFormChange} placeholder='Manufacturer Name' required name='name' id='name' className='form-control'/>
              <label htmlFor='name'>Name</label>
            </div>
            <button className='btn btn-primary'>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ManufacturerForm;
