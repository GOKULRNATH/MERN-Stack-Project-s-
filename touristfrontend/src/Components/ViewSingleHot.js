import React, { useEffect, useState } from 'react'
import axiosInstance from './BaseUrl';
import CustNav from '../CustProf/CustNav';
import { Link, useParams } from 'react-router-dom';

function ViewSinglerest() {
    const {id}=useParams()
    const[hotl,sethotl]=useState([])
    useEffect(()=>{
        axiosInstance
        .post(`/viewRoomsByHotelId/${id}`)
        .then((res) => {
          console.log(res, "view hotl ");
          if (res.data.data != undefined) {
            sethotl(res.data.data);
          } else {
            sethotl([]);
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
                        {hotl.length ? (
                          hotl.map((a) => {
                            return (
                              <div className="col" style={{margin:"10px 0px"}}>
                                <div class="card" style={{ width: '18rem' ,backgroundColor:"white",boxShadow: '1px 2px 2px 2px grey' }}>
                                  <div class="card-body">
                                    <h4 class="card-title" style={{color:'Green'}}>Room Number: {a.roomNo}</h4>
                                    <h3 class="card-text">
                                    Price: ₹{a.price}
                                    </h3>
                                    <p class="card-text">
                                    Type: {a.type}
                                    </p>
                                    
                                    
                                  
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <div className="col">
                            <div class="card" style={{ width: "18rem;" }}>
                              <div class="card-body">
                                <h5 class="card-title">No Rooms Available</h5>
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

export default ViewSinglerest 