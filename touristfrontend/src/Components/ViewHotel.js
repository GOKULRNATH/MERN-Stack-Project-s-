import React, { useEffect, useState } from 'react'
import axiosInstance from './BaseUrl';
import CustNav from '../CustProf/CustNav';
import { Link } from 'react-router-dom';

function ViewFoodCust() {
    const[custhotel,setcusthotel]=useState([])
    useEffect(()=>{
        axiosInstance
        .post(`/viewAprvdHotels`)
        .then((res) => {
          console.log(res, "view hotel");
          if (res.data.data != undefined) {
            setcusthotel(res.data.data);
          } else {
            setcusthotel([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },[])
  return (
    <div>
        <CustNav/>
          
          <div style={{marginTop:"20px"}}>
          <div class="container text-center">
                      <div class="row">
                        {custhotel.length ? (
                          custhotel.map((a) => {
                            return (
                              <div className="col" style={{margin:"10px 0px"}}>
                                <div class="card" style={{ width: '18rem' ,backgroundColor:"white",boxShadow: '1px 2px 2px 2px grey' }}>
                                  <div class="card-body">
                                    <h4 class="card-title" style={{color:'Green'}}>Hotel Name: {a.hotelName}</h4>
                                    <p class="card-text">
                                    Contact: {a.contact}
                                    </p>
                                    <p class="card-text">
                                    City: {a.city}
                                    </p>
                                   <Link to={`/ViewSingleHot/${a._id}`} class="btn btn-danger">
                                    choose
                                   </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <div className="col">
                            <div class="card" style={{ width: "18rem;" }}>
                              <div class="card-body">
                                <h5 class="card-title">No Restaurant Available</h5>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
          </div>
    </div>
  )
}

export default ViewFoodCust