import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true

    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true

    },
    age: {
        type: Number,
        required: true,
        
    }

})

const userModel = mongoose.model("userModel", userSchema);

export default  userModel