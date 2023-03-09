import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import VehicleModelForm from './VehicleModelForm';
import VehicleModelList from './VehicleModelList';
import AutoMobileForm from './automobileForm';
import AutomobileList from './automobileList';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import AppointmentHistory from './AppointmentHistory';
import TechnicianForm from './TechnicianForm';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route path= "" element={<ManufacturerList manufacturers={props.manufacturers} />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="vehiclemodels">
            <Route path= "" element={<VehicleModelList vehicles={props.vehicles} />} />
            <Route path="new" element={<VehicleModelForm />} />
            </Route>
          <Route path="automobiles">
            <Route path= "" element={<AutomobileList automobiles={props.automobiles}/>}/>
            <Route path= "new" element={<AutoMobileForm />} />
          </Route>
          <Route path="appointments">
            <Route path= "" element={<AppointmentList appointments={props.appointments} />} />
            <Route path= "new" element={<AppointmentForm />} />
            <Route path= "history" element={<AppointmentHistory />} />
          </Route>
          <Route path="technicians">
            <Route path="new" element={<TechnicianForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
