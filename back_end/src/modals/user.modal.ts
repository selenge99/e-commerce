import { model, Schema } from "mongoose";

interface IUser {
  _id: Schema.Types.ObjectId;
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  phoneNumber: String;
  role: String;
  profile_image: String;
  address: String;
  created_at: Date;
  updated_at: Date;
}

const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: [true, "Hereglegchiin neriig zaaval oruulna"],
  },
  lastname: {
    type: String,
    required: [true, "Hereglegchiin ovgiig zaaval oruulna"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Hereglegchiin email hayg zaaval oruulna"],
  },
  password: {
    type: String,
    minLength: [8, "Hereglechiin nuuts ug bagadaa 8 temdegt baina"],
    required: [true, "Hereglegchiin nuuts ugiig zaaval oruulna"],
  },
  phoneNumber: Number,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  profile_image: {
    type: String,
    default:
      "https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.jpg?s=2048x2048&w=is&k=20&c=d23fZUtTjXCYd5V6wRB4-tdRzg7I7MWDQTTp8nHkl08=",
  },
  address: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const User = model("user", userSchema);

export default User;
