const mongoose = require('mongoose');

const { Schema } = mongoose;

const subjectSchema = new Schema(
  {
    name: { type: String, required: true },
    classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
    topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }],
  },
  { timestamps: true }
);

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;
