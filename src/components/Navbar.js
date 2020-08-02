import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <Link className="navbar-brand" to="/">Gerenciador</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Início</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/cadastro">Cadastre novo carro</Link>
            </li>
          </ul>

        </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;