import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import HotelNav from "./HotelProf/HotelNav";
import axiosInstance from "./BaseUrl";

function AddRoom() {
  const id = localStorage.getItem("hotellogid");
  const [register, setRegister] = useState({
    roomNo: "",
    ac: "",
    type: "",
    price: "",
  });
  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };
  useEffect(() => {
    console.log(register);
  });
  const navigate = useNavigate();
  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    axiosInstance
      .post(`/registerRoom/${id}`, register)
      .then((result) => {
        console.log("data entered", result);
        if(result.status==200){
          alert("Add Rooms Successfully")
        }
        else{
          alert("Failed to Add")
        }
      })
      .catch((error) => {
        console.log("err", error);
      });
  };
  return (
    <div>
      <HotelNav />
      <div>
        <body id="signup">
          <main class="container1">
            <div class="back"></div>
            <div
              class="brand"
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                backgroundSize:"cover",
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
                <h2>Add Hotel Rooms</h2>
                <form onSubmit={submitt}>
                  <div class="inputWrapper" s>
                    <input
                      type="number"
                      name="roomNo"
                      required
                      value={register.roomNo}
                      onChange={changehandleSubmit}
                    />
                    <label>Hotel Room No</label>
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="number"
                      name="ac"
                      value={register.ac}
                      onChange={changehandleSubmit}
                      required
                    />
                    <label>Account Number</label>
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="text"
                      name="type"
                      value={register.type}
                      onChange={changehandleSubmit}
                      required
                    />
                    <label>Type</label>
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="number"
                      name="price"
                      value={register.price}
                      onChange={changehandleSubmit}
                      required
                    />
                    <label>Price</label>
                  </div>

                  <input
                    type="submit"
                    name="register"
                    id="register"
                    value="Add"
                    style={{ marginTop: "3rem" }}
                  />
                </form>
              </div>
            </div>
          </main>
        </body>
      </div>
    </div>
  );
}

export default AddRoom;
