

const room=require('./roomSchema')



//hotel Registration 

const addRoom=(req,res)=>{
    const newRoom=new room({
        roomNo:req.body.roomNo,
        ac:req.body.ac,
        type:req.body.type,
        hotel_id:req.params.id,
        price:req.body.price
    })
    newRoom.save().then(data=>{
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

//View all Rooms

const viewRooms=(req,res)=>{
  room.find().exec()
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

// view Rooms finished
//view room by hotel id
const viewRoomsByHotelId=(req,res)=>{
  room.find({hotel_id:req.params.id}).exec()
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
// view Room by id
const viewRoomById=(req,res)=>{
  room.findById({_id:req.params.id}).populate('hotel_id').exec()
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



// del Room by id
const deleteRoomById=(req,res)=>{
    room.findByIdAndDelete({_id:req.params.id}).exec()
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
const editRoomsById=(req,res)=>{

  room.findByIdAndUpdate({_id:req.params.id},{
    roomNo:req.body.roomNo,
        ac:req.body.ac,
        type:req.body.type
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
//rerve room 
const updateStatus=(req,res)=>{

    room.findByIdAndUpdate({_id:req.params.id},{
      status:false
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

//view all roomnumbers
const viewRoomNums=(req,res)=>{
    room.find({isactive:true},{_id:0,roomNo:1}).exec()
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

module.exports={addRoom,viewRooms,viewRoomsByHotelId,updateStatus,editRoomsById,deleteRoomById,viewRoomNums,viewRoomById}