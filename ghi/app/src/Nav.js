import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Manufacturer</a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="manufacturers" role="button">Manufacturer List</NavLink></li>
                <li><NavLink className="dropdown-item" to="manufacturers/create/" role="button">Add a Manufacturer</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Vehicle</a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="vehicles" role="button">Vehicle Models List</NavLink></li>
                <li><NavLink className="dropdown-item" to="vehicles/create" role="button">Add a Vehicle Model</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Automobile</a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/automobiles" role="button">Automobile List</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles/new" role="button">Add Automobile</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
