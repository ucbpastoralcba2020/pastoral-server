import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
    name: { type: String, trim: true },
    parallel: { type: String, trim: true },
    quota: { type: Number, trim: true },
    id_course: String,
    place: { type: String, trim: true },
    teacher: Schema({ name: String, firstSurname: String, secondSurname: String, cellPhoneNumber: String }),
    enrolled_students: [Schema({ idCard: String, name: String, firstSurname: String, secondSurname: String, cellPhoneNumber: String, collegeCareer: String, enrolledDate: String })],

    duration: { type: String, trim: true },
    createdAt: String,
    endDate: String,
    startDate: String,

    description: { type: String, trim: true },
    headline: { type: String, trim: true },
    price: { type: String, trim: true },
    inOffer: String,

    image: String,
    nameImg: String,
    removed: { type: Boolean, default: false}

});

const Course = mongoose.model("course", courseSchema);

export default Course;