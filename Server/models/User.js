import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    _id: {type: String, required: true},
    userName: {type: String, required: true},
    email: {type: String, required: true},
    image: {type: String, required: true},
    role: {type: String, enum: ["user", "hotelOwner"], default: "user"},
    recentSearchCities: [{type: String, required: true}],
},{timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;


// This code defines a Mongoose schema and model for a User in a hotel booking application.
// The User schema includes fields for user ID, username, email, image, role (either "user" or "hotelOwner"), and recent search cities.
// The model is then exported for use in other parts of the application.