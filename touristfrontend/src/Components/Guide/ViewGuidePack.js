import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axiosInstance from "../BaseUrl";
import GuideNav from "./GuideNav";

function ViewPackage() {
    const id=localStorage.getItem("guidelogid")
  const [pack, setpackage] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewAllPackagesByAgencyId/${id}`)
      .then((res) => {
        console.log(res, "view Package");
        if (res.data.data != undefined) {
          setpackage(res.data.data);
        } else {
          setpackage([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <GuideNav />

      <div class="accordion-body">
        {/* customer map start*/}
        <div class="container text-center">
          <div class="row">
            {pack.length ? (
              pack.map((a) => {
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
                        <h4 class="card-title" style={{ color: "Green" }}>
                          {a.title}
                        </h4>

                        <h3 class="card-text">
                          Price:₹ {a.cost}Air Fare +Visa Extra
                        </h3>

                        <p class="card-text">
                          {a.days}days and {a.nights}nights Tour
                        </p>
                        <p class="card-text">Travel Mode:{a.travelmode}</p>
                        <p class="card-text">Accomodation:{a.accomodation}</p>
                        <Link
                          to={`/EditPackage/${a._id}`}
                          class="btn btn-danger"
                        >
                          Edit
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
                    <h5 class="card-title">No Packages Available</h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* customer map end*/}
      </div>
    </div>
  );
}

export default ViewPackage;
