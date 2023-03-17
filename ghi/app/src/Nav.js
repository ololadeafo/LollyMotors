import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">LM</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Inventory</a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/manufacturers/new/" role="button">Add a Manufacturer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/manufacturers" role="button">Manufacturer List</NavLink></li>
                <li><NavLink className="dropdown-item" to="/vehiclemodels/new" role="button">Add a Vehicle Model</NavLink></li>
                <li><NavLink className="dropdown-item" to="/vehiclemodels" role="button">View Vehicle Models</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles/new" role="button">Add Automobile</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles" role="button">View Automobiles</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Services</a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/appointments" role="button">Appointment List</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointments/new" role="button">Add Appointment</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointments/history" role="button">Search Appointments</NavLink></li>
                <li><NavLink className="dropdown-item" to="/technicians/new" role="button">Add Technician</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Sales</a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/salesperson/new" role="button">Add Salesperson</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salesperson/history" role="button">Sales Person History</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salerecord/new" role="button">Add Sale Record</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salerecord/" role="button">View Sale Records</NavLink></li>
                <li><NavLink className="dropdown-item" to="/customer/new" role="button">Add Customer</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
