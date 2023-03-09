import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import VehicleForm from './VehicleForm';
import VehicleList from './VehicleList';
import AutoMobileForm from './automobileForm';
import AutomobileList from './automobileList';
import SalesPersonForm from './salespersonForm';
import CustomerForm from './customerForm';
import SaleRecordForm from './salerecordForm';
import SaleRecordList from './salerecordList';
import SalesPersonHistory from './salespersonHistory';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={<ManufacturerList />} />
            <Route path="create/" element={<ManufacturerForm />} />
          </Route>
          <Route path="vehicles">
            <Route index element={<VehicleList />} />
            <Route path="create" element={<VehicleForm />} />
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
