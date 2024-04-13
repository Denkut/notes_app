const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  owner: {
    type: String,
    require: true,
  },
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
