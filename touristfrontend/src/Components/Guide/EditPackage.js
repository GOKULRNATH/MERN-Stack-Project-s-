import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../BaseUrl";
import GuideNav from "./GuideNav";
import GuideProfNav from "../GuideProf/GuideProfNav";

function EditFood() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [register, setRegister] = useState({});

  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };

  useEffect(() => {
    axiosInstance.post(`/viewpackegesById/${id}`).then((res) => {
      console.log(res, "View ");
      setRegister(res.data.data);
    });
  }, []);

  const submitt = (e) => {
    e.preventDefault();
    console.log(register);
    axiosInstance
      .post(`/editpackegesById/${id}`, register)
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          alert("Package Updated");
          navigate("/AddPackage");
        } else {
          alert("Updation Failed");
        }
      })
      .catch((err) => {
        console.log(err, " axios error");
      });
  };

  return (
    <div>
      <div>
        <GuideProfNav />
        {/* <main class="container1"> */}
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
              {/* <div class="logo">
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
              </div> */}
            </div>
            <div class="formWrapper">
              <div class="form">
                <h2>Edit Package Details</h2>
                <form onSubmit={submitt}>
                  <div class="inputWrapper" >
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
                    <label>days</label>
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
                    value="Update"
                    style={{ marginTop: "3rem" }}
                  />
                </form>
              </div>
            </div>
          </main>
        </body>
        {/* </main> */}
      </div>
    </div>
  );
}

export default EditFood;
