
const tourists=require('./touristPlaces')

//hotel Registration 

const addPackage=(req,res)=>{
    const newCustomer=new tourists({
        district:req.body.district,
        city:req.body.city,
        loc:req.body.loc,
        travelmode:req.body.travelmode,
        distance:req.body.distance,
        travelmode:req.body.travelmode,
        locType:req.body.locType
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



//View all packeges

const viewAllPlaces=(req,res)=>{
    tourists.find({}).exec()
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
  
  // view packeges finished
  
  // view packeges by id
  const viewTouristPlaceById=(req,res)=>{
    tourists.findById({_id:req.params.id}).exec()
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
  
  
  // view packeges by id
  const searchTouristPlaceByDistrict=(req,res)=>{
    tourists.find({district:req.params.district}).exec()
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
  

  
  
  // view turist place by district and city
  const searchTouristPlaceByDistrictAndCity=(req,res)=>{
    tourists.find({district:req.params.district,city:req.body.city}).exec()
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
  

  const searchTouristPlaceByLoc=(req,res)=>{
    tourists.find({loc:req.body.loc}).exec()
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
    
  // view packeges by id
  const deleteTouristplaceById=(req,res)=>{
    tourists.findByIdAndDelete({_id:req.params.id}).exec()
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
  
  //update packeges by id
  const editTouristPlaceById=(req,res)=>{
  
    tourists.findByIdAndUpdate({_id:req.params.id},{
        title:req.body.title,
        destination:req.body.destination,
        cost:req.body.cost,
        days:req.body.days,
        nights:req.body.nights,
        travelmode:req.body.travelmode,
        accomodation:req.body.accomodation,
        food:req.body.food
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
  
  module.exports={addPackage,viewTouristPlaceById,viewAllPlaces,editTouristPlaceById,deleteTouristplaceById,searchTouristPlaceByDistrict,searchTouristPlaceByDistrictAndCity,searchTouristPlaceByLoc}