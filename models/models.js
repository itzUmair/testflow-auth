import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    user_id: { type: Number, required: true, unique: true }, 
    first_name: { type: String, required: true, maxLength: 50 }, 
    last_name: { type: String, required: true, maxLength: 50 }, 
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true, minLength: 8 }, 
  },
  { collection: "users" } 
);

const User = mongoose.model("User", UserSchema);

export default User;