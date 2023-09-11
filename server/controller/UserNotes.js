const NoteModel = require("../models/Note");



const UserNotes = async (req, res) => {
  const UserId = req.user.id;
  const notes = {user:UserId}
    try {
      const note = await NoteModel.find(notes);
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
    UserNotes
  };