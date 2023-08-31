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
    number : {
        type : Number,
        require : true
    },
    address:{
        type : String,
        require : true
    },
    landMark : {
        type : String,
        require : true
    },
    pincode : {
        typr : Number,
        require : true
    }
},{
    timestamps : true
}
)


const Shipping = mongoose.model("Shipping",userSchema)

export default Shipping