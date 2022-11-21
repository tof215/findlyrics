import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
const Navbar = () => {
  return (
    <MDBNavbar light bgColor="light" className="mb-4">
      <div className="container-fluid">
        <MDBNavbarBrand href="/">
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
            height="30"
            alt=""
            loading="lazy"
          />
        </MDBNavbarBrand>
      </div>
    </MDBNavbar>
  );
};

export default Navbar;
