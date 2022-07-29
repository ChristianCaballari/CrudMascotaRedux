// imr
import React from "react";
import { Link } from "react-router-dom";
// sfc
const Header = () => {
  return (
    <div className="bg">
      <div className="container">
        <nav className="contenedor-flex">
          <h1>
            <Link to={"/"} className="bgH">
              Crud Redux
            </Link>
          </h1>
          <Link to={"/mascota/nuevo"} className="btn btn-primary text-uppercase font-weight-bol">
            Agregar &#43;
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
