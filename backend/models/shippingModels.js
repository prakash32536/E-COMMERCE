import mongoose from 'mongoose'

const shippingSchema = mongoose.Schema({
    name:{
        type: String,
        maxLength: 12
    },
    email:{
        type: String,
        unique: 32
    },
    number : {
        type : Number
    },
    address:{
        type : String
    },
    landMark : {
        type : String
    },
    pincode : {
        typr : Number
    },
    userId: {
        type : String
    }
},{
    timestamps : true
}
)


const Shipping = mongoose.model("Shipping",shippingSchema)

export default Shipping