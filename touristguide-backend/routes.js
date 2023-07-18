const express=require('express')
const router=express.Router()
const users=require('./User/userController')
const restrnt=require('./Restaurant/restController')
const hotels=require('./Hotel/hotelController')
const rooms=require('./Hotel/roomController')
const food=require('./Restaurant/foodController')
const guide=require('./Guide/agencyController')
const booking=require('./Guide/bookingController')



//User  routes
router.post('/registerUser',users.registerUser)
router.post('/loginUser',users.login)
router.post('/viewUsers',users.viewUsers)
router.post('/editUserById/:id',users.editUserById)
router.post('/viewUserById/:id',users.vieUserById)

//Restaurant  routes
router.post('/registerRestaurant',restrnt.addRestaurant)
router.post('/loginRestaurant',restrnt.login)
router.post('/viewRestaurants',restrnt.viewRestaurants)
router.post('/editRestaurantById/:id',restrnt.editRestaurantById)
router.post('/viewRestaurantById/:id',restrnt.vieRestaurantById)
router.post('/deleteRestaurantById/:id',restrnt.delRestaurantById)
router.post('/forgotPassword',restrnt.forgotPassword)

//hotel routes
router.post('/registerHotel',hotels.registerHotel)
router.post('/loginHotel',hotels.loginHotel)
router.post('/viewAprvdHotels',hotels.viewApprovedHotels)
router.post('/editHotelById/:id',hotels.editHotelsById)
router.post('/forgotPasswordHotel',hotels.forgotPassword)
router.post('/viewHotelById/:id',hotels.viewHotelById)
router.post('/deleteHotelById/:id',hotels.deleteHotelById)
router.post('/viewHotelReqs',hotels.viewHotelRequests)
router.post('/approveHotels/:id',hotels.ApproveHotel)
router.post('/viewHotelNames',hotels.viewHotelNames)

//rooms
router.post('/registerRoom/:id',rooms.addRoom)
router.post('/viewRoomById/:id',rooms.viewRoomById)
router.post('/viewRoomsByHotelId/:id',rooms.viewRoomsByHotelId)
router.post('/editRoomsById/:id',rooms.editRoomsById)
router.post('/updateStatus/:id',rooms.updateStatus)
router.post('/deleteRoomById/:id',rooms.deleteRoomById)
router.post('/viewRoomNums',rooms.viewRoomNums)
router.post('/viewRooms',rooms.viewRooms)


//food
router.post('/addFood/:restid',food.upload,food.addFood)
router.post('/viewFoodById/:id',food.viewFoodById)
router.post('/viewFoodByRest/:id',food.viewFoodByRest)
router.post('/editFoodById/:id',food.editFoodById)
router.post('/deleteFoodById/:id',food.deleteFoodById)
router.post('/viewAllFoodItems',food.viewAllFoodItemss)

//guide
router.post('/addPackage',guide.addPackage)
router.post('/editpackegesById/:id',guide.editpackegesById)

router.post('/viewAllPackages',guide.viewAllPackages)
router.post('/viewpackegesById/:id',guide.viewpackegesById)
router.post('/login',guide.login)
router.post('/registerAgency',guide.registerAgency)
router.post('/editAgencysById/:id',guide.editAgencysById)
router.post('/forgotPassword',guide.forgotPassword)
router.post('/viewAgencyById/:id',guide.viewAgencyById)
router.post('/ApproveAgency/:id',guide.ApproveAgency)
router.post('/deleteAgencyById/:id',guide.deleteAgencyById)
router.post('/deletepackegesById/:id',guide.deletepackegesById)
router.post('/viewAgencyRequests',guide.viewAgencyRequests)
router.post('/viewApprovedAgencies',guide.viewApprovedAgencies)
router.post('/viewAllPackagesByAgencyId/:id',guide.viewAllPackagesByAgencyId)
router.post('/viewpackegesByDest',guide.viewpackegesByDest)

router.post('/addBooking',booking.addBooking)
router.post('/viewBookingByAgencyId/:id',booking.viewBookingByAId)
router.post('/viewBookingByCId/:id',booking.viewBookingByCId)
router.post('/editFoodById/:id',booking.addRating)
router.post('/UpdateBookingByCId/:id',booking.UpdateBookingByCId)

module.exports=router