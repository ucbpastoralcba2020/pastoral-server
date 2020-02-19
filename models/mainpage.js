import mongoose, { Schema } from "mongoose";

const mainPageSchema = new Schema({
    id_main: String,

    slider1: { type: String, trim: true },
    image1: String,
    nameImg1: String,

    slider2: { type: String, trim: true },
    image2: String,
    nameImg2: String,

    slider3: { type: String, trim: true },
    image3: String,
    nameImg3: String,

    title1: { type: String, trim: true },
    paragraaf1: { type: String, trim: true },

    title2: { type: String, trim: true },
    paragraaf2: { type: String, trim: true },

    title3: { type: String, trim: true },
    paragraaf3: { type: String, trim: true },

    aboutUs:{ type: String, trim: true },
    image4: String,
    nameImg4: String,

    paragraafCourses:{ type: String, trim: true },

    paragraafGallery:{ type: String, trim: true }    
});
const Main = mongoose.model("main", mainPageSchema);
export default Main;