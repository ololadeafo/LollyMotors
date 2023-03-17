import { useState, useEffect } from "react";

function AppointmentForm() {
  const [technicians, setTechnicians] = useState([]);
  const [formData, setFormData] = useState({
    vin: '',
    customer_name: '',
    date: '',
    time: '',
    technician: '',
    reason: '',
  })
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);

  let alertClasses = "alert alert-success d-none mb-3";
  let alertContainerClasses = "d-none";


  const fetchData = async () => {
    const url = "http://localhost:8080/api/technicians";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const appointmentsUrl = "http://localhost:8080/api/appointments/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(appointmentsUrl, fetchConfig);
    if (response.ok) {
      setFormData({
        vin: '',
        customer_name: '',
        date: '',
        time: '',
        technician: '',
        reason: '',
      });
      setSuccessfulSubmit(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  if (successfulSubmit) {
    alertClasses = "alert alert-success mb-3 padding: 5px;";
    alertContainerClasses = "";
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Schedule a service appointment</h1>
          <form onSubmit={handleSubmit} id="create-appointment-form">
            <div className="form-floating mb-3">
              <input value={formData.vin} onChange={handleChange} placeholder="vin" required type="vin" name="vin" id="vin" className="form-control" />
              <label htmlFor="vin">Vin</label>
            </div>
            <div className="form-floating mb-3">
              <input value={formData.customer_name} onChange={handleChange} placeholder="customer_name" required type="text" name="customer_name" id="customer_name" className="form-control" />
              <label htmlFor="customer_name">Customer Name</label>
            </div>
            <div className="form-floating mb-3">
              <input value={formData.date} onChange={handleChange} placeholder="date" type="date" name="date" id="date" className="form-control" />
              <label htmlFor="appointment">Date</label>
            </div>
            <div className="form-floating mb-3">
              <input value={formData.time} onChange={handleChange} placeholder="time" type="time" name="time" id="time" className="form-control" />
              <label htmlFor="appointment">Time</label>
            </div>
            <div className="form-floating mb-3">
              <input value={formData.reason} onChange={handleChange} placeholder="reason" required type="text" name="reason" id="reason" className="form-control" />
              <label htmlFor="reason">Reason</label>
            </div>
            <div className="mb-3">
              <select value={formData.technician} onChange={handleChange} required name="technician" id="technician" className="form-select">
                <option value="">Select a technician</option>
                {technicians.map(technician => {
                  return (
                    <option key={technician.employee_number} value={technician.employee_number}>
                      {technician.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
          <div className={alertContainerClasses}>
            <div className={alertClasses} id='success-message'>Appointment created successfully</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
