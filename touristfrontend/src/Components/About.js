import React from "react";
import pic3 from "../img/pic3.webp";

function About() {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div
              class="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px;" }}
            >
              <div class="position-relative h-100">
                <img
                  class="img-fluid position-absolute w-100 h-100"
                  src={pic3}
                  alt=""
                  style={{ objectFit: "cover;" }}
                />
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 class="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 class="mb-4">
                Welcome to <span class="text-primary">Tourist</span>
              </h1>
              <p class="mb-4">
                Founded in 1984 and based in Srinagar India, Joy Tour and
                Travels is one stop travel house. Joy Travels is not just a
                name, but it's a commitment. We are a reputed and professionally
                managed company which has been in the business of Travel &
                Entertainment and Event Management for over 28 years. Exploring
                the Jammu and Kashmir can be one of the most rewarding
                experiences in life. However, planning a trip can be
                tremendously frustrating especially when one doesn't know where
                to start. We understand travel needs of all and deliver the best
                through meticulous planning. Joy Travels brings together a
                highly trained team of individuals with a combined management
                experience of over two decades in the travel industry. A team
                which has the confidence and the expertise to handle the most
                complex and challenging tasks they are faced with. Our rich
                experience helps us to understand your needs and give you a
                product that suits your requirement. Our linkages in the travel
                domain ensure that we provide our travelers and corporate
                clients with the best deals
              </p>
              <p class="mb-4">
                Joy Travels is a member of prestigious trade bodies like Kashmir
                tour and travel association and Just Dial and approved by
                Department of Tourism, Government of Jammu and Kashmir.
              </p>
              <div class="row gy-2 gx-4 mb-4">
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>First
                    Class Flights
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>
                    Handpicked Hotels
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>5 Star
                    Accommodations
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Latest
                    Model Vehicles
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>150
                    Premium City Tours
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>24/7
                    Service
                  </p>
                </div>
              </div>
              <a class="btn btn-primary py-3 px-5 mt-2" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
