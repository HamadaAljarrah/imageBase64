import mongoose, { Schema, model } from "mongoose"

const connectToMongoDb = mongoose.connect("mongodb://localhost:27017/imageUpload")
    .then(() => console.log("conntect to MangoDB"))
    .catch(err => console.log(err))



const userSchema = new Schema({
    image: { type: String, required: true }
})

const User = model('user', userSchema);
export { User, connectToMongoDb };