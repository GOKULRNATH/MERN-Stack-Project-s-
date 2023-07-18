import React from 'react'
import { Link } from 'react-router-dom'

function CustNav() {
  return (
    <div>
        <div class="container-fluid position-relative p-0" style={{backgroundColor:'gray'}}>
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" class="navbar-brand p-0">
                <h1 class="text-primary m-0"><i class="fa fa-map-marker-alt me-3"></i>Tourist Guide</h1>
                {/* <img src alt="Logo"/> */}
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <Link to="/CustHome" class="nav-item nav-link ">Home</Link>
                    <Link to="/ViewRest" class="nav-item nav-link ">Restaurant</Link>
                    <Link to="/ViewHotel" class="nav-item nav-link ">Hotel</Link>
                    <Link to="/ViewPackage" class="nav-item nav-link ">Packages</Link>
                    {/* <Link to="/About" class="nav-item nav-link">About</Link> */}
                    {/* <Link to="/Register" class="nav-item nav-link">Register</Link> */}
                    {/* <a href="package.html" class="nav-item nav-link">Packages</a> */}
                    <div class="nav-item dropdown">
                        <Link to='/CustViewProf' class="nav-item nav-link ">Customer Profile</Link>
                       
                    </div>
                    {/* <a href="contact.html" class="nav-item nav-link">Contact</a> */}
                </div>
               
                
                
            </div>
        </nav>

      
    </div>
    </div>
  )
}

export default CustNav