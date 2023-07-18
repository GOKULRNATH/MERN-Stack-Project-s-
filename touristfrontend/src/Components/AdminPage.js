import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axiosInstance from "./BaseUrl";
import AdminNav from "./AdminNav";


function Adminpage() {
  const [hoteldata, sethoteldata] = useState([]);
  const [apphoteldata, setapphoteldata] = useState([]);
 
 
  useEffect(() => {
    axiosInstance
      .post(`/viewHotelReqs`)
      .then((res) => {
        console.log(res);
      if(res.data.data!=undefined){
        sethoteldata(res.data.data);
      }
      else{
        setapphoteldata([])
      }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleHotelApp=(id)=>{
    axiosInstance.post(`/approveHotels/${id}`)
    .then((res)=>{
        console.log(res);
      
       
    })
    .catch((err)=>{
        console.log(err);
    })
  }
 
 
  

  if (localStorage.getItem("adminlog") == 1) {
    return (
      <div className="productdiv1" style={{ minHeight: "400px" }}>
        <AdminNav/>
        <button
          className="btn btn-dark"
          onClick={() => {
            localStorage.removeItem("adminlog");
            alert("Logged out");
            window.location.reload(false);
          }}
        >
          Logout
        </button>
      

<div class="container-xxl py-5">

            <div class="container">
                <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Welcome to Admin</h1>
                <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                       
                        <li class="nav-item">
                            <a class="d-flex align-items-center text-start mx-3 me-0 pb-3 joblistheading" data-bs-toggle="pill" href="#tab-3">
                                <h2 class="mt-n1 mb-0 " className='joblistheading'>Hotel</h2>
                            </a>
                        </li>
                    </ul>
                
                        {hoteldata.length?
                        hoteldata.map((a)=>{
                          return(
                             <div class="container">
                              <div class="row">
                                <hr/>
                                  <div class="col">
                                  <span class="text-truncate me-3" style={{fontSize:"1.3rem"}}><i class="fa fa-map-marker-alt text-primary me-2"></i>Hotel Name: {a.hotelName}</span>
                                     
                                  </div>
                                  <div class="col">
                                  <span class="text-truncate me-3"  style={{fontSize:"1.3rem"}}><i class="fa fa-map-marker-alt text-primary me-2"></i>Email: {a.email}</span>

                                  </div>
                                  <div class="col">
                                  <span class="text-truncate me-3" style={{fontSize:"1.3rem"}}><i class="far fa-clock text-primary me-2"></i>Contact: {a.contact}</span>
                                  </div>
                                  <div class="col">
                                    
                                  <span class="text-truncate me-0" style={{fontSize:"1.3rem"}}><i class="far fa-money-bill-alt text-primary me-2"></i>Reg No:{a.regNo}</span>
                                 
                                  </div>
                                 <div className="col">
                                 <a style={{position:"relative",bottom:"5px"}} type='button'class="btn btn-danger" onClick={()=>handleHotelApp(a._id)}>Approve</a>
                                 </div>
                              </div>
                          </div> 
                          )
                         }):
                         <div class="job-item p-4 mb-4">
                         <div class="row g-4">
                             <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                    <div class="text-start ps-4">
                                     <h5 class="mb-3"> No hotels to approve</h5>
                                    
                                 </div>
                             </div>
                             <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                
                                 {/* <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small> */}
                             </div>
                         </div>
                     </div> } 
                    </div>
                </div>
            </div>



      </div>
    );
  } else {
    return (
      <div style={{ minHeight: "400px" }}>
        <h1 style={{ textAlign: "center", position: "relative", top: "150px" }}>
          Please{" "}
          <Link style={{ fontSize: "50px" }} to="/Admin">
            log in{" "}
          </Link>
          to see admin panel{" "}
        </h1>
      </div>
    );
  }
}

export default Adminpage;
