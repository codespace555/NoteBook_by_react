const Note = require("../models/Note");

const addNotes = async (req, res) => {
  const { title, description, tag } = req.body;
  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "Ever Field is required",
    });
  }
  if (!req.user.id) {
    return res.status(400).json({
      success: false,
      message: "Ever Field is required",
    });
  }


  try {
    const newNotes = new Note({
      title,
      description,
      tag,
      user: req.user.id,
    });

    const saveNotes = await newNotes.save();
    return res.status(200).send({
      success: true,
      data: saveNotes,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
 
};

module.exports = {
  addNotes,
};
