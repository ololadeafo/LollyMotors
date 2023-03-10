import React, { useEffect, useState } from "react";

function VehicleModelForm() {
  const [name, setName] = useState("");
  const [picture_url, setPicture] = useState("");
  const [manufacturer_id, setManufacturer] = useState("");


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePictureChange = (event) => {
    setPicture(event.target.value);
  };

  const handleManufacturerChange = (event) => {
    setManufacturer(event.target.value);
  };

  const [manufacturers, setManufacturers] = useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:8100/api/manufacturers/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers)
    }
  }

  useEffect(() =>{
    fetchData();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name,
      picture_url,
      manufacturer_id,
    };

    const automobileUrl = "http://localhost:8100/api/models/";

    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(automobileUrl, fetchConfig);

    if (response.ok) {
      setName("");
      setPicture("");
      setManufacturer("");
    }
  };


  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a Vehicle Model</h1>
          <form onSubmit={handleSubmit} id="create-automobile-form">
            <div className="form-floating mb-3">
              <input value={name} onChange={handleNameChange} placeholder="name" required name="name" id="name" className="form-control"/>
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input value={picture_url} onChange={handlePictureChange} placeholder="Picture" required name="picture_url" id="picture_url" className="form-control"/>
              <label htmlFor="vin">Picture URL</label>
            </div>
            <div className="mb-3">
              <select value={manufacturer_id} onChange={handleManufacturerChange} required name="manufacturer_id" id="manufacturer_id" className="form-select">
                <option value="">Choose a Manufacturer</option>
                {manufacturers.map((manufacturer) => {
                  return (
                    <option key={manufacturer.id} value={manufacturer.id}>
                      {manufacturer.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VehicleModelForm;

