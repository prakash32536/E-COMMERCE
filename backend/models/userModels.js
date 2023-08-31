import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require : true,
        trim: true,
        maxLength: 12
    },
    email:{
        type: String,
        require: true,
        unique: 32
    },
    password : {
        type : String,
        require : true
    },
    about:{
        type : String
    },
    role : {
        type : Number,
        default : 0
    },
    salt : String,
    history : {
        typr : Array,
        default : []
    }
},{
    timestamps : true
}
)

// userSchema.methods.matchPassword = async function(enteredPassword){
//     return password
// }

const User = mongoose.model("User",userSchema)

export default User