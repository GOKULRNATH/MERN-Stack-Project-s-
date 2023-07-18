import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "./BaseUrl";
import gif from "../img/customer.gif"

function Register() {
  const [register, setRegister] = useState({
    name: "",
    contact: "",
    email: "",
    idtype: "",
    idnumb: "",
    password: "",
    city: "",
    country: "",
    gender: ""
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
      .post("/registerUser", register)
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("Register Sucessfully");
          navigate("/Login");
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
          <div class="brand" >
          
              <h1>
                <span class="name">
                  <span>ADVENTURE</span>
                  <span> </span>
                </span>
                IS OUT THERE
              </h1>
            <div class="">
             
               <img
                
                src={gif}
                alt="Panda Logo"
              />
              
            </div>
            {/* <span class="copyright">Photo by
        <a href="https://unsplash.com/@filipz" target="_blank" title="Photographer">Filip Zrnzević</a>
        on
        <a href="https://unsplash.com/photos/QsWG0kjPQRY" target="_blank" title="Background Photo">Unsplash</a></span> */}
          </div>
          <div class="formWrapper" style={{backgroundColor:'white'}}>
            <div class="form">
              <h2>New member card</h2>
              <form onSubmit={submitt}>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="name"
                    required
                    value={register.name}
                    onChange={changehandleSubmit}
                  />
                  <label>Name</label>
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
                    type="tel"
                    name="contact"
                    value={register.contact}
                    onChange={changehandleSubmit}
                    required
                  />
                  <label>Phone Number</label>
                </div>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="idtype"            
                     value={register.idtype}
                    onChange={changehandleSubmit}
                    required
                  />
                  
                  <label>Identity Type</label>
                  </div>
                    <div class="inputWrapper">
                    <input
                    type="text"
                    name="gender"
                    value={register.gender}
                    onChange={changehandleSubmit}
                    required
                  />
                  <label>Gender</label>
           
                    </div>

               
              
                <div class="inputWrapper">
                  <input
                    type="number"
                    name="idnumb"
                    minLength= "0000000" 
                    maxLength="000000"              
                       value={register.idnumb}
                    onChange={changehandleSubmit}
                    required
                  />
                  <label for="">Identity Number</label>
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

export default Register;
