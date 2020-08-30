const mongoose = require('mongoose');

const { Schema } = mongoose;

const teacherSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    levelTaught: { type: String, required: true },
    schools: [{ type: Schema.Types.ObjectId, ref: 'School' }],
    classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
    subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'Teacher' },
  },
  { timestamps: true }
);

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
