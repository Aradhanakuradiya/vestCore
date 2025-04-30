import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFF"}}>
        <div class="container-fluid mx-4">
          <Link class="navbar-brand" to={"/"} style={{color:"red"}}>
           VestCore
          </Link>
         
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item ">
                <Link class="nav-link active" aria-current="page" to="/signup">
                 Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to={"/product"}>
                  Access
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to={"/pricing"}>
                  Commission Structue
                </Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
