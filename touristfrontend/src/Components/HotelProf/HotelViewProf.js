import React, { useEffect, useState } from 'react'


import { Link } from 'react-router-dom';
import img1 from '../../img/user-verification-symbol-for-interface.png'

import axiosInstance from '../BaseUrl';
import HotelNav from './HotelNav';

function HotelViewProf() {
    const [rset, setrset] = useState({});
    useEffect(()=>{
      // const storedUser = localStorage.getItem("users");
      const id=localStorage.getItem("hotellogid")
      console.log(id)
  ;
  
  
  
    axiosInstance.post(`/viewHotelById/${id}`)
    .then((res)=>{
      setrset(res.data.data)
      
    })
  
    },[])
  return (
    <div>
         <HotelNav/> 
     <section class="vh-100" style={{backgroundColor:"#f4f5f7;"}}>
        <div class="container3 py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-6 mb-4 mb-lg-0">
              <div class="card mb-3" style={{borderRadius: ".5rem;"}}>
                <div class="row g-0">
                  <div
                    class="col-md-4 gradient-custom text-center text-white"
                    style={{borderTopLeftRadius:" .5rem;", borderBottomLeftRadius: ".5rem;"}}
                  >
                    <img
                      src={img1}
                      alt="Avatar"
                      class="img-fluid my-5"
                      style={{width: "80px;"}}
                    />
                    <h5 style={{color:'Red'}}>{rset.hotelName}</h5>
                    {/* <p>Web Designer</p> */}
                    <i class="far fa-edit mb-5"></i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body p-4">
                      <h6>Restaurant Profile</h6>
                      
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Email:</h6>
                          <p class="text-muted">{rset.email}</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Contact:</h6>
                          <p class="text-muted">{rset.contact}</p>
                        </div>
                      </div>
                      {/* <h6>Projects</h6> */}
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                       
                        <div class="col-6 mb-3">
                          <h6>Password:</h6>
                          <p class="text-muted">{rset.password}</p>
                        </div>
                        <hr class="mt-0 mb-4" />
                       
                        <div class="col-6 mb-3">
                          <h6>City:</h6>
                          <p class="text-muted">{rset.city}</p>
                        </div>
                        <hr class="mt-0 mb-4" />
                        <div class="col-6 mb-3">
                          <h6>Country:</h6>
                          <p class="text-muted">{rset.country}</p>
                        </div><div class="col-6 mb-3">
                        
                        
                        </div>
                        <hr class="mt-0 mb-4" />

                      </div>
                      {/* <div class="d-flex justify-content-start">
                        <a href="#!">
                          <i class="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i class="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i class="fab fa-instagram fa-lg"></i>
                        </a>
                      </div> */}
                    <Link to="/HotelEditProf"><button type='submit' class='btn btn-danger h-23 w-100 py-2'>Edit</button></Link>
                
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HotelViewProf