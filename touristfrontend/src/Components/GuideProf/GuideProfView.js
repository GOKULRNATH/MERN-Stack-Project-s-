import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../img/user-verification-symbol-for-interface.png";
import axiosInstance from "../BaseUrl";
import GuideNav from "../Guide/GuideNav";

function GuideViewProf() {
  const [gset, setgset] = useState({});
  useEffect(() => {
    // const storedUser = localStorage.getItem("users");
    const id = localStorage.getItem("guidelogid");
    console.log(id);

    axiosInstance.post(`/viewAgencyById/${id}`).then((res) => {
      setgset(res.data.data);
    });
  }, []);
  return (
    <div  style={{
        backgroundImage:
        'url("https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149005675.jpg?w=740&t=st=1688023084~exp=1688023684~hmac=6368ed33256bd30137e85a75a1ed505866c2d7718e89e26350a7ffa0040c6f5d")',
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
      }}>
      <GuideNav/>
      <section
        class=""
       


      >
        <div class="container3 py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-6 mb-4 mb-lg-0">
              <div class="card mb-3" style={{ borderRadius: ".5rem;" }}>
                <div class="row g-0">
                  <div
                    class="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: " .5rem;",
                      borderBottomLeftRadius: ".5rem;",
                    }}
                  >
                    <img
                      src={img1}
                      alt="Avatar"
                      class="img-fluid my-5"
                      style={{ width: "80px;" }}
                    />
                    <h5 style={{ color: "Red" }}>{gset.Name}</h5>
                    {/* <p>Web Designer</p> */}
                    <i class="far fa-edit mb-5"></i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body p-4">
                      <h6>Agency Profile</h6>

                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Email:</h6>
                          <p class="text-muted">{gset.email}</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Contact:</h6>
                          <p class="text-muted">{gset.contact}</p>
                        </div>
                      </div>
                      {/* <h6>Projects</h6> */}
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Password:</h6>
                          <p class="text-muted">{gset.password}</p>
                        </div>
                        <hr class="mt-0 mb-4" />

                        <div class="col-6 mb-3">
                          <h6>City:</h6>
                          <p class="text-muted">{gset.city}</p>
                        </div>
                        <hr class="mt-0 mb-4" />
                        <div class="col-6 mb-3">
                          <h6>Country:</h6>
                          <p class="text-muted">{gset.country}</p>
                        </div>
                        <div class="col-6 mb-3"></div>
                        <hr class="mt-0 mb-4" />
                      </div>
                      {/* <div class="d-flex justify-content-start">
                        <a href="#!">
                          <i class="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i class="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i class="fab fa-instagram fa-lg"></i>
                        </a>
                      </div> */}
                      <Link to="/GuideProfEdit">
                        <button
                          type="submit"
                          class="btn btn-danger h-23 w-100 py-2"
                        >
                          Edit
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GuideViewProf;
