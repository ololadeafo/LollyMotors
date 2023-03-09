import { useEffect, useState } from 'react';
function AppointmentHistory() {
    const [appointments, setAppointments] = useState([])
    const [search, setSearch] = useState("");
    const getData = async () => {
        const response = await fetch('http://localhost:8080/api/appointments/history/');
        if (response.ok) {
            const appointmentdata = await response.json();
            const appointment = appointmentdata.appointments.map((appointment) => {
                return {
                    vin: appointment.vin,
                    customer_name: appointment.customer_name,
                    vip: appointment.vip,
                    date: appointment.date,
                    time: appointment.time,
                    technician: appointment.technician.name,
                    reason: appointment.reason
                    };
                });
                setAppointments(appointment);
                }
            };
    useEffect(() => {
        getData()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const filtered = appointments.filter(
            appointment => appointment.vin === search
        );
        setAppointments(filtered);
    };

    return (
        <>
            <form className='form-inline'>
                <div className='input-group p-2'>
                    <input className='form-control mr-sm-2 pr-3' type='search' placeholder='Enter vin' value={search} onChange={event => setSearch(event.target.value)}/>
                    <div className='px-2'>
                        <button className='btn btn-outline-secondary my-1 my-lg-0' onClick={handleSubmit} type='submit'>Search VINs</button>
                    </div>
                </div>
            </form>
            <div>
                <h1>Service appointments</h1>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Vip</th>
                        <th>Vin</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        return (
                            <tr key={appointment.vin}>
                                <td>{appointment.customer_name}</td>
                                <td>{appointment.vip ? "True" : "False"}</td>
                                <td>{appointment.vin}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.technician}</td>
                                <td>{appointment.reason}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
export default AppointmentHistory;























