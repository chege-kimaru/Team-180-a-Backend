const mongoose = require('mongoose');

const { Schema } = mongoose;

const classSchema = new Schema(
  {
    name: { type: String, required: true },
    schoolId: { type: Schema.Types.ObjectId, ref: 'School', required: true },
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],
    subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
  },
  { timestamps: true }
);

const Class = mongoose.model('Class', classSchema);
module.exports = Class;
