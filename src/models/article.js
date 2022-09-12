import mongoose from "mongoose";
const Schema = mongoose.Schema

const articleSchema = new Schema({
    name: String,
    topic: String,
    date: Date,
})

export default mongoose.model('Article', articleSchema)