import User from "../models/userModels.js"
import generateToken from "../config/generateTOken.js";



 const registerUser = async(req , res)=>{
   try {
    // console.log("req body", req.body)

    // distrack object came from front-end in register page 
    const { name , email, password, role} = req.body;

    // chacking user exist or  not 
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400).json({
            result : "user is alrady exist"
        })
    }
    const user = await User.create({
        name : name,
        email : email,
        password : password,
        role : role
    })

    if (user){
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email,
            about : user.about
        })
    }


   } catch (error) {
    console.log("error from register api", error)
   }
}



 const loginUser = async(req, res ) =>{
    try {
        const {email , password} = req.body
        const user = await User.findOne({email, password})

        if(user){
            res.status(200).json({
                _id : user._id,
                email : user.email,
                about : user.about,
                role : user.role,
                name : user.name,
                token : generateToken(user._id)
            })
        }else{
              res.status(401).json({
                result: "faild to login , invalid user name or password"
              })  
        }
    } catch (error) {
        console.log("error from log in api", error)
    }
}


//get all users

const getAllUsers = async(req, res) => {
    try {
        let match = {};
        if(req.query.role) {
            match.role = parseInt(req.query.role)
        };
      const Users = await User.aggregate([ { $match : match }]);
        return res.status(200).json(Users);
    } catch(error) {
        res.json({
            result: error
        })
    }
}

export {registerUser,loginUser, getAllUsers}

