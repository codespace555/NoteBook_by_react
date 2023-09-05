const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
require("dotenv").config()

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

// bcrypt.hash....................................

userSchema.pre("save", async function (next) {
  
  this.password = await bcrypt.hash(this.password, 10);
  return next();
});

// JWT....................................
userSchema.methods = {
  jwtToken() {
    return JWT.sign(
      {
        id: this._id,
        email: this.email,
      },
      process.env.SECRET,
      { expiresIn: "24h" }
    );
  },
  
};
    const userModel = mongoose.model("user", userSchema);
    module.exports = userModel;