const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * @swagger
 *  components:
 *    schemas:
 *      Subject:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            description: Name of subject
 *          classes:
 *            type: array
 *            description: The classes that have this subject
 *          topics:
 *            type: array
 *            description: The topics in this subject
 *        example:
 *           name: Data Structures and ALgorithms
 *           classes: []
 *           topics: []
 *
 */

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
