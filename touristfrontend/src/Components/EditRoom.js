import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "./BaseUrl";
import HotelNav from "./HotelProf/HotelNav";

function EditFood() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [register, setRegister] = useState({
    roomNo: "",
    ac: "",
    type: "",
  });

  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };

  useEffect(() => {
    axiosInstance.post(`/viewRoomById/${id}`).then((res) => {
      console.log(res, "room detail");
      setRegister(res.data.data);
    });
  }, []);

  const submitt = (e) => {
    e.preventDefault();
    console.log(register);
    axiosInstance
      .post(`/editRoomsById/${id}`, register)
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          alert("Room Updated");
          navigate("/ViewRoom");
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
        <HotelNav />
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
                <h2>Add Hotel Rooms</h2>
                <form onSubmit={submitt}>
                  <div class="inputWrapper" >
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
                

                  <input
                    type="submit"
                    name="register"
                    id="register"
                    value="Edit"
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
