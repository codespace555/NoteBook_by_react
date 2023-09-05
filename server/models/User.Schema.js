const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
      minLength: [5, "Name must be at least 5 char"],
      maxLength: [50, "Name must be less then 50 char"],
      trim: true,
    },
    email: {
      type: String,
      require: [true, "email is required"],
      lowercase: true,
      unique: [true, "email is already exist"],
    },
    bio : {
      type:String,
      required:true,
      minLength: [1, "Name must be at least 5 char"],
      maxLength: [550, "Name must be less then 50 char"],
  },
    password: {
      type: String,
      select: false, // this field will not show in response data
    },
    date:{
      type:Date ,
         default: Date.now
    }
  },
  {
    timestamps: true,
  }
);

    const userModel = mongoose.model("user", userSchema);
    module.exports = userModel;