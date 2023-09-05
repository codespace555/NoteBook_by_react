const mongoose = require("mongoose");
const { Schema } = mongoose;
const NoteSchema = new Schema(
    {
      user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"

      },
      title: {
        type: String,
        required: [true, "Title is Required"],
        trim: true,
      },
      description: {
        type: String,
        require: [true, " descriptioni required"],
      },
      bio : {
        type:String,
        required:true,
        minLength: [1, "Name must be at least 5 char"],
        maxLength: [550, "Name must be less then 50 char"],
    },
     tag: {
        type: String,
        default: "General"
      },
      date:{
        type:Date ,
         default: Date.now

      },
    })

    const NoteModel = mongoose.model("Note", NoteSchema);
    module.exports = NoteModel;