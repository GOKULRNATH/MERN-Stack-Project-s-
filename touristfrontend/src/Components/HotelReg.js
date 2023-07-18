import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import { Link, Navigate, useNavigate } from "react-router-dom";
import gif1 from "../img/hotelss.gif"

function HotelReg() {
  const [register, setRegister] = useState({
    hotelName: "",
    contact: "",
    email: "",
    password: "",
    city: "",
    country: "",
    pincode: "",
    regNo: "",
  });
  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };
  useEffect(() => {
    console.log(register);
  });
  const navigate = useNavigate();
  const submitt = (b) => {
    alert("submitted");
    b.preventDefault();
    console.log(register);
    axiosInstance
      .post("/registerHotel", register)
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("Register Sucessfully");
          navigate("/HotelLogin");
        } else {
          alert("Register Failed");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <body id="signup">
        <main class="container1">
          <div class="back"></div>
          <div class="" style={{margin:'10px'}}>
           
            <div class="" >
              <img
                
                height={390}
                src={gif1}
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

            {/* <span class="copyright">Photo by
        <a href="https://unsplash.com/@filipz" target="_blank" title="Photographer">Filip Zrnzević</a>
        on
        <a href="https://unsplash.com/photos/QsWG0kjPQRY" target="_blank" title="Background Photo">Unsplash</a></span> */}
          </div>
          <div class="formWrapper">
            <div class="form">
              <h2>Hotel member Register card</h2>
              <form onSubmit={submitt}>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="hotelName"
                    required
                    value={register.hotelName}
                    onChange={changehandleSubmit}
                  />
                  <label>Hotel Name</label>
                </div>
                <div class="inputWrapper">
                  <input
                    type="email"
                    name="email"
                    value={register.email}
                    onChange={changehandleSubmit}
                    required
                  />
                  <label>Email</label>
                </div>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="city"
                    value={register.city}
                    onChange={changehandleSubmit}
                    required
                  />
                  <label>City</label>
                </div>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="country"
                    value={register.country}
                    onChange={changehandleSubmit}
                    required
                  />
                  <label>Country</label>
                </div>
                <div class="inputWrapper">
                  <input
                    type="number"
                    name="contact"
                    value={register.contact}
                    onChange={changehandleSubmit}
                    required
                  />
                  <label>Phone Number</label>
                </div>

                <div class="inputWrapper">
                  <input
                    type="number"
                    name="regNo"
                    value={register.regNo}
                    onChange={changehandleSubmit}
                    required
                  />
                  <label>Reg NO</label>
                </div>

                <div class="inputWrapper">
                  <input
                    type="number"
                    name="pincode"
                    value={register.pincode}
                    onChange={changehandleSubmit}
                    required
                  />
                  <label>Pincode</label>
                </div>
                <div class="inputWrapper">
                  <input
                    type="password"
                    name="password"
                    value={register.password}
                    onChange={changehandleSubmit}
                    required
                  />
                  <label for="password">Password</label>
                </div>
                {/* <div class="inputWrapper">
            <input type="password" name="c_password"  value={register.cpassword}
                  onChange={changehandleSubmit} required />
            <label for="c_password">Confirm Password</label>
          </div> */}
                <input
                  type="submit"
                  name="register"
                  id="register"
                  value="REGISTER"
                />
              </form>

              <span id="login1" style={{ color: "black" }}>
                Already a member?{" "}
                <Link
                  to="/Login"
                  title="Login"
                  style={{ color: "darkblue", fontSize: "2rem" }}
                >
                  Log in!
                </Link>
              </span>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}

export default HotelReg;
