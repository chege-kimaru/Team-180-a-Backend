const mongoose = require('mongoose');

const { Schema } = mongoose;

const schoolSchema = new Schema(
  {
    name: { type: String, required: true },
    adminId: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true },
    level: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true },
    postalAddress: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],
    classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
  },
  { timestamps: true }
);

const School = mongoose.model('School', schoolSchema);
module.exports = School;
