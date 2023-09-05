const NoteModel = require("../models/Note.js");

const UserNotes = async (req, res) => {
    const UserId = req.user.id;
  
    try {
      const notes = await NoteModel.findById(UserId);
      return res.status(200).json({
        success: true,
        data: notes,
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  };

module.exports = {
    UserNotes
  };