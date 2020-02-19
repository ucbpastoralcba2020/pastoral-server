import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({
    caption: { type: String },
    createdAt: { type: String },
    src: { type: String },
    id_video: String,
});
const Video = mongoose.model("video", videoSchema);
export default Video;