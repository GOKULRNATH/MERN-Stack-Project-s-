import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "./BaseUrl";
import CustNav from "../CustProf/CustNav";

function AddBooking() {
  const { id } = useParams();

  const [register, setRegister] = useState({
    pid: JSON.parse(id).pid,
    custId: localStorage.getItem("custlogid"),
    aid: JSON.parse(id).aid,
    comments: "",
    doj: "",
  });

  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };

  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    console.log(register);
    axiosInstance
      .post(`/addBooking`, register)
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("Book Successfully...");
        } else {
          alert("Failed to Book");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  console.log(register);

  return (
    <div>
      <CustNav />
      <div>
        <body id="signup">
          <main class="container1">
            <div class="back"></div>
            <div
              class="brand"
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                backgroundSize: "cover",
              }}
            >
              <div class="logo">
                <img
                  height="64"
                  src="https://i.imgur.com/E3uTxXY.png"
                  alt="Panda Logo"
                />
                <h1>
                  <span class="name">
                    <span>ADVENTURE</span>
                    <span> </span>
                  </span>
                  IS OUT THERE
                </h1>
              </div>
            </div>
            <div class="formWrapper">
              <div class="form">
                <h2>Booking</h2>
                <form onSubmit={submitt}>
                  
                <label for="exampleFormControlInput1" class="form-label">
                      Anything to share with us?
                    </label>
                    <input
                      type="text"
                      name="comments"
                     
                      onChange={changehandleSubmit}
                      required
                      class="form-control"
                      id="exampleFormControlInput1"
                    />
                
                <label for="exampleFormControlInput1" class="form-label">
                      Date of Journey  
                    </label>
                  <input
                    type="date"
                    name="doj"
                    style={{width:"100%"}}
                    //   value={register.doj}
                    onChange={changehandleSubmit}
                    required
                  />

                  <button type="submit" class="btn btn-danger">
                    Booking
                  </button>
                </form>
              </div>
            </div>
          </main>
        </body>
      </div>
    </div>
  );
}
export default AddBooking;
