import mongoose,{Schema} from "mongoose";

const imageSchema = new Schema({
    caption: {type: String},
    createdAt: {type:String},
    src:{type: String},
    thumbnail:{type:String},
    id_image: String,
    thumbnailWidth: {type:Number, default: 0},
    thumbnailHeight: {type:Number, default: 0},
});
const Image = mongoose.model("image",imageSchema);
export default Image;