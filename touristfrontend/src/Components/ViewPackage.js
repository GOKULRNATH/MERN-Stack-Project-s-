import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import CustNav from "../CustProf/CustNav";
import { Link } from "react-router-dom";

function ViewPackage() {
  const [pack, setpackage] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewAllPackages`)
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
      <CustNav />

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
                                <h4
                                  class="card-title"
                                  style={{ color: "Green" }}
                                >
                                  {a.title}
                                </h4>

                                <h3 class="card-text">
                                  Price:₹ {a.cost}Air Fare +Visa Extra
                                </h3>

                                <p class="card-text">
                                  {a.days}days and {a.nights}nights Tour
                                </p>
                                <Link
                                  to={`/ViewSinglePack/${a._id}`}
                                  class="btn btn-danger"
                                >
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
                            <h5 class="card-title">No Packages Available</h5>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
    </div>
  );
}

export default ViewPackage;
