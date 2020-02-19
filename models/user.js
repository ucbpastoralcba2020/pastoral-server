import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    role: { type: String, default: "Estudiante", require: true },
    firstSurname: { type: String, trim: true, require: true },
    secondSurname: { type: String, trim: true, required: true },
    name: { type: String, trim: true, required: true },
    cellPhoneNumber: { type: String, trim: true, required: true },
    idCard: { type: String, trim: true, require: true },
    email: { type: String, trim: true, require: true, unique: true },
    password: { type: String, require: true, trim: true },
    collegeCareer: { type: String, require: true, trim: true },
    state: { type: Number, default: 1 },

    course: [{ type: Schema.ObjectId, ref: 'course' }],
});

const User = mongoose.model("user", userSchema);

export default User;