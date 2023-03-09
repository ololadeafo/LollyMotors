import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerForm from './Manufacturer/ManufacturerForm';
import ManufacturerList from './Manufacturer/ManufacturerList';
import VehicleModelForm from './Vehicle/VehicleModelForm';
import VehicleModelList from './Vehicle/VehicleModelList';
import AppointmentList from './Appointment/AppointmentList';
import AppointmentForm from './Appointment/AppointmentForm';
import AppointmentHistory from './Appointment/AppointmentHistory';
import TechnicianForm from './Technician/TechnicianForm';
import AutoMobileForm from './automobile/automobileForm';
import AutomobileList from './automobile/automobileList';
import SalesPersonForm from './salesperson/salespersonForm';
import CustomerForm from './customer/customerForm';
import SaleRecordForm from './Sale Record/salerecordForm';
import SaleRecordList from './Sale Record/salerecordList';
import SalesPersonHistory from './salesperson/salespersonHistory';

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
            <Route path= "new/" element={<AutoMobileForm />} />
          </Route>
          <Route path="salesperson">
            <Route path= "new/" element={<SalesPersonForm />} />
            <Route path= "history/" element={<SalesPersonHistory />} />
          </Route>
          <Route path="customer">
            <Route path= "new/" element={<CustomerForm />} />
          </Route>
          <Route path="salerecord">
            <Route path="" element={<SaleRecordList />} />
            <Route path= "new/" element={<SaleRecordForm />} />
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
