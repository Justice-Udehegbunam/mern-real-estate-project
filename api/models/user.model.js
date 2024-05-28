import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // tells mongodb to make sure each user name that is added is unique
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
  /**
   * The timestamps option tells mongoose to assign createdAt and updatedAt fields to your schema. The type
   * assigned is Date. By default, the names of the fields are createdAt and updatedAt. Customize the
   * field names by setting timestamps.createdAt and timestamps.updatedAt.
   */
);

const User = mongoose.model("User", userSchema);

export default User;
