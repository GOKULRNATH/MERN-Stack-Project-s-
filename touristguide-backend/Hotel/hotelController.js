

const hotels=require('./hotelSchema')



//hotel Registration 

const registerHotel=(req,res)=>{
    const newCustomer=new hotels({
        hotelName:req.body.hotelName,
        regNo:req.body.regNo,
        city:req.body.city,
        country:req.body.country,
        pincode:req.body.pincode,
        contact:req.body.contact,
        email:req.body.email,
        password:req.body.password
    })
    newCustomer.save().then(data=>{
        res.json({
            status:200,
            msg:"Inserted successfully",
            data:data
        })
    }).catch(err=>{
        res.json({
            status:500,
            msg:"Data not Inserted",
            Error:err
        })
    })
}
//Hotel Registration -- finished

//Login Hotel 
const loginHotel=(req,res)=>{
  const email=req.body.email
  const password=req.body.password

  hotels.findOne({email:email}).exec().then(data=>{
    if(password==data.password){
      res.json({
        status:200,
        msg:"Login successfully",
        data:data
    })
  }else{
    res.json({
      status:500,
      msg:"password Mismatch",
      
  })
  }
  
}).catch(err=>{
res.json({
    status:500,
    msg:"User not found",
    Error:err
})
})
  };


//Login Hotel --finished


//View all Hotels

const viewApprovedHotels=(req,res)=>{
  hotels.find({isactive:true }).exec()
  .then(data=>{
    if(data.length>0){
    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  }else{
    res.json({
      status:200,
      msg:"No Data obtained "
  })
  }
}).catch(err=>{
    res.json({
        status:500,
        msg:"Data not Inserted",
        Error:err
    })
})

}

// view Hotels finished

// view hotel by id
const viewHotelById=(req,res)=>{
  hotels.findById({_id:req.params.id}).exec()
  .then(data=>{
    
    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  
}).catch(err=>{
    res.json({
        status:500,
        msg:"Data not Inserted",
        Error:err
    })
})

}


//



// view hotel by id
const deleteHotelById=(req,res)=>{
    hotels.findByIdAndDelete({_id:req.params.id}).exec()
    .then(data=>{
      
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    
  }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not Inserted",
          Error:err
      })
  })
  
  }
  
  
  //

//update Hotels by id
const editHotelsById=(req,res)=>{

  hotels.findByIdAndUpdate({_id:req.params.id},{
    hotelName:req.body.hotelName,
    regNo:req.body.regNo,
    city:req.body.city,
    country:req.body.country,
    pincode:req.body.pincode,
    contact:req.body.contact,
    email:req.body.email
    })
.exec().then(data=>{
  res.json({
      status:200,
      msg:"Updated successfully"
  })
}).catch(err=>{
  res.json({
      status:500,
      msg:"Data not Updated",
      Error:err
  })
})
}


//Customer forgot password
const forgotPassword=(req,res)=>{
  hotels.findOne({email:req.body.email}).exec()
  .then(data=>{
    if(data==null){
      res.json({
        status:500,
        msg:"User not Found"
    })
    }
    else{
      hotels.findOneAndUpdate({email:req.body.email},{
        password:req.body.password
      }).exec().then(data=>{
        res.json({
          status:200,
          msg:"Updated successfully"
      })
    }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not Updated",
          Error:err
      })
    })
    }
  })
}
//finished -- forgot password

//View all  hotel requests

const viewHotelRequests=(req,res)=>{
  hotels.find({isactive:false}).exec()
  .then(data=>{
    if(data.length>0){
    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  }else{
    res.json({
      status:200,
      msg:"No Data obtained "
  })
  }
}).catch(err=>{
    res.json({
        status:500,
        msg:"Data not obtained",
        Error:err
    })
})

}
//Hotel Approval by admin
const ApproveHotel=(req,res)=>{

    
  hotels.findByIdAndUpdate({_id:req.params.id},{
    isactive:true
    })
.exec().then(data=>{
  res.json({
      status:200,
      msg:"Updated successfully"
  })
}).catch(err=>{
  res.json({
      status:500,
      msg:"Data not Updated",
      Error:err
  })
})
}

//view all hotel Names
const viewHotelNames=(req,res)=>{
  hotels.find({isactive:true},{_id:0,hotelName:1}).exec()
  .then(data=>{
    if(data.length>0){
    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  }else{
    res.json({
      status:200,
      msg:"No Data obtained "
  })
  }
}).catch(err=>{
    res.json({
        status:500,
        msg:"Data not Inserted",
        Error:err
    })
})

}

module.exports={registerHotel,loginHotel,viewApprovedHotels,editHotelsById,
  forgotPassword,deleteHotelById,viewHotelById,viewHotelRequests,ApproveHotel,
viewHotelNames}