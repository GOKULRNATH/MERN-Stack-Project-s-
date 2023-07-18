import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import CustNav from "../CustProf/CustNav";
import { Link, useParams } from "react-router-dom";

function ViewSinglePack() {
  const { id } = useParams();
  const [packid, setpackid] = useState({});
  useEffect(() => {
    axiosInstance
      .post(`/viewpackegesById/${id}`)
      .then((res) => {
        console.log(res, "view packs single");
        if (res.data.data != undefined) {
          setpackid(res.data.data);
        } else {
          setpackid([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <CustNav />

      <div style={{ marginTop: "20px" }}>
      <div class="container text-center">
                  <div class="row">
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
                                  {packid.title}
                                </h4>

                                <h3 class="card-text">
                                  Price:₹ {packid.cost}Air Fare +Visa Extra
                                </h3>

                                <p class="card-text">
                                  {packid.days}days and {packid.nights}nights Tour
                                </p>
                                <p class="card-text">
                                  Travel Mode:{packid.travelmode}
                                </p>
                                <p class="card-text">
                                  Accomodation:{packid.accomodation}
                                </p>
                                <Link to={`/AddBooking/${JSON.stringify({aid:id, pid:packid._id})}`}
                               
                                  class="btn btn-danger"
                                >
                                  Book
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
            </div>
          </div>
       
  );
}

export default ViewSinglePack;
