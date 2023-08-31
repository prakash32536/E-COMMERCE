import mongoose from 'mongoose';

function initDB() {
    // for already connection is established
    if(mongoose.connections[0].readyState) {
        console.log('connection is already exist')
        return
    }
    // for connecting with mongodb
    const uri = process.env.MONGO_URI;
    mongoose.connect(process.env.MONGO_URI,{});
    // for handling any error while connecting with mongodb
    mongoose.connection.on('connected', () => {
        console.log('connected to a mongoDb')
    })
    mongoose.connection.on('error', () => {
        console.log('error when u are trying to connect with mongodb')
    })
}

export default initDB;