import React, { useEffect, useState } from 'react'
import axiosInstance from './BaseUrl';
import HotelNav from './HotelProf/HotelNav';
import { Link } from 'react-router-dom';

function ViewRoom() {
    const [room, setroom] = useState([]);
    useEffect(() => {
        axiosInstance
          .post(`/viewRoomsByHotelId/${localStorage.getItem("hotellogid")}`)
          .then((res) => {
            console.log(res,'viewroom');
            setroom(res.data.data);
          })
          .catch((res) => {
            console.log(res);
          });
      }, []);
      const handleDelete = (id) => {
        axiosInstance
          .post(`/deleteRoomById/${id}`)
          .then((res) => {
            window.location.reload(false)
            console.log(res,"dltroom");
          })
          .catch((err) => {
            console.log(err);
          });
      };
      if (localStorage.getItem("hotellogid")!=null) 
  return (
    <div>
         <>
    <HotelNav />
    <div style={{ minHeight: "300px"}}>
      <div class="container text-center" >
        <div class="row">
          {room.map((a) => {
            return (
              <div class="col">
                <div class="card" style={{ width: "300px", margin: "auto",marginTop:"2rem" }}>
                  {/* <img
                    src={`http://localhost:4006/${a.thumbnail.originalname}`}
                    class="card-img-top"
                    alt="..."
                    height="240px"
                  /> */}
                  <div class="card-body" style={{boxShadow:"1px 1px 2px 2px black"}}>
                    <h5 class="card-title" style={{color:"blue",boxShadow:"1px 1px 2px 2px black"}}>Hotel No: {a.roomNo}</h5>
                    <p class="card-text" style={{color:'black'}}>Account number: {a.ac}</p>
                    <p class="card-text" style={{color:'black'}}>Hotel Type: {a.type}</p>

                    {/* <Link to={`/ViewVideo/${a._id}`} class="btn btn-primary">
                      View Video
                    </Link> */}
                     <div >
                              <div >
                                <button
                                  type="button"
                                  class="btn btn-danger"
                                  onClick={() => handleDelete(a._id)}
                                  style={{ width:"50%"}}
                                  href=""
                                >
                                  Delete Room
                                </button>
                                <Link to={`/EditRoom/${a._id}`}
                           class="btn btn-success"
                           style={{margin:"10px 10px"}}
                        >
                          Edit Room
                        </Link>
                              </div>
                            </div>
                           
                  </div>
                </div>
              </div>
            );
          })
          }
        </div>
      </div>
    </div>
  </>

    </div>
  )
}

export default ViewRoom