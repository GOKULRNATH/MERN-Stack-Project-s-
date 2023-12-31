let booking = require("./booking");

//subscribe a pgm

const addBooking = (req, res) => {
  let date = new Date();
  const subscription = new booking({
    packageId: req.body.pid,
    date: date,
    custId: req.body.custId,
    aid: req.body.aid,
    comments: req.body.comments,
    doj: req.body.doj,
  });
  subscription
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Inserted successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Please enter all the mandatory fields",
        Error: err,
      });
    });
};

//View my booking by custid

const viewBookingByCId = (req, res) => {
  booking
    .find({ cid: req.params.id, isactive: true })
    .populate("packageId")
    .populate("aid")
    .eexec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "Data obtained successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        msg: "No Data obtained",
        Error: err,
      });
    });
};

//Payment updation

const UpdateBookingByCId = (req, res) => {
  booking
    .findByIdAndUpdate({ _id: req.params.id }, { isactive: true })
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "Data obtained successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        msg: "No Data obtained",
        Error: err,
      });
    });
};

//View my booking by Agency

const viewBookingByAId = (req, res) => {
  booking
    .find({ aid: req.params.id })
    .populate("packageId")
    .populate("custId")
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "Data obtained successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        msg: "No Data obtained",
        Error: err,
      });
    });
};

// add rating to mentor by  cid
const addRating = (req, res) => {
  let newRate = parseInt(req.body.rating);
  let rating = 0;
  booking
    .findById({ _id: req.params.id })
    .exec()
    .then((data) => {
      rating = data.rating;
      if (data.rating != 0) rating = (rating + newRate) / 2;
      else rating = newRate;
      console.log(rating);
      booking
        .findByIdAndUpdate(
          { _id: req.params.id },
          {
            rating: rating,
          }
        )
        .exec()
        .then((data) => {
          res.json({
            status: 200,
            msg: "Data obtained successfully",
            data: data,
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            msg: "Data not Inserted",
            Error: err,
          });
        });
    });
};

module.exports = {
  addBooking,
  viewBookingByCId,
  viewBookingByAId,
  addRating,
  UpdateBookingByCId,
};
