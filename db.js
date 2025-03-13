const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("MongoDB connected..")
    }   catch (error) {
        console.error("MongodDB connection Failed:", error.message);
    }
}

module.exports = connectDB