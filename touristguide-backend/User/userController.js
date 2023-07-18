

const users=require('./userSchema')
const jwt=require('jsonwebtoken')

const secret = 'your-secret-key'; // Replace this with your own secret key

const createToken = (user) => {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
};



//User Registration 

const registerUser=(req,res)=>{
    const newUser=new users({
        name:req.body.name,
        gender:req.body.gender,
        city:req.body.city,
        country:req.body.country,
        contact:req.body.contact,
        email:req.body.email,
        password:req.body.password,
       idtype:req.body.idtype,
       idnumb:req.body.idnumb
    })
    newUser.save().then(data=>{
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
//User Registration -- finished
//Login User 
const login = (req, res) => {
  
  const { email, password } = req.body;

  users.findOne({ email }).exec().then (user => {
   

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

      if (user.password!=password) {
        return res.status(500).json({ msg:'incorrect pwd' });
      }

    
      const token = createToken(user);

      res.status(200).json({ user, token });
    })
    .catch(err=>{
      console.log(err);
        return res.status(500).json({ msg: 'Something went wrong' });
      
    })
  
};
//validate


const requireAuth = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  console.log("t1",token);
  console.log("secret",secret);
  if (!token) {
    return res.status(401).json({ msg: 'Unauthorized' });
  }
  jwt.verify(token, secret, (err, decodedToken) => {
    console.log(decodedToken);
    if (err) {
      return res.status(401).json({ messamsgge: 'Unauthorized' ,err:err});
    }

    req.user = decodedToken.userId;
    next();
    return res.status(200).json({ msg: 'ok' ,user:decodedToken.userId});
  });
  console.log(req.user);
};

//Login User --finished



//View all Users

const viewUsers=(req,res)=>{
  users.find().exec()
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

// view User finished


//update User by id
const editUserById=(req,res)=>{

  
    
  users.findByIdAndUpdate({_id:req.params.id},{
    name:req.body.name,
    gender:req.body.gender,
    city:req.body.city,
    country:req.body.country,
    contact:req.body.contact,
    email:req.body.email,
   idtype:req.body.idtype,
   idnumb:req.body.idnumb
    })
.exec().then(data=>{
  res.json({
      status:200,
      msg:"Updated successfully"
  })
}).catch(err=>{
  console.log(err);
  res.json({
      status:500,
      msg:"Data not Updated",
      Error:err
  })
})
}

//View  customer by ID

const vieUserById=(req,res)=>{
  users.findOne({_id:req.params.id}).exec()
  .then(data=>{

    console.log(data);
    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  
}).catch(err=>{
  console.log(err);
    res.json({
        status:500,
        msg:"No Data obtained",
        Error:err
    })
})

}


//del  customer by ID

const delUserById=(req,res)=>{
  users.findByIdAndDelete({_id:req.params.id}).exec()
  .then(data=>{

    console.log(data);
    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  
}).catch(err=>{
  console.log(err);
    res.json({
        status:500,
        msg:"No Data obtained",
        Error:err
    })
})
}


//rest forgot password
const forgotPassword=(req,res)=>{
  users.findOne({email:req.body.email}).exec()
  .then(data=>{
    if(data==null){
      res.json({
        status:500,
        msg:"User not Found"
    })
    }
    else{
      users.findOneAndUpdate({email:req.body.email},{
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



const bookPackage=(req,res)=>{
  const newUser=new users({
    packageId:req.body.packageId,
    custId:req.body.custId,
    doj:req.body.doj,
    comments:req.body.comments,
  
  })
  newUser.save().then(data=>{
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

//View booking by customer 

const viewUserById=(req,res)=>{
  users.findOne({_id:req.params.id}).exec()
  .then(data=>{

    console.log(data);
    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  
}).catch(err=>{
  console.log(err);
    res.json({
        status:500,
        msg:"No Data obtained",
        Error:err
    })
})

}


module.exports={registerUser,login,vieUserById,editUserById,viewUsers,delUserById,forgotPassword,bookPackage,}