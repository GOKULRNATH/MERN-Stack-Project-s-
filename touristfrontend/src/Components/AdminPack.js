import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axiosInstance from "./BaseUrl";
import AdminNav from "./AdminNav";

function Adminpack() {
  const [appagdata, setappagdata] = useState([]);
  const [dltag, setdltag] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewAgencyRequests`)
      .then((res) => {
        console.log(res, "viewAgencyReq");
        if (res.data.data != undefined) {
          setappagdata(res.data.data);
        } else {
          setappagdata([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleApprovAgency = (id) => {
    axiosInstance
      .post(`/ApproveAgency/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleRemoveAgency = (id) => {
    axiosInstance
      .post(`/deleteAgencyById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("removed");

          setdltag(res.data.data);
        } else {
          setdltag([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (localStorage.getItem("adminlog") == 1) {
    return (
      <div className="productdiv1" style={{ minHeight: "400px" }}>
        <AdminNav />
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

        <div style={{ marginTop: "20px" }}>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  style={{ backgroundColor: "wheat" }}
                >
                  <h3 style={{ colorAdjust: "inherit" }}>All Agency Request</h3>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {/* customer map start*/}
                  <div class="container text-center">
                    <div class="row">
                      {appagdata.length ? (
                        appagdata.map((a) => {
                          return (
                            <div className="col" style={{ margin: "10px 0px" }}>
                              <div
                                class="card"
                                style={{
                                  width: "18rem",
                                  backgroundColor: "white",
                                  boxShadow: "1px 2px 2px 2px grey",
                                }}
                              >
                                <div class="card-body">
                                  <h4
                                    class="card-title"
                                    style={{ color: "Green" }}
                                  >
                                    {a.Name}
                                  </h4>
                                  <h3 class="card-text">{a.email}</h3>

                                  <h3 class="card-text">City:{a.city}</h3>

                                  <p class="card-text">
                                    Contact: {a.contact} and Reg No:{a.regNo}
                                  </p>
                                  <a
                                      type="button"
                                      class="btn btn-danger"
                                      onClick={() => handleApprovAgency(a._id)}
                                      href=""
                                        style={{marginRight:"0px 20px"}}
                                    >
                                      Approve
                                    </a>
                                    <a
                                      type="button"
                                      class="btn btn-danger"
                                      onClick={() => handleRemoveAgency(a._id)}
                                      href=""
                                      
                                    >
                                      Remove
                                    </a>
                                </div>
                               
                                {/* <div class="col-sm-4 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                  <div class="d-flex mb-3">
                                  
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="col">
                          <div class="card" style={{ width: "18rem;" }}>
                            <div class="card-body">
                              <h5 class="card-title">
                                No Agency Request Available
                              </h5>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* customer map end*/}
                </div>
              </div>
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

export default Adminpack;
