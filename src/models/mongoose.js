import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import initDB from "./intiDB.js";

const connectMongoDB = async () => {
    const mongoServer = new MongoMemoryServer()
    await mongoServer.start()
    const mongoDBUrl = mongoServer.getUri()
    mongoose.connect(mongoDBUrl)
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB')
    })
    initDB()
}

export default connectMongoDB