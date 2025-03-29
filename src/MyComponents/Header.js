import protoType from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  // const location = useLocation(); 
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Todos List */}
        <Link className="navbar-brand" href="#">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
          </ul>

        </div>
        {/* {location.pathname === "/" && props.searchBar ? (
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search Todos" aria-label="Search" onChange={(e) => props.setSearchQuery(e.target.value)}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        ) : null} */}
      </div>
    </nav>
  )
}

Header.defaultProps = {
  title: "My Todos List",
  // searchBar: false
}

Header.protoTypes = {
  title: protoType.string,
  // searchBar: protoType.bool.isRequired
}
