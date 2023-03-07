import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AutoMobileForm from './automobileForm';
import AutomobileList from './automobileList';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="automobiles">
            <Route path= "" element={<AutomobileList automobiles={props.automobiles}/>}/>
            <Route path= "new" element={<AutoMobileForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
