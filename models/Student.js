const mongoose = require('mongoose');

const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    level: { type: String, required: true },
    schools: [{ type: Schema.Types.ObjectId, ref: 'School' }],
    classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
    subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
    email: String,
    password: String,
    role: { type: String, default: 'student' },
  },
  { timestamps: true }
);

const student = mongoose.model('Student', studentSchema);
module.exports = student;
