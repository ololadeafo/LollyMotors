import React, { useState, useEffect } from "react";

function VehicleModelList() {
  const [vehiclemodels, setVehicleModels] = useState([]);

  useEffect(() => {
    const getVehicleModelData = async () => {
      const vehicleModelResponse = await fetch(
        "http://localhost:8100/api/models/"
      );
      const vehicleModelData = await vehicleModelResponse.json();
      setVehicleModels(vehicleModelData.models);
    };

    getVehicleModelData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Vehicle models</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {vehiclemodels.map((vehiclemodel) => {
                return (
                  <tr key={vehiclemodel.id}>
                    <td>{vehiclemodel.manufacturer.name}</td>
                    <td>{vehiclemodel.name}</td>
                    <td>
                      <img src={vehiclemodel.picture_url} alt="vehicle"/>
                    </td>
                  </tr>

                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VehicleModelList;




