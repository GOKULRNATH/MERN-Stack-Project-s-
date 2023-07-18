import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../BaseUrl";
import GuideNav from "./GuideNav";



function AddPackage() {
    const id = localStorage.getItem("guidelogid");
  
  const [register, setRegister] = useState({
    title:'',
    destination:'',
    cost:'',
    days:'',
    nights:'',
    travelmode:'',
    accomodation:'',
    food:'',
    aid: id
  });
  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };
  useEffect(() => {
    console.log(register);
  });
  const navigate = useNavigate();
  const submitt = (b) => {
    console.log("submitted",register);
    b.preventDefault();
    axiosInstance
      .post("/addPackage", register)
      .then((result) => {
        console.log("data entered", result);
        if(result.status==200){
          alert("Add Package Successfully")
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
      <GuideNav/>
     
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
                <h2>Add Package</h2>
                <form onSubmit={submitt}>
                  <div class="inputWrapper" s>
                    <input
                      type="text"
                      name="title"
                      required
                      value={register.title}
                      onChange={changehandleSubmit}
                    />
                    <label>Title</label>
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="text"
                      name="destination"
                      value={register.destination}
                      onChange={changehandleSubmit}
                      required
                    />
                    <label>Destination</label>
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="number"
                      name="cost"
                      value={register.cost}
                      onChange={changehandleSubmit}
                      required
                    />
                    <label>Cost</label>
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="number"
                      name="days"
                      value={register.days}
                      onChange={changehandleSubmit}
                      required
                    />
                    <label>Days</label>
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="number"
                      name="nights"
                      value={register.nights}
                      onChange={changehandleSubmit}
                      required
                    />
                    <label>Nights</label>
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="text"
                      name="travelmode"
                      value={register.travelmode}
                      onChange={changehandleSubmit}
                      required
                    />
                    <label>Travel Mode</label>
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="text"
                      name="accomodation"
                      value={register.accomodation}
                      onChange={changehandleSubmit}
                      required
                    />
                    <label>Accomodation</label>
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="text"
                      name="food"
                      value={register.food}
                      onChange={changehandleSubmit}
                      required
                    />
                    <label>Food</label>
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

export default AddPackage;
