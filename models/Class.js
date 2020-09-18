const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * @swagger
 *  components:
 *    schemas:
 *      Class:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            description: Name of class
 *          schoolId:
 *            type: string
 *            description: Id of the school
 *          students:
 *            type: array
 *            description: The students in this class
 *          teachers:
 *            type: array
 *            description: The teachers in this class
 *          subjects:
 *            type: array
 *            description: The subjects in this class
 *        example:
 *           name: 4A
 *           schoolId: 5f648baac38d3764434b736a
 *           students: []
 *           subjects: []
 *           teachers: []
 *
 */

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
