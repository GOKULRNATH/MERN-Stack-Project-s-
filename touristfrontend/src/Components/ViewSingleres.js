import React, { useEffect, useState } from 'react'
import axiosInstance from './BaseUrl';
import CustNav from '../CustProf/CustNav';
import { Link, useParams } from 'react-router-dom';

function ViewSinglerest() {
    const {id}=useParams()
    const[restfd,setrestfd]=useState([])
    useEffect(()=>{
        axiosInstance
        .post(`/viewFoodByRest/${id}`)
        .then((res) => {
          console.log(res, "view Rest food");
          if (res.data.data != undefined) {
            setrestfd(res.data.data);
          } else {
            setrestfd([]);
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
                        {restfd.length ? (
                          restfd.map((a) => {
                            return (
                              <div className="col" style={{margin:"10px 0px"}}>
                                   
                                <div class="card" style={{ width: '18rem' ,backgroundColor:"white",boxShadow: '1px 2px 2px 2px grey' }}>
                                <img
                        src={`http://localhost:4004/${a.image.originalname}`}
                        class="card-img-top"
                        alt={a.image.filename}
                        height="240px"
                      /> 
                                  <div class="card-body">
                                    <h4 class="card-title" style={{color:'Green'}}>Food Name: {a.foodname}</h4>
                                    <h3 class="card-text">
                                    Price: ₹{a.price}
                                    </h3>
                                    <p class="card-text">
                                    Type: {a.type}
                                    </p>
                                    <p class="card-text">
                                    Food Category: {a.vegornon}
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

export default ViewSinglerest