const Note = require("../models/Note");

const UpdateNotes = async (req, res) => {
  const { title, description, tag } = req.body;

  try {
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

   let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(400).json({
        success: false,
        message: "Not Found",
      });
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(400).json({
        success: false,
        message: "Not Allowed",
      });
    }
    
     note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
     
    );
   
    return res.status(200).json({
      success: true,
      data: note,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = {
  UpdateNotes,
};
