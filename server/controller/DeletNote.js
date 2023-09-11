const Note = require("../models/Note");

const DeletNotes = async (req, res) => {
  try {
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
    
     note = await Note.findByIdAndDelete(
      req.params.id);
   
    return res.status(200).json({
      success: true,
      data: "This is deleted"+ [note],
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = {
  DeletNotes,
};
